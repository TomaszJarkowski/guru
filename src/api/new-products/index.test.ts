/* eslint-disable padded-blocks */
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import { fetchNewProducts } from './index';
import { NEW_PRODUCTS_API_URL } from './../URL/apiAddresses';

const mockData = {
    message: 'success',
    statusCode: 200,
    data: [
        {
            id: 1,
            name: 'Product1',
            price: 1.2,
            description: 'Description1',
            status: 'new',
            pathIMG: 'pathIMG1'
        },
        {
            id: 2,
            name: 'Product2',
            price: 1.2,
            description: 'Description2',
            status: 'new',
            pathIMG: 'pathIMG2'
        },
        {
            id: 3,
            name: 'Product3',
            price: 1.2,
            description: 'Description3',
            status: 'new',
            pathIMG: 'pathIMG3'
        }
    ]
};

const errorMockData = {
    message: 'Error message',
    statusCode: 404
};

describe('fetchNewProducts', () => {
    it('resolved', async () => {
        const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockData });

        const store = configureStore({
            reducer: function (state = '', action) {
                switch (action.type) {
                    case 'newProducts/fetch/fulfilled':
                        return action.payload;
                    default:
                        return state;
                }
            }
        });

        await store.dispatch(fetchNewProducts());
        expect(getSpy).toBeCalledWith(NEW_PRODUCTS_API_URL);
        const state = await store.getState();
        expect(state).toEqual(mockData.data);
    });

    it('rejected', async () => {
        const getSpy = jest.spyOn(axios, 'get').mockRejectedValueOnce({ data: errorMockData });

        const store = configureStore({
            reducer: function (state = '', action) {
                switch (action.type) {
                    case 'newProducts/fetch/rejected':
                        return action.payload;
                    default:
                        return state;
                }
            }
        });

        await store.dispatch(fetchNewProducts());
        expect(getSpy).toBeCalledWith(NEW_PRODUCTS_API_URL);
        const state = await store.getState();
        expect(state).toEqual('Oops something went wrong...');
    });
});

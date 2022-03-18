/* eslint-disable padded-blocks */
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import { fetchArticles } from './index';
import { ARTICLES_API_URL } from '../URL/apiAddresses';

const mockData = {
    message: 'success',
    statusCode: 200,
    data: [
        {
            id: 1,
            title: 'Article1',
            description: 'Description1',
            imgs: [{ src: 'src1' }],
            pathIMG: 'pathIMG1'
        },
        {
            id: 2,
            title: 'Article2',
            description: 'Description2',
            imgs: [{ src: 'src2' }],
            pathIMG: 'pathIMG2'
        },
        {
            id: 3,
            title: 'Article3',
            description: 'Description3',
            imgs: [{ src: 'src3' }],
            pathIMG: 'pathIMG3'
        }
    ]
};

const errorMockData = {
    message: 'Error message',
    statusCode: 404
};

describe('fetchArticles', () => {
    it('resolved', async () => {
        const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: mockData } });

        const store = configureStore({
            reducer: function (state = '', action) {
                switch (action.type) {
                    case 'articles/fetch/fulfilled':
                        return action.payload;
                    default:
                        return state;
                }
            }
        });

        await store.dispatch(fetchArticles());
        expect(getSpy).toBeCalledWith(ARTICLES_API_URL);
        const state = await store.getState();
        expect(state).toEqual(mockData);
    });

    it('rejected', async () => {
        const getSpy = jest.spyOn(axios, 'get').mockRejectedValueOnce({ data: errorMockData });

        const store = configureStore({
            reducer: function (state = '', action) {
                switch (action.type) {
                    case 'articles/fetch/rejected':
                        return action.payload;
                    default:
                        return state;
                }
            }
        });

        await store.dispatch(fetchArticles());
        expect(getSpy).toBeCalledWith(ARTICLES_API_URL);
        const state = await store.getState();
        expect(state).toEqual('Oops something went wrong...');
    });
});

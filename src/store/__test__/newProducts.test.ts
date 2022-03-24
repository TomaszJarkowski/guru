import { Product } from '../products/productsSlice';
import newProductsReducer, { initialState } from '../newProducts/newProductsSlice';
import { fetchNewProducts } from '../../api/new-products';
import { StatusFetch } from '../../constant/StatusFetch';

const mockData: Product[] = [
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
];

describe('newProducts reducer', () => {
    it('pending', () => {
        const action = {
            type: fetchNewProducts.pending.type
        };

        const state = newProductsReducer(initialState, action);

        expect(state.newProductsFetch).toEqual(StatusFetch.LOADING);
    });

    it('fulfilled', () => {
        const action = {
            type: fetchNewProducts.fulfilled.type,
            payload: mockData
        };

        const state = newProductsReducer(initialState, action);

        expect(state.newProductsFetch).toEqual(StatusFetch.SUCCESS);
        expect(state.errorMessage).toEqual('');
        expect(state.newProducts.length).toEqual(3);
        expect(state.newProducts[0].name).toEqual('Product1');
    });

    it('rejected', () => {
        const errorMessage = 'Uppps something wents wrong';

        const action = {
            type: fetchNewProducts.rejected.type,
            payload: errorMessage
        };

        const state = newProductsReducer(initialState, action);

        expect(state.newProductsFetch).toEqual(StatusFetch.FAIL);
        expect(state.errorMessage).toEqual(errorMessage);
        expect(state.newProducts.length).toEqual(0);
    });
});

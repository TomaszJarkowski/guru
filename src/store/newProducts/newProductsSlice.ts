import { createSlice } from '@reduxjs/toolkit';

import { fetchNewProducts } from '../../api/new-products/index';
import { Product } from '../products/productsSlice';
import { StatusFetch } from '../../constant/StatusFetch';
import { RootState } from '../store';

type NewProductsState = {
    newProducts: Product[];
    errorMessage: string;
    newProductsFetch: StatusFetch;
};

export const initialState: NewProductsState = {
    newProducts: [],
    newProductsFetch: StatusFetch.LOADING,
    errorMessage: ''
};

export const slice = createSlice({
    name: 'newProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewProducts.pending, (state) => {
                state.newProductsFetch = StatusFetch.LOADING;
                state.errorMessage = '';
            })
            .addCase(fetchNewProducts.fulfilled, (state, { payload }) => {
                state.newProductsFetch = StatusFetch.SUCCESS;
                state.errorMessage = '';
                state.newProducts = payload;
            })
            .addCase(fetchNewProducts.rejected, (state, { payload }) => {
                if (typeof payload === 'string') {
                    state.newProductsFetch = StatusFetch.FAIL;
                    state.errorMessage = payload;
                } else {
                    state.newProductsFetch = StatusFetch.FAIL;
                    state.errorMessage = 'Default Error Message';
                }
            });
    }
});

export const selectNewProductsState = (state: RootState): NewProductsState => state.newProducts;

export default slice.reducer;

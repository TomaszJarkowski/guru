import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { Product, StatusFetch } from '../products/productsSlice';

type NewProductsState = {
    newProducts: Product[];
    errorMessage: string;
    newProductsFetch: StatusFetch;
};

const initialState: NewProductsState = {
    newProducts: [],
    newProductsFetch: StatusFetch.LOADING,
    errorMessage: ''
};

export const slice = createSlice({
    name: 'newProducts',
    initialState,
    reducers: {
        setLoadingFetch: (state) => {
            state.newProductsFetch = StatusFetch.LOADING;
            state.errorMessage = '';
        },
        setErrorFetch: (state, action) => {
            state.newProductsFetch = StatusFetch.FAIL;
            state.errorMessage = action.payload;
        },
        setNewProducts: (state, action) => {
            state.newProductsFetch = StatusFetch.SUCCESS;
            state.newProducts = action.payload;
            state.errorMessage = '';
        }
    }
});

export const { setNewProducts, setLoadingFetch, setErrorFetch } = slice.actions;

export const selectNewProductsState = (state: any): NewProductsState => state.newProducts;

export default slice.reducer;

export const fetchNewProducts = () => async (dispatch: Function) => {
    const url = `${process.env.REACT_APP_API}/new-products`;

    dispatch(setLoadingFetch());

    try {
        const res = await axios.get(url);
        dispatch(setNewProducts(res.data.data));
    } catch (err) {
        dispatch(setErrorFetch(err.message));
    }
};

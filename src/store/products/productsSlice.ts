import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { StatusFetch } from '../../constant/StatusFetch';

export type Product = {
    id: number;
    name: string;
    price: number;
    status: string;
    pathIMG: string;
    description: string;
};

type ProductsState = {
    products: Product[];
    errorMessage: string;
    productsFetch: StatusFetch;
};

const initialState: ProductsState = {
    products: [],
    productsFetch: StatusFetch.LOADING,
    errorMessage: ''
};

export const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setLoadingFetch: (state) => {
            state.productsFetch = StatusFetch.LOADING;
            state.errorMessage = '';
        },
        setErrorFetch: (state, action) => {
            state.productsFetch = StatusFetch.FAIL;
            state.errorMessage = action.payload;
        },
        setProducts: (state, action) => {
            state.productsFetch = StatusFetch.SUCCESS;
            state.products = action.payload;
            state.errorMessage = '';
        }
    }
});

export const { setProducts, setLoadingFetch, setErrorFetch } = slice.actions;

export const selectProductsState = (state: any): ProductsState => state.products;

export default slice.reducer;

export const fetchProducts = () => async (dispatch: Function) => {
    const url = `${process.env.REACT_APP_API}/products`;

    dispatch(setLoadingFetch());

    try {
        const res = await axios.get(url);
        dispatch(setProducts(res.data.data));
    } catch (err) {
        dispatch(setErrorFetch(err.message));
    }
};

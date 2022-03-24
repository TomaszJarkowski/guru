import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { NEW_PRODUCTS_API_URL } from './../URL/apiAddresses';
import { TApiResponse } from '../../models/ApiResponse';
import { Product } from '../../store/products/productsSlice';

export const fetchNewProducts = createAsyncThunk(
    'newProducts/fetch',
    async (dispatch, thunkAPI) => {
        try {
            const { data } = await axios.get<TApiResponse<Product>>(NEW_PRODUCTS_API_URL);

            return data.data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return thunkAPI.rejectWithValue((err as AxiosError).message);
            }

            return thunkAPI.rejectWithValue('Oops something went wrong...');
        }
    }
);

import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { TApiResponse } from '../../models/ApiResponse';
import { TArticle } from '../../store/articles/articlesSlice';
import { ARTICLES_API_URL } from '../URL/apiAddresses';

export const fetchArticles = createAsyncThunk('articles/fetch', async (dispatch, thunkAPI) => {
    try {
        const { data } = await axios.get<TApiResponse<TArticle>>(ARTICLES_API_URL);

        return data.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return thunkAPI.rejectWithValue((err as AxiosError).message);
        }

        return thunkAPI.rejectWithValue('Oops something went wrong...');
    }
});

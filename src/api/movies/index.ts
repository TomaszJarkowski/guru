import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { TMovie } from './../../store/chanel/chanelSlice';
import { MOVIES_API_URL } from './../URL/apiAddresses';

export const fetchRecentMovies = createAsyncThunk('chanel/fetch', async (dispatch, thunkAPI) => {
    try {
        const { data } = await axios.get<{ items: TMovie[] }>(MOVIES_API_URL);

        return data.items;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return thunkAPI.rejectWithValue((err as AxiosError).message);
        }

        return thunkAPI.rejectWithValue('Oops something went wrong...');
    }
});

import { createSlice } from '@reduxjs/toolkit';

import { fetchRecentMovies } from '../../api/movies/index';
import { StatusFetch } from '../../constant/StatusFetch';
import { RootState } from '../store';

export type TMovie = {
    id: {
        videoId: number;
    };
    snippet: {
        title: string;
        thumbnails: {
            high: {
                url: string;
            };
        };
    };
};

type ChanelState = {
    films: TMovie[];
    errorMessage: string;
    filmsFetch: StatusFetch;
};

export const initialState: ChanelState = {
    films: [],
    filmsFetch: StatusFetch.LOADING,
    errorMessage: ''
};

export const slice = createSlice({
    name: 'chanel',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecentMovies.pending, (state) => {
                state.filmsFetch = StatusFetch.LOADING;
                state.errorMessage = '';
            })
            .addCase(fetchRecentMovies.fulfilled, (state, { payload }) => {
                state.filmsFetch = StatusFetch.SUCCESS;
                state.films = payload;
                state.errorMessage = '';
            })
            .addCase(fetchRecentMovies.rejected, (state, { payload }) => {
                if (typeof payload === 'string') {
                    state.filmsFetch = StatusFetch.FAIL;
                    state.errorMessage = payload;
                } else {
                    state.filmsFetch = StatusFetch.FAIL;
                    state.errorMessage = 'Default Error Message';
                }
            });
    }
});

export const selectChanelState = (state: RootState): ChanelState => state.chanel;

export default slice.reducer;

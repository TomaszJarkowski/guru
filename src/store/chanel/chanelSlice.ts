import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { StatusFetch } from '../products/productsSlice';

declare const process: {
    env: {
        REACT_APP_YT: string;
    };
};

export type TFilm = {
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
    films: TFilm[];
    errorMessage: string;
    filmsFetch: StatusFetch;
};

const initialState: ChanelState = {
    films: [],
    filmsFetch: StatusFetch.LOADING,
    errorMessage: ''
};

export const slice = createSlice({
    name: 'chanel',
    initialState,
    reducers: {
        setLoadingFetch: (state) => {
            state.filmsFetch = StatusFetch.LOADING;
            state.errorMessage = '';
        },
        setErrorFetch: (state, action) => {
            state.filmsFetch = StatusFetch.FAIL;
            state.errorMessage = action.payload;
        },
        setFilms: (state, action) => {
            state.filmsFetch = StatusFetch.SUCCESS;
            state.films = action.payload;
            state.errorMessage = '';
        }
    }
});

export const { setFilms, setLoadingFetch, setErrorFetch } = slice.actions;

export const selectChanelState = (state: any): ChanelState => state.chanel;

export default slice.reducer;

export const fetchFilms = () => async (dispatch: Function) => {
    const url = process.env.REACT_APP_YT;

    dispatch(setLoadingFetch());

    try {
        const res = await axios.get(url);
        dispatch(setFilms(res.data.items));
    } catch (err) {
        dispatch(setErrorFetch(err.message));
    }
};

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { StatusFetch } from '../products/productsSlice';

declare const process: {
    env: {
        REACT_APP_PROJECTS: string;
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
    const url = process.env.REACT_APP_PROJECTS;

    dispatch(setLoadingFetch());
    await new Promise((r) => setTimeout(r, 2000));
    const URL =
        'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB_YCvOT3hkl5pwoQF8Gpd8_OSkIiYwZSg&channelId=UCJQn_8gbzx8m0Dh094YWi9Q&part=snippet,id&order=date&maxResults=4';
    try {
        const res = await axios.get(URL);
        dispatch(setFilms(res.data.items));
    } catch (err) {
        dispatch(setErrorFetch(err.message));
    }
};

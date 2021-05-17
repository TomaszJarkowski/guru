import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { StatusFetch } from '../products/productsSlice';

declare const process: {
    env: {
        REACT_APP_PROJECTS: string;
    };
};

type img = {
    src: string;
};

export type TArticle = {
    id: number;
    title: string;
    description: string;
    imgs: img[];
    pathIMG: string;
};

type articlesState = {
    articles: TArticle[];
    errorMessage: string;
    articlesFetch: StatusFetch;
};

const initialState: articlesState = {
    articles: [],
    articlesFetch: StatusFetch.LOADING,
    errorMessage: ''
};

export const slice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setLoadingFetch: (state) => {
            state.articlesFetch = StatusFetch.LOADING;
            state.errorMessage = '';
        },
        setErrorFetch: (state, action) => {
            state.articlesFetch = StatusFetch.FAIL;
            state.errorMessage = action.payload;
        },
        setArticles: (state, action) => {
            state.articlesFetch = StatusFetch.SUCCESS;
            state.articles = action.payload;
            state.errorMessage = '';
        }
    }
});

export const { setArticles, setLoadingFetch, setErrorFetch } = slice.actions;

export const selectArticlesState = (state: any): articlesState => state.articles;

export default slice.reducer;

export const fetchArticles = () => async (dispatch: Function) => {
    const url = process.env.REACT_APP_PROJECTS;

    dispatch(setLoadingFetch());
    await new Promise((r) => setTimeout(r, 2000));

    try {
        const res = await axios.get('http://localhost:3004/articles');
        dispatch(setArticles(res.data));
    } catch (err) {
        dispatch(setErrorFetch(err.message));
    }
};

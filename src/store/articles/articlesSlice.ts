import { createSlice } from '@reduxjs/toolkit';

import { fetchArticles } from '../../api/articles/index';
import { StatusFetch } from '../../constant/StatusFetch';
import { RootState } from '../store';

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

type ArticlesState = {
    articles: TArticle[];
    errorMessage: string;
    articlesFetch: StatusFetch;
};

export const initialState: ArticlesState = {
    articles: [],
    articlesFetch: StatusFetch.LOADING,
    errorMessage: ''
};

export const slice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.articlesFetch = StatusFetch.LOADING;
                state.errorMessage = '';
            })
            .addCase(fetchArticles.fulfilled, (state, { payload }) => {
                state.articlesFetch = StatusFetch.SUCCESS;
                state.articles = payload;
                state.errorMessage = '';
            })
            .addCase(fetchArticles.rejected, (state, { payload }) => {
                if (typeof payload === 'string') {
                    state.articlesFetch = StatusFetch.FAIL;
                    state.errorMessage = payload;
                } else {
                    state.articlesFetch = StatusFetch.FAIL;
                    state.errorMessage = 'Default Error Message';
                }
            });
    }
});

export const selectArticlesState = (state: RootState): ArticlesState => state.articles;

export default slice.reducer;

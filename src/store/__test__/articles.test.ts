import { TArticle } from '../articles/articlesSlice';
import articlesReducer, { initialState } from '../articles/articlesSlice';
import { fetchArticles } from '../../api/articles';
import { StatusFetch } from '../../constant/StatusFetch';

const mockData: TArticle[] = [
    {
        id: 1,
        title: 'Article1',
        description: 'Description1',
        imgs: [{ src: 'src1' }],
        pathIMG: 'pathIMG1'
    },
    {
        id: 2,
        title: 'Article2',
        description: 'Description2',
        imgs: [{ src: 'src2' }],
        pathIMG: 'pathIMG2'
    },
    {
        id: 3,
        title: 'Article3',
        description: 'Description3',
        imgs: [{ src: 'src3' }],
        pathIMG: 'pathIMG3'
    }
];

describe('articles reducer', () => {
    it('pending', () => {
        const action = {
            type: fetchArticles.pending.type
        };

        const state = articlesReducer(initialState, action);

        expect(state.articlesFetch).toEqual(StatusFetch.LOADING);
    });

    it('fulfilled', () => {
        const action = {
            type: fetchArticles.fulfilled.type,
            payload: mockData
        };

        const state = articlesReducer(initialState, action);

        expect(state.articlesFetch).toEqual(StatusFetch.SUCCESS);
        expect(state.errorMessage).toEqual('');
        expect(state.articles.length).toEqual(3);
    });

    it('rejected', () => {
        const errorMessage = 'Uppps something wents wrong';

        const action = {
            type: fetchArticles.rejected.type,
            payload: errorMessage
        };

        const state = articlesReducer(initialState, action);

        expect(state.articlesFetch).toEqual(StatusFetch.FAIL);
        expect(state.errorMessage).toEqual(errorMessage);
        expect(state.articles.length).toEqual(0);
    });
});

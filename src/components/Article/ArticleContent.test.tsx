import { render, screen } from '@testing-library/react';
import { StatusFetch } from '../../constant/StatusFetch';
import { ArticleContent } from './ArticleContent';
import * as reactRedux from 'react-redux';
import * as routeData from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

const MockRouter = () => (
    <Router>
        <ArticleContent />
    </Router>
);

describe('ArticleContent', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    const useParamsMock = jest.spyOn(routeData, 'useParams');

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
        useParamsMock.mockClear();
    });

    it('should render loader', () => {
        const dummyDispatch = jest.fn();
        useSelectorMock.mockReturnValue({
            articles: [],
            articlesFetch: StatusFetch.LOADING,
            errorMessage: ''
        });
        useDispatchMock.mockReturnValue(dummyDispatch);

        const { container } = render(<MockRouter />);
        const loaderElement = container.getElementsByClassName('loader')[0];

        expect(loaderElement).toBeTruthy();
    });

    it('should render error message', () => {
        const dummyDispatch = jest.fn();
        const errorMessage = 'Error Message';
        useSelectorMock.mockReturnValue({
            articles: [],
            articlesFetch: StatusFetch.FAIL,
            errorMessage
        });
        useDispatchMock.mockReturnValue(dummyDispatch);
        const { container } = render(<MockRouter />);

        expect(container).toHaveTextContent(errorMessage);
    });

    it('should call', () => {
        const dummyDispatch = jest.fn();
        useSelectorMock.mockReturnValue({
            articles: [],
            articlesFetch: StatusFetch.LOADING,
            errorMessage: ''
        });
        useDispatchMock.mockReturnValue(dummyDispatch);
        render(<MockRouter />);

        expect(dummyDispatch).toHaveBeenCalled();
    });

    it('should not call', () => {
        const dummyDispatch = jest.fn();
        useSelectorMock.mockReturnValue({
            articles: [
                {
                    id: 4,
                    title: 'Title',
                    description: 'description',
                    imgs: ['img'],
                    pathIMG: 'string'
                }
            ],
            articlesFetch: StatusFetch.SUCCESS,
            errorMessage: ''
        });
        useDispatchMock.mockReturnValue(dummyDispatch);
        render(<MockRouter />);

        expect(dummyDispatch).not.toHaveBeenCalled();
    });

    it('should render empty article', () => {
        const dummyDispatch = jest.fn();
        useSelectorMock.mockReturnValue({
            articles: [
                {
                    id: 4,
                    title: 'Title',
                    description: 'description',
                    imgs: ['img'],
                    pathIMG: 'string'
                }
            ],
            articlesFetch: StatusFetch.SUCCESS,
            errorMessage: ''
        });
        useDispatchMock.mockReturnValue(dummyDispatch);
        render(<MockRouter />);
        const notExistArticleText = 'The article with this ID does not exist';

        const textElement = screen.getByText(notExistArticleText);

        expect(textElement).toHaveTextContent(notExistArticleText);
    });

    it('should render empty article', () => {
        const dummyDispatch = jest.fn();
        useSelectorMock.mockReturnValue({
            articles: [
                {
                    id: 1,
                    title: 'Title',
                    description: 'description',
                    imgs: ['img'],
                    pathIMG: 'string'
                }
            ],
            articlesFetch: StatusFetch.SUCCESS,
            errorMessage: ''
        });
        useDispatchMock.mockReturnValue(dummyDispatch);

        render(<MockRouter />);

        expect(screen);
    });
});

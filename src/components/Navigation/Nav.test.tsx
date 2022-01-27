import { render } from '@testing-library/react';
import { Nav } from './Nav';
import * as reactRedux from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { NAVBAR_PATHS } from './NAVBAR_PATHS';

const MockRouter = () => (
    <Router>
        <Nav />
    </Router>
);

describe('Nav', () => {
    it('should render Navbar', () => {
        const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
        useSelectorMock.mockReturnValue({
            number: 1
        });
        const { container } = render(<MockRouter />);

        expect(container).toHaveTextContent(NAVBAR_PATHS[0].name);
    });

    it('should display number of basket items correct', () => {
        const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
        const numberOfBasketItems = 6;
        useSelectorMock.mockReturnValue({
            number: numberOfBasketItems
        });
        const { container } = render(<MockRouter />);

        expect(container).toHaveTextContent(`${numberOfBasketItems}`);
    });
});

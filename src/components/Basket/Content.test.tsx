import { render, screen } from '@testing-library/react';
import { Content } from './Content';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: () => ({
        basket: [],
        cost: 0
    })
}));

describe('Content', () => {
    it('should render component properly', () => {
        render(<Content />);

        const productElement = screen.getByText(/product/i);
        expect(productElement).toHaveTextContent('Product');
    });

    it('should render buttons disabled when basket is empty', () => {
        render(<Content />);

        const clearButton = screen.getByText(/clear cart/i);
        const checkOutButton = screen.getByText(/check out/i);
        expect(clearButton).toBeDisabled();
        expect(checkOutButton).toBeDisabled();
    });

    it('should render info about empty basket when basket is empty', () => {
        render(<Content />);

        const infoElement = screen.getByText(/basket is empty/i);
        expect(infoElement).toHaveTextContent('Basket is empty');
    });
});

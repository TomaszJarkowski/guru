import { render, screen } from '@testing-library/react';
import { BasketEmpty } from './BasketEmpty';

describe('BasketEmpty', () => {
    it('should render basket empty message', () => {
        render(<BasketEmpty />);
        const h3Element = screen.getByText(/empty/i);
        expect(h3Element).toBeInTheDocument();
    });
});

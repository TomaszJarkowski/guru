import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
    it('should render the footer correctly', () => {
        const { container } = render(<Footer />);
        
        expect(container).toHaveTextContent(/info@tackleguru.co.uk/i);
        expect(container).toHaveTextContent(/contact/i);
        expect(container).toHaveTextContent(/coded by/i);
        expect(container).not.toBeDisabled();
        expect(container).toBeVisible();
    });
});

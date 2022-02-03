import { render, screen } from '@testing-library/react';
import { Error } from './Error';

describe('Error', () => {
    it('should render the error component correctly', () => {
        const text = 'Error';
        render(<Error>{ text }</Error>);
        const h3Element = screen.getByText(text);
        const imgElement = screen.getByAltText('error');

        expect(h3Element).toHaveTextContent(text);
        expect(imgElement).toBeVisible();
    });
});

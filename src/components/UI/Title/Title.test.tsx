import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title', () => {
    it('should render Title component', () => {
        const text = 'Title';
        render(<Title>{text}</Title>);
        const titleElement = screen.getByText(text);

        expect(titleElement).toHaveTextContent(text);
        expect(titleElement).not.toBeDisabled();
        expect(titleElement).toBeVisible();
    });
});

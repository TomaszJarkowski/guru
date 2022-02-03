import { render, screen } from '@testing-library/react';
import { Subtitle } from './Subtitle';

describe('Subtitle', () => {
    it('should render Subtitle component', () => {
        const text = 'Subtitle';
        render(<Subtitle>{text}</Subtitle>);
        const subtitleElement = screen.getByText(text);

        expect(subtitleElement).toHaveTextContent(text);
        expect(subtitleElement).not.toBeDisabled();
        expect(subtitleElement).toBeVisible();
    });
});

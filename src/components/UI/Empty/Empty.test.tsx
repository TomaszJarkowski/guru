import { render, screen } from '@testing-library/react';
import { Empty } from './Empty';

describe('Empty', () => {
    it('should render the empty component correctly', () => {
        const text = 'Empty';
        render(<Empty>{ text }</Empty>);
        const h3Element = screen.getByText(text);
        const imgElement = screen.getByAltText('empty');

        expect(h3Element).toHaveTextContent(text);
        expect(imgElement).toBeVisible();
    });
});

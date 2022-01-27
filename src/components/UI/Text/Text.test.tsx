import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
    it('should render Text component', () => {
        const text = 'Text';
        render(<Text classNames='test'>{text}</Text>);
        const textElement = screen.getByText(text);

        expect(textElement).toHaveTextContent(text);
        expect(textElement).not.toBeDisabled();
        expect(textElement).toBeVisible();
    });

    it('should render Text component with small text', () => {
        const text = 'Text';
        render(
            <Text classNames='test' small={true}>
                {text}
            </Text>
        );
        const textElement = screen.getByText(text);

        expect(textElement).toHaveTextContent(text);
    });
});

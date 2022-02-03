import { fireEvent, render, screen } from '@testing-library/react';
import { DefaultButton } from './DefaultButton';

const mockFn = jest.fn();

describe('DefaultButton', () => {
    it('should render default button', () => {
        const text = 'Click me';
        render(<DefaultButton>{text}</DefaultButton>);
        const defaultButtonElement = screen.getByText(text);

        expect(defaultButtonElement).toHaveTextContent(text);
        expect(defaultButtonElement).not.toBeDisabled();
        expect(defaultButtonElement).toBeVisible();
    });

    it('should call the function when clicked', () => {
        render(<DefaultButton onClick={mockFn}>Button</DefaultButton>);
        const defaultButtonElement = screen.getByText('Button');
        fireEvent.click(defaultButtonElement);

        expect(mockFn).toHaveBeenCalled();
    });
});

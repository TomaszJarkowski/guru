import { fireEvent, render, screen } from '@testing-library/react';
import { ActiveButton } from './ActiveButton';

const mockFn = jest.fn();

describe('ActiveButton', () => {
    it('should render active and visible button', () => {
        const text = 'Click me';
        render(<ActiveButton>{text}</ActiveButton>);
        const activeButtonElement = screen.getByText(text);

        expect(activeButtonElement).toHaveTextContent(text);
        expect(activeButtonElement).not.toBeDisabled();
        expect(activeButtonElement).toBeVisible();
    });

    it('should call the function when clicked', () => {
        render(<ActiveButton onClick={mockFn}>Button</ActiveButton>);
        const activeButtonElement = screen.getByText('Button');
        fireEvent.click(activeButtonElement);

        expect(mockFn).toHaveBeenCalled();
    });
});

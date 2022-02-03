import { fireEvent, render, screen } from '@testing-library/react';
import { PrimaryButton } from './PrimaryButton';

const mockFn = jest.fn();

describe('PrimaryButton', () => {
    it('should render primary button', () => {
        const text = 'Click me';
        render(<PrimaryButton>{text}</PrimaryButton>);
        const primaryButtonElement = screen.getByText(text);

        expect(primaryButtonElement).toHaveTextContent(text);
        expect(primaryButtonElement).not.toBeDisabled();
        expect(primaryButtonElement).toBeVisible();
    });

    it('should call the function when clicked', () => {
        render(<PrimaryButton onClick={mockFn}>Button</PrimaryButton>);
        const primaryButtonElement = screen.getByText('Button');
        fireEvent.click(primaryButtonElement);

        expect(mockFn).toHaveBeenCalled();
    });
});

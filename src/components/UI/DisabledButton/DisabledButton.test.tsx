import { render, screen } from '@testing-library/react';
import { DisabledButton } from './DisabledButton';

describe('DisabledButton', () => {
    it('should render disabled button', () => {
        const text = 'Click me';
        render(<DisabledButton>{text}</DisabledButton>);
        const disabledButtonElement = screen.getByText(text);

        expect(disabledButtonElement).toHaveTextContent(text);
        expect(disabledButtonElement).toBeDisabled();
        expect(disabledButtonElement).toBeVisible();
    });
});

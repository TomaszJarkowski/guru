import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
    it('should render the header correctly', () => {
        const { container } = render(<Header />);
        const imgElement = container.getElementsByClassName('Header__logo')
        
        expect(imgElement).toBeTruthy();
    });
});

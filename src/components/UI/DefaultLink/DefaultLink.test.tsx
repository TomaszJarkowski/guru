import { render } from '@testing-library/react';
import { DefaultLink } from './DefaultLink';
import { BrowserRouter as Router } from 'react-router-dom';

const MockRouter = () => (
    <Router>
        <DefaultLink path='/#'>Link</DefaultLink>
    </Router>
);

describe('DefaultLink', () => {
    it('should render default link component', () => {
        const { container } = render(<MockRouter />);
        const defaultLinkElement = container.getElementsByClassName('DefaultLink')[0];

        expect(defaultLinkElement).toHaveTextContent('Link');
        expect(defaultLinkElement).not.toBeDisabled();
        expect(defaultLinkElement).toBeVisible();
    });
});

import { NavLink } from 'react-router-dom';

import './DefaultLink.scss';

type TDefaultLink = {
    children: React.ReactNode;
    path: string;
};

/**
 * Default link.
 *
 * @version 1.0.0
 * @author [Tomasz Jarkowski](https://github.com/TomaszJarkowski)
 */

export const DefaultLink: React.FC<TDefaultLink> = ({ children, path }) => (
    <button className='DefaultLink'>
        <NavLink to={path}>{children}</NavLink>
    </button>
);

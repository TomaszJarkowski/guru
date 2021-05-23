import { NavLink } from 'react-router-dom';

import './DefaultLink.scss';

type TDefaultLink = {
    children: React.ReactNode;
    path: string;
};

export const DefaultLink: React.FC<TDefaultLink> = ({ children, path }) => (
    <button className='DefaultLink'>
        <NavLink to={path}>{children}</NavLink>
    </button>
);

import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { Basket } from './Basket';
import url from '../../img/guru_logo.jpg';

import './Nav.scss';
import { Container } from '../Container/Container';

const listOfLinks = [
    { name: 'Home', path: '/', exact: true },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' }
];

export const Nav: React.FC = () => {
    const [positionSticky, setpositionSticky] = useState(false);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y < -200;
            if (isShow !== positionSticky) setpositionSticky(isShow);
        },
        [positionSticky]
    );

    const menu = listOfLinks.map((item) => (
        <li key={item.name} className='navigation__item'>
            <NavLink
                activeClassName='is-active'
                to={item.path}
                exact={item.exact ? item.exact : false}>
                {item.name}
            </NavLink>
        </li>
    ));

    return (
        <nav
            className='navigation'
            style={
                positionSticky
                    ? { position: 'sticky', top: 0, left: 0, right: 0 }
                    : { position: 'relative' }
            }>
            <Container>
                <img className='navigation__logo' src={url} alt='navigation-logo' />
                <ul className='navigation__items'>{menu}</ul>
                <Basket />
            </Container>
        </nav>
    );
};

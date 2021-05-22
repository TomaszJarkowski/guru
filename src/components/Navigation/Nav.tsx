import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { Basket } from './Basket';
import { Container } from '../UI/Container/Container';

import './Nav.scss';

import url from '../../img/guru_logo.jpg';

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
        <li key={item.name} className='Navigation__item'>
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
            className='Navigation'
            style={
                positionSticky
                    ? { position: 'sticky', top: 0, left: 0, right: 0 }
                    : { position: 'relative' }
            }>
            <Container>
                <div className='Navigation__container'>
                    <img className='Navigation__logo' src={url} alt='navigation-logo' />
                    <ul className='Navigation__items'>{menu}</ul>
                    <Basket />
                </div>
            </Container>
        </nav>
    );
};

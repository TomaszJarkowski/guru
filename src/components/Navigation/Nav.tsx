import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { Basket } from './Basket';
import { Container } from '../UI/Container/Container';
import { NAVBAR_PATHS } from './NAVBAR_PATHS';

import './Nav.scss';

import url from '../../img/guru_logo.jpg';

export const Nav: React.FC = () => {
    const [positionSticky, setpositionSticky] = useState(false);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y < -200;
            if (isShow !== positionSticky) setpositionSticky(isShow);
        },
        [positionSticky]
    );

    const menu = NAVBAR_PATHS.map((item) => (
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

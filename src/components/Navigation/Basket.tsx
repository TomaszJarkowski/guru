import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectBasketState } from '../../store/basket/basketSlice';

export const Basket = () => {
    const { number } = useSelector(selectBasketState);

    return (
        <NavLink activeClassName='is-active' className='basket__link' to={'/basket'}>
            <span>{number}</span>
            <i className='fas fa-shopping-cart'></i>
        </NavLink>
    );
};

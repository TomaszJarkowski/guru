import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Products } from './Products/Products';
import { BasketEmpty } from './BasketEmpty/BasketEmpty';
import { clearBasket, selectBasketState } from '../../store/basket/basketSlice';

import './Content.scss';

export const Content: React.FC = () => {
    const { basket, cost } = useSelector(selectBasketState);
    const dispatch = useDispatch();

    const clear = () => {
        dispatch(clearBasket());
    };

    return (
        <div className='basket'>
            <div className='basket__info'>
                <h3>Product</h3>
                <h3>Quantity</h3>
                <h3>Total</h3>
            </div>
            {basket.length > 0 ? <Products basket={basket} /> : <BasketEmpty />}
            <div className='basket__subtotal'>
                <h3>Subtotal: ${cost}</h3>
            </div>
            <div className='basket__buttons'>
                {basket.length > 0 ? (
                    <>
                        <button onClick={clear}>Clear cart</button>
                        <NavLink to={'/order'}>Check out</NavLink>
                    </>
                ) : (
                    <>
                        <button className='disabled__button'>Clear cart</button>
                        <button className='disabled__button'>Check out</button>
                    </>
                )}
            </div>
        </div>
    );
};

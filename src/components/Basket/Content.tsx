import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { BasketItems } from './BasketItems/BasketItems';
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
        <div className='Basket'>
            <div className='Basket__info'>
                <h3>Product</h3>
                <h3>Quantity</h3>
                <h3>Total</h3>
            </div>
            {basket.length > 0 ? <BasketItems basket={basket} /> : <BasketEmpty />}
            <div className='Basket__subtotal'>
                <h3>Subtotal: ${cost}</h3>
            </div>
            <div className='Basket__buttons'>
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

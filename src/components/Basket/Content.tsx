import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { BasketItems } from './BasketItems/BasketItems';
import { BasketEmpty } from './BasketEmpty/BasketEmpty';
import { clearBasket, selectBasketState } from '../../store/basket/basketSlice';
import { DefaultButton } from '../UI/DefaultButton/DefaultButton';
import { DisabledButton } from '../UI/DisabledButton/DisabledButton';

import './Content.scss';

export const Content: React.FC = () => {
    const { basket, cost } = useSelector(selectBasketState);
    const dispatch = useDispatch();
    const history = useHistory();

    const clear = () => {
        dispatch(clearBasket());
    };

    const redirect = () => {
        history.push('/order');
    }

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
                        <DefaultButton onClick={clear}>Clear cart</DefaultButton>
                        <DefaultButton onClick={redirect}>Check out</DefaultButton>
                    </>
                ) : (
                    <>
                        <DisabledButton>Clear cart</DisabledButton>
                        <DisabledButton>Check out</DisabledButton>
                    </>
                )}
            </div>
        </div>
    );
};

import { useDispatch } from 'react-redux';

import { addProduct, removeProduct, trashProduct } from '../../../store/basket/basketSlice';
import { Product } from '../../../store/basket/basketSlice';

import './BasketItems.scss';

type TBasketItems = {
    basket: Product[];
};

export const BasketItems: React.FC<TBasketItems> = ({ basket }) => {
    const dispatch = useDispatch();

    const addToBasket = (product: Product) => {
        dispatch(addProduct(product));
    };

    const removeFromBasket = (product: Product) => {
        dispatch(removeProduct(product));
    };

    const trashFromBasket = (product: Product) => {
        dispatch(trashProduct(product));
    };

    return (
        <>
            {basket.map((product: Product) => (
                <div className='BasketItem' key={product.id}>
                    <i className='fas fa-trash-alt' onClick={() => trashFromBasket(product)}></i>
                    <img className='BasketItem__img' src={product.pathIMG} alt='product img' />
                    <h3 className='BasketItem__name'>{product.name}</h3>
                    <div className='BasketItem__numbers'>
                        <i
                            className='fas fa-arrow-circle-left'
                            onClick={() => removeFromBasket(product)}></i>
                        <h3>{product.quantity}</h3>
                        <i
                            className='fas fa-arrow-circle-right'
                            onClick={() => addToBasket(product)}></i>
                    </div>
                    <h3 className='BasketItem__total'>
                        ${(product.price * product.quantity).toFixed(2)}
                    </h3>
                </div>
            ))}
        </>
    );
};

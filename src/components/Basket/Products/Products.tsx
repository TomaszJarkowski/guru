import { useDispatch } from 'react-redux';
import { addProduct, removeProduct, trashProduct } from '../../../store/basket/basketSlice';
import { Product } from '../../../store/basket/basketSlice';
import './Products.scss';

type TProducts = {
    basket: Product[];
};

export const Products: React.FC<TProducts> = ({ basket }) => {
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
                <div className='cartItem' key={product.id}>
                    <i className='fas fa-trash-alt' onClick={() => trashFromBasket(product)}></i>
                    <img className='cartImg' src={product.pathIMG} alt='product img' />
                    <h3 className='cartName'>{product.name}</h3>
                    <div className='cartNumbers'>
                        <i
                            className='fas fa-arrow-circle-left'
                            onClick={() => removeFromBasket(product)}></i>
                        <h3 className='cartNumbers'>{product.quantity}</h3>
                        <i
                            className='fas fa-arrow-circle-right'
                            onClick={() => addToBasket(product)}></i>
                    </div>
                    <h3 className='cartTotal'>${(product.price * product.quantity).toFixed(2)}</h3>
                </div>
            ))}
        </>
    );
};

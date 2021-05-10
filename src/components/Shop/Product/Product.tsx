import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addProduct } from '../../../store/basket/basketSlice';
import { toast } from 'react-toastify';
import './Product.scss';

export type TProduct = {
    name: string;
    id: number;
    price: number;
    status: string;
    pathIMG: string;
};

export interface ProductProps {
    product: TProduct;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const redirectToProduct = () => {
        history.push(`/product/${product.id}`);
    };

    const addProductToBasket = () => {
        dispatch(addProduct(product));
        toast.success('The product added to the card! 🎉');
    };

    return (
        <div key={product.id} className='product'>
            {product.status === 'new' && <div className='product__new'>new</div>}
            <img className='product__img' src={product.pathIMG} alt='product' />
            <h3 className='product__name'>{product.name}</h3>
            <h3 className='product__price'>Price: {product.price} $</h3>
            <div className='product__buttons'>
                <button className='product__btn' onClick={redirectToProduct}>
                    <i className='fas fa-info'></i>
                </button>
                <button className='product__btn' onClick={addProductToBasket}>
                    <i className='fas fa-cart-plus'></i>
                </button>
            </div>
        </div>
    );
};

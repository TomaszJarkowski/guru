import { Product } from '../../../store/products/productsSlice';
import './Info.scss';

type TInfo = {
    product: Product;
    addProductToBasket: () => void;
};

export const Info: React.FC<TInfo> = ({ product, addProductToBasket }) => {
    return (
        <div className='info'>
            <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='far fa-star'></i>
            </div>
            <h2 className='name'>{product.name}</h2>
            <h2 className='price'>${product.price}</h2>
            <h3 className='specifications'>Specifications</h3>
            <p className='text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores minima qui
                doloremque sequi ipsum libero dicta magni dolor, quo eaque hic aspernatur nulla
                dignissimos non nostrum ullam, eveniet porro mollitia. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Asperiores minima qui doloremque sequi ipsum libero
                dicta magni dolor, quo eaque hic aspernatur nulla dignissimos non nostrum ullam,
                eveniet porro mollitia eveniet porro mollitia eveniet porro molliti eveniet.
            </p>
            <button className='btn' onClick={addProductToBasket}>
                Add to Cart
            </button>
        </div>
    );
};

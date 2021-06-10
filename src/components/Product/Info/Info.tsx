import { Product } from '../../../store/products/productsSlice';
import { PrimaryButton } from '../../UI/PrimaryButton/PrimaryButton';
import { Subtitle } from '../../UI/Subtitle/Subtitle';
import { Text } from '../../UI/Text/Text';

import './Info.scss';

type TInfo = {
    product: Product;
    addProductToBasket: () => void;
};

export const Info: React.FC<TInfo> = ({ product, addProductToBasket }) => {
    return (
        <div className='Info'>
            <div className='Info__stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='far fa-star'></i>
            </div>
            <h2 className='Info__name'>{product.name}</h2>
            <h2 className='Info__price'>${product.price}</h2>
            <Subtitle classNames='Info__specifications'>Specifications</Subtitle>
            <Text classNames='Info__text' small={true}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores minima qui
                doloremque sequi ipsum libero dicta magni dolor, quo eaque hic aspernatur nulla
                dignissimos non nostrum ullam, eveniet porro mollitia. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Asperiores minima qui doloremque sequi ipsum libero
                dicta magni dolor, quo eaque hic aspernatur nulla dignissimos non nostrum ullam,
                eveniet porro mollitia eveniet porro mollitia eveniet porro molliti eveniet.
            </Text>
            <PrimaryButton onClick={addProductToBasket}>Add to Cart</PrimaryButton>
        </div>
    );
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import {
    fetchNewProducts,
    selectNewProductsState
} from '../../../store/newProducts/newProductsSlice';
import { Product } from '../../../store/products/productsSlice';
import { StatusFetch } from '../../../constant/StatusFetch';
import { DefaultButton } from '../../UI/DefaultButton/DefaultButton';
import { Loader } from '../../UI/Loader/Loader';
import { Error } from '../../UI/Error/Error';
import { Subtitle } from '../../UI/Subtitle/Subtitle';

import './NewProducts.scss';

export const NewProducts: React.FC = () => {
    const { newProducts, newProductsFetch, errorMessage } = useSelector(selectNewProductsState);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (!newProducts.length) {
            dispatch(fetchNewProducts());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const redirectToProduct = (id: number) => {
        history.push(`/product/${id}`);
    };

    if (newProductsFetch === StatusFetch.FAIL) {
        return <Error>{errorMessage}</Error>;
    }

    return (
        <div className='NewProducts'>
            <h2 className='NewProducts__title'>
                New products<span>*</span>
            </h2>
            <>
                {newProductsFetch !== StatusFetch.SUCCESS ? (
                    <Loader />
                ) : (
                    <div className='NewProducts__products'>
                        {newProducts.map((el: Product) => (
                            <div className='NewProducts__product' key={el.name}>
                                <Subtitle classNames='name'>{el.name}</Subtitle>
                                <img src={el.pathIMG} alt='new products' />
                                <DefaultButton onClick={() => redirectToProduct(el.id)}>
                                    DETAILS
                                </DefaultButton>
                                <div className='NewProducts__flag'>new</div>
                            </div>
                        ))}
                    </div>
                )}
            </>
        </div>
    );
};

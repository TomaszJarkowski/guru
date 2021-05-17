import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import {
    fetchNewProducts,
    selectNewProductsState
} from '../../../store/newProducts/newProductsSlice';
import { Product, StatusFetch } from '../../../store/products/productsSlice';
import { Loader } from '../../Loader/Loader';
import { Error } from '../../Shop/Error/Error';

import './NewProducts.scss';

export const NewProducts: React.FC = () => {
    const { newProducts, newProductsFetch, errorMessage } = useSelector(selectNewProductsState);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (!newProducts.length) {
            dispatch(fetchNewProducts());
        }
    }, []);

    const redirectToProduct = (id: number) => {
        history.push(`/product/${id}`);
    };

    if (newProductsFetch === StatusFetch.FAIL) {
        return <Error>{errorMessage}</Error>;
    }

    return (
        <div className='newProducts'>
            <h2 className='newProducts__title'>
                New products<span>*</span>
            </h2>
            <>
                {newProductsFetch !== StatusFetch.SUCCESS ? (
                    <Loader />
                ) : (
                    <div className='newProducts__products'>
                        {newProducts.map((el: Product) => (
                            <div className='newProducts__product' key={el.name}>
                                <p className='name'>{el.name}</p>
                                <img src={el.pathIMG} alt='new products' />
                                <button onClick={() => redirectToProduct(el.id)}>DETAILS</button>
                                <div className='newProducts__flag'>new</div>
                            </div>
                        ))}
                    </div>
                )}
            </>
        </div>
    );
};

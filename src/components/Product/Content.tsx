import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import { toast } from 'react-toastify';

import { addProduct } from '../../store/basket/basketSlice';
import { fetchProducts, selectProductsState } from '../../store/products/productsSlice';
import { StatusFetch } from '../../constant/StatusFetch';
import { Loader } from '../UI/Loader/Loader';
import { Empty } from '../UI/Empty/Empty';
import { Error } from '../UI/Error/Error';
import { Info } from './Info/Info';

import './Content.scss';

export const Content: React.FC = () => {
    const params: { id: string } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const { products, productsFetch, errorMessage } = useSelector(selectProductsState);

    useEffect(() => {
        if (!products.length) {
            dispatch(fetchProducts());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const index = products.findIndex((obj) => obj.id === parseInt(params.id));

    const addProductToBasket = () => {
        dispatch(addProduct(products[index]));
        history.push('/basket');
        toast.success('The product added to the card! 🎉');
    };

    if (productsFetch === StatusFetch.FAIL) {
        return <Error>{errorMessage}</Error>;
    }

    return (
        <>
            {productsFetch === StatusFetch.LOADING ? (
                <div className='loader'>
                    <Loader />
                </div>
            ) : (
                <>
                    {products[index] ? (
                        <div className='SingleProduct'>
                            <img
                                className='SingleProduct__img'
                                src={products[index].pathIMG}
                                alt='prodcuct img'
                            />
                            <Info
                                product={products[index]}
                                addProductToBasket={addProductToBasket}
                            />
                        </div>
                    ) : (
                        <Empty>The product with this ID does not exist</Empty>
                    )}
                </>
            )}
        </>
    );
};

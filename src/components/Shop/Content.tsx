import { useState, useEffect, SetStateAction } from 'react';

import { Products } from './Products/Products';
import { Pagination } from './Pagination/Pagination';
import { Sort } from './Sort/Sort';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProductsState } from '../../store/products/productsSlice';
import { Loader } from '../Loader/Loader';
import { StatusFetch } from '../../store/products/productsSlice';
import { TProduct } from './Product/Product';
import { Error } from './Error/Error';
import { Empty } from './Empty/Empty';

export const Content = () => {
    const dispatch = useDispatch();
    const { products, productsFetch, errorMessage } = useSelector(selectProductsState);

    const productPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastPost = currentPage * productPerPage;
    const indexOfFirstPost = indexOfLastPost - productPerPage;
    const [currentProducts, setCurrentProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState<TProduct[]>([]);

    useEffect(() => {
        if (!products.length) {
            dispatch(fetchProducts());
        }
    }, []);

    useEffect(() => {
        setSortedProducts(products);
    }, [products]);

    useEffect(() => {
        const paginatedProducts = sortedProducts.slice(
            indexOfFirstPost,
            indexOfLastPost
        ) as SetStateAction<never[]>;
        setCurrentProducts(paginatedProducts);
    }, [sortedProducts, indexOfFirstPost, indexOfLastPost]);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
                    {products.length ? (
                        <>
                            <Sort products={products} setSortedProducts={setSortedProducts} />
                            <Products products={currentProducts} />
                            <Pagination
                                productsPerPage={productPerPage}
                                totalProducts={products.length}
                                paginate={paginate}
                            />
                        </>
                    ) : (
                        <Empty />
                    )}
                </>
            )}
        </>
    );
};

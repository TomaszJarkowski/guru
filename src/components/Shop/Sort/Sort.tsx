import { useState } from 'react';
import {
    sortByPriceHighToLow,
    sortByPriceLowToHigh,
    sortByStatus,
    sortByNameAToZ,
    sortByNameZToA
} from '../../../helpers/helpers';
import { DefaultButton } from '../../UI/DefaultButton/DefaultButton';

import { TProduct } from '../Product/Product';

import './Sort.scss';

type TSort = {
    products: TProduct[];
    setSortedProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

export const Sort: React.FC<TSort> = ({ products, setSortedProducts }) => {
    const [activeSort, setActiveSort] = useState(1);

    const defaultSort = () => {
        setActiveSort(1);
        setSortedProducts([...products]);
    };

    const newsSort = () => {
        setActiveSort(6);
        setSortedProducts(sortByStatus(products));
    };

    const highToLowSort = () => {
        setActiveSort(2);
        setSortedProducts(sortByPriceHighToLow(products));
    };

    const lowToHighort = () => {
        setActiveSort(3);
        setSortedProducts(sortByPriceLowToHigh(products));
    };

    const aToZSort = () => {
        setActiveSort(4);
        setSortedProducts(sortByNameAToZ(products));
    };

    const zToASort = () => {
        setActiveSort(5);
        setSortedProducts(sortByNameZToA(products));
    };

    return (
        <div className='Sort'>
            <h2 className='Sort__title'>SORT</h2>
            <DefaultButton
                style={
                    activeSort === 1 ? { backgroundColor: '#ffa33b' } : { backgroundColor: 'white' }
                }
                onClick={defaultSort}>
                Default
            </DefaultButton>
            <DefaultButton
                style={
                    activeSort === 6 ? { backgroundColor: '#ffa33b' } : { backgroundColor: 'white' }
                }
                onClick={newsSort}>
                News
            </DefaultButton>
            <DefaultButton
                style={
                    activeSort === 2 ? { backgroundColor: '#ffa33b' } : { backgroundColor: 'white' }
                }
                onClick={highToLowSort}>
                Price high to low
            </DefaultButton>
            <DefaultButton
                style={
                    activeSort === 3 ? { backgroundColor: '#ffa33b' } : { backgroundColor: 'white' }
                }
                onClick={lowToHighort}>
                Price low to high
            </DefaultButton>
            <DefaultButton
                style={
                    activeSort === 4 ? { backgroundColor: '#ffa33b' } : { backgroundColor: 'white' }
                }
                onClick={aToZSort}>
                Product Name - A to Z
            </DefaultButton>
            <DefaultButton
                style={
                    activeSort === 5 ? { backgroundColor: '#ffa33b' } : { backgroundColor: 'white' }
                }
                onClick={zToASort}>
                Product Name - Z to A
            </DefaultButton>
        </div>
    );
};

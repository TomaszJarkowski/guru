import { useState } from 'react';
import {
    sortByPriceHighToLow,
    sortByPriceLowToHigh,
    sortByStatus,
    sortByNameAToZ,
    sortByNameZToA
} from '../../../helpers/helpers';

import { TProduct } from '../Product/Product';

import './Sort.scss';

export interface SortProps {
    products: TProduct[];
    setSortedProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
}

export const Sort: React.FC<SortProps> = ({ products, setSortedProducts }) => {
    const [activeSort, setActiveSort] = useState(1);

    return (
        <div className='sort'>
            <h2>SORT</h2>
            <button
                style={
                    activeSort === 1
                        ? { backgroundColor: '#ffa33b' }
                        : { backgroundColor: 'rgb(239 239 239)' }
                }
                onClick={() => {
                    setActiveSort(1);
                    setSortedProducts([...products]);
                }}>
                Default
            </button>
            <button
                style={
                    activeSort === 6
                        ? { backgroundColor: '#ffa33b' }
                        : { backgroundColor: 'rgb(239 239 239)' }
                }
                onClick={() => {
                    setActiveSort(6);
                    setSortedProducts(sortByStatus(products));
                }}>
                News
            </button>
            <button
                style={
                    activeSort === 2
                        ? { backgroundColor: '#ffa33b' }
                        : { backgroundColor: 'rgb(239 239 239)' }
                }
                onClick={() => {
                    setActiveSort(2);
                    setSortedProducts(sortByPriceHighToLow(products));
                }}>
                Price high to low
            </button>
            <button
                style={
                    activeSort === 3
                        ? { backgroundColor: '#ffa33b' }
                        : { backgroundColor: 'rgb(239 239 239)' }
                }
                onClick={() => {
                    setActiveSort(3);
                    setSortedProducts(sortByPriceLowToHigh(products));
                }}>
                Price low to high
            </button>
            <button
                style={
                    activeSort === 4
                        ? { backgroundColor: '#ffa33b' }
                        : { backgroundColor: 'rgb(239 239 239)' }
                }
                onClick={() => {
                    setActiveSort(4);
                    setSortedProducts(sortByNameAToZ(products));
                }}>
                Product Name - A to Z
            </button>
            <button
                style={
                    activeSort === 5
                        ? { backgroundColor: '#ffa33b' }
                        : { backgroundColor: 'rgb(239 239 239)' }
                }
                onClick={() => {
                    setActiveSort(5);
                    setSortedProducts(sortByNameZToA(products));
                }}>
                Product Name - Z to A
            </button>
        </div>
    );
};

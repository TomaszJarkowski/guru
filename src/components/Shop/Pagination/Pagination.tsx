import { useState } from 'react';

import './Pagination.scss';

type TPagination = {
    productsPerPage: number;
    totalProducts: number;
    paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<TPagination> = ({
    productsPerPage,
    totalProducts,
    paginate
}) => {
    const pageNumbers = [];
    const [decoration, setDecoration] = useState(1);

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='Pagination'>
            {pageNumbers.map((number) => (
                <li key={number} className='Pagination__item'>
                    {number === decoration ? (
                        <button
                            className='Pagination__btn'
                            style={{ backgroundColor: '#4f9064' }}
                            onClick={() => {
                                paginate(number);
                                setDecoration(number);
                            }}>
                            {number}
                        </button>
                    ) : (
                        <button
                            className='Pagination__btn'
                            onClick={() => {
                                paginate(number);
                                setDecoration(number);
                            }}>
                            {number}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

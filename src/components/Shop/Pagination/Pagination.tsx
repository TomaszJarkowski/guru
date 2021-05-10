import { useState } from 'react';

import './Pagination.scss';

export interface PaginationProps {
    productsPerPage: number;
    totalProducts: number;
    paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
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
        <ul className='pagination'>
            {pageNumbers.map((number) => (
                <li key={number} className='pagination-item'>
                    {number === decoration ? (
                        <button
                            style={{ backgroundColor: '#4f9064' }}
                            onClick={() => {
                                paginate(number);
                                setDecoration(number);
                            }}>
                            {number}
                        </button>
                    ) : (
                        <button
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

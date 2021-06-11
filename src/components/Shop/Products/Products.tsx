import { Product, TProduct } from '../Product/Product';

import './Products.scss';

type TProducts = {
    products: TProduct[];
};

export const Products: React.FC<TProducts> = ({ products }) => {
    return (
        <div className='Products'>
            {products.map((product: TProduct) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
};

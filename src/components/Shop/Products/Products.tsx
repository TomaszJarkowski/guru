import { Product, TProduct } from '../Product/Product';

import './Products.scss';

export interface ProductsProps {
    products: TProduct[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
    return (
        <div className='products'>
            {products.map((product: TProduct) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
};

import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products/productsSlice';
import basketReducer from './basket/basketSlice';
import newProductsReducer from './newProducts/newProductsSlice';
import articlesReducer from './articles/articlesSlice';
import chanelReducer from './chanel/chanelSlice';
import orderReducer from './order/orderSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        basket: basketReducer,
        newProducts: newProductsReducer,
        articles: articlesReducer,
        chanel: chanelReducer,
        order: orderReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

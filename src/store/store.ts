import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import basketReducer from './basket/basketSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        basket: basketReducer
    }
});

export default store;

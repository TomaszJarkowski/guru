import { createSlice } from '@reduxjs/toolkit';

type Product = {
    id: number;
    name: string;
    price: number;
    pathIMG: string;
    quantity: number;
};

type BasketState = {
    basket: Product[];
    number: number;
};

const initialState: BasketState = {
    basket: [],
    number: 0
};

export const slice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action: any) => {
            const product: Product = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                pathIMG: action.payload.pathIMG,
                quantity: 1
            };
            state.basket.push(product);
            state.number += 1;
        },
        removeProduct: (state, action) => {
            state.basket = [];
            state.number -= 1;
        },
        clearBasket: (state, action) => {
            state.basket = [];
            state.number = 0;
        }
    }
});

export const { addProduct, removeProduct, clearBasket } = slice.actions;

export const selectBasketState = (state: any): BasketState => state.basket;

export default slice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export type Product = {
    id: number;
    name: string;
    price: number;
    pathIMG: string;
    quantity: number;
};

type BasketState = {
    basket: Product[];
    number: number;
    cost: number;
};

const initialState: BasketState = {
    basket: [],
    number: 0,
    cost: 0
};

export const slice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            function isInBasket(basket: Product) {
                return basket.id === action.payload.id;
            }

            if (state.basket.find(isInBasket)) {
                const index = state.basket.findIndex((obj) => obj.id === action.payload.id);
                state.basket[index].quantity += 1;
            } else {
                const product: Product = {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    pathIMG: action.payload.pathIMG,
                    quantity: 1
                };
                state.basket.push(product);
            }
            state.number += 1;
            const sum = state.cost + action.payload.price;
            state.cost = Math.round(sum * 100) / 100;
        },
        removeProduct: (state, action) => {
            const index = state.basket.findIndex((obj) => obj.id === action.payload.id);
            if (state.basket[index].quantity === 1) return;
            state.basket[index].quantity -= 1;
            state.number -= 1;
            const difference = state.cost - action.payload.price;
            state.cost = Math.round(difference * 100) / 100;
        },
        trashProduct: (state, action) => {
            const index = state.basket.findIndex((obj) => obj.id === action.payload.id);
            state.number -= state.basket[index].quantity;
            const multi = state.basket[index].quantity * state.basket[index].price;
            state.cost = Math.round((state.cost - multi) * 100) / 100;
            state.basket.splice(index, 1);
        },
        clearBasket: (state) => {
            state.basket = [];
            state.number = 0;
            state.cost = 0;
        }
    }
});

export const { addProduct, removeProduct, trashProduct, clearBasket } = slice.actions;

export const selectBasketState = (state: any): BasketState => state.basket;

export default slice.reducer;

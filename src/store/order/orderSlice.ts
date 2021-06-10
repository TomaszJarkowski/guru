import axios from 'axios';
import { toast } from 'react-toastify';

import { createSlice } from '@reduxjs/toolkit';
import { StatusFetch } from '../products/productsSlice';
import { clearBasket, Product } from '../basket/basketSlice';

type OrderState = {
    step: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    address: string;
    postalCode: string;
    country: string;
    deliveryMethod: string;
    deliveryCost: number | null;
    paymentMethod: string;
    errorMessage: string;
    orderFetch: StatusFetch;
    finish: boolean;
};

type Order = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cost: number;
    address: string;
    delivery: string;
    payment: string;
    products: Product[];
}

const initialState: OrderState = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    postalCode: '',
    country: 'poland',
    deliveryMethod: '',
    deliveryCost: null,
    paymentMethod: '',
    errorMessage: '',
    orderFetch: StatusFetch.SUCCESS,
    finish: false
};

export const slice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        firstStep: (state, { payload }) => {
            state.step = 2;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.email = payload.email;
            state.phone = payload.phone;
            state.city = payload.city;
            state.address = payload.address;
            state.postalCode = payload.postalCode;
            state.country = payload.country;
        },
        secondStep: (state, { payload }) => {
            state.step = 3;
            state.deliveryMethod = payload.deliveryMethod;
            state.deliveryCost = payload.deliveryCost;
        },
        thirdStep: (state, { payload }) => {
            state.step = 4;
            state.paymentMethod = payload.paymentMethod;
        },
        reduceStep: (state) => {
            state.step -= 1;
        },
        setLoadingFetch: (state) => {
            state.orderFetch = StatusFetch.LOADING;
            state.errorMessage = '';
        },
        setErrorFetch: (state, action) => {
            state.orderFetch = StatusFetch.FAIL;
            state.errorMessage = action.payload;
        },
        finish: (state) => {
            state.step = 1;
            state.firstName = '';
            state.lastName = '';
            state.email = '';
            state.phone = '';
            state.city = '';
            state.address = '';
            state.postalCode = '';
            state.country = 'poland';
            state.deliveryMethod = '';
            state.deliveryCost = null;
            state.paymentMethod = '';
            state.errorMessage = '';
            state.orderFetch = StatusFetch.SUCCESS;
            state.finish = true;
        }
    }
});

export const {
    firstStep,
    secondStep,
    thirdStep,
    finish,
    reduceStep,
    setLoadingFetch,
    setErrorFetch
} = slice.actions;

export const selectOrderState = (state: any): OrderState => state.order;

export default slice.reducer;

export const postOrder = (redirect: () => void, order: Order) => async (dispatch: Function) => {
    const url = `${process.env.REACT_APP_API}/orders`;
    const data = order;

    dispatch(setLoadingFetch());

    try {
        await axios.post(url, data);
        dispatch(finish());
        dispatch(clearBasket());
        redirect();
        toast.success('Your order has been received! 🎉');
    } catch (err) {
        dispatch(setErrorFetch(err.message));
    }
};

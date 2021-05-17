import { createSlice } from '@reduxjs/toolkit';

type OrderState = {
    step: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    city: string,
    address: string,
    postalCode: string,
    country: string,
    deliveryMethod: string,
    deliveryCost: number | null,
    paymentMethod: string,
    finish: boolean
};

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
        finish: (state) => {
            state.step= 1;
            state.firstName= '';
            state.lastName= '';
            state.email= '';
            state.phone= '';
            state.city= '';
            state.address= '';
            state.postalCode= '';
            state.country= 'poland';
            state.deliveryMethod= '';
            state.deliveryCost= null;
            state.paymentMethod= '';
            state.finish= true
        }
    }
});

export const { firstStep,secondStep, thirdStep, finish, reduceStep } = slice.actions;

export const selectOrderState = (state: any): OrderState => state.order;

export default slice.reducer;

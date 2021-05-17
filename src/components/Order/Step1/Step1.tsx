import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ErrorOption, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { firstStep, selectOrderState } from '../../../store/order/orderSlice';

import './Step1.scss';
import '../Form-step.scss';

import guruLogo from '../../../img/guru_logo.jpg';

const CorrectInput = () => (
    <div className='correct-input'>
        <i className='fas fa-unlock'></i>
    </div>
);

const WrongInput = () => (
    <div className='wrong-input'>
        <i className='fas fa-lock'></i>
    </div>
);

const schema = yup.object().shape({
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
    email: yup.string().email().required(),
    phone: yup.string().length(9).required(),
    city: yup.string().min(3).required(),
    address: yup.string().min(3).required(),
    postalCode: yup.string().min(1).required(),
    country: yup.string().required()
});

type TData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    address: string;
    postalCode: string;
    country: string;
};

export const Step1: React.FC = () => {
    const dispatch = useDispatch();
    const { firstName, lastName, email, phone, postalCode, city, country, address } = useSelector(
        selectOrderState
    );

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            city: city,
            address: address,
            postalCode: postalCode,
            country: country
        }
    });

    const onSubmit = async (data: TData) => {
        dispatch(firstStep(data));
    };

    useEffect(() => {
        if (!firstName) {
            setError('firstName', 'notMatch' as ErrorOption, 'default error' as any);
            setError('lastName', 'notMatch' as ErrorOption, 'default error' as any);
            setError('email', 'notMatch' as ErrorOption, 'default error' as any);
            setError('phone', 'notMatch' as ErrorOption, 'default error' as any);
            setError('city', 'notMatch' as ErrorOption, 'default error' as any);
            setError('address', 'notMatch' as ErrorOption, 'default error' as any);
            setError('postalCode', 'notMatch' as ErrorOption, 'default error' as any);
        }
    }, []);

    return (
        <form className='form-step' onSubmit={handleSubmit(onSubmit)}>
            <div className='logo'>
                <img src={guruLogo} alt='logo' />
            </div>
            <h2 className='header-form'>SHIPPING ADDRESS</h2>
            <div className='input firstName'>
                <label htmlFor='firstName'>
                    First Name<span>*</span>
                </label>
                <input {...register('firstName')} type='text' name='firstName' id='firstName' />
                {!errors.firstName ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='input lastName'>
                <label htmlFor='lastName'>
                    Last Name<span>*</span>
                </label>
                <input {...register('lastName')} type='text' name='lastName' id='lastName' />
                {!errors.lastName ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='input email'>
                <label htmlFor='email'>
                    Email<span>*</span>
                </label>
                <input {...register('email')} type='email' name='email' id='email' />
                {!errors.email ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='input phone'>
                <label htmlFor='phone'>
                    Phone<span>*</span>
                </label>
                <input
                    {...register('phone')}
                    type='tel'
                    name='phone'
                    id='phone'
                    placeholder='123455678'
                    pattern='[0-9]{9}'
                />
                {!errors.phone ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='input city'>
                <label htmlFor='city'>
                    City<span>*</span>
                </label>
                <input {...register('city')} type='text' name='city' id='city' />
                {!errors.city ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='input address'>
                <label htmlFor='address'>
                    Address<span>*</span>
                </label>
                <input type='text' {...register('address')} name='address' id='address' />
                {!errors.address ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='input postalCode'>
                <label htmlFor='postalCode'>
                    Postal code<span>*</span>
                </label>
                <input
                    {...register('postalCode')}
                    type='text'
                    name='postalCode'
                    id='postalCode'
                    placeholder='12-345'
                    pattern='[0-9]{2}-[0-9]{3}'
                />
                {!errors.postalCode ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='input country'>
                <label htmlFor='country'>
                    Country<span>*</span>
                </label>
                <select {...register('country')} name='country' id='country'>
                    <option value='poland'>Poland</option>
                    <option value='usa'>USA</option>
                    <option value='uk'>UK</option>
                </select>
            </div>
            <div className='forom__buttons'>
                <NavLink to={'/basket'}>Back</NavLink>
                {Object.keys(errors).length === 0 && errors.constructor === Object ? (
                    <button className='active'>Choose Shipping</button>
                ) : (
                    <button className='disabled'>Choose Shipping</button>
                )}
            </div>
        </form>
    );
};

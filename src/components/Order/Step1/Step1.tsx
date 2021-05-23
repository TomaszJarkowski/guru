import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ErrorOption, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ReactTooltip from 'react-tooltip';

import { firstStep, selectOrderState } from '../../../store/order/orderSlice';
import { HeaderStep } from '../HeaderStep/HeaderStep';
import { DefaultButton } from '../../UI/DefaultButton/DefaultButton';
import { DisabledButton } from '../../UI/DisabledButton/DisabledButton';
import { ActiveButton } from '../../UI/ActiveButton/ActiveButton';

import './Step1.scss';
import '../Steps.scss';

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
    const history = useHistory();
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

    const redirect = () => {
        history.push('/basket');
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
        <form className='Step' onSubmit={handleSubmit(onSubmit)}>
            <ReactTooltip effect='solid' place='right' type='dark' />
            <HeaderStep>SHIPPING ADDRESS</HeaderStep>
            <div className='Step__box'>
                <label className='Step__label' htmlFor='firstName'>
                    First Name<span>*</span>
                </label>
                <input
                    className='Step__input'
                    {...register('firstName')}
                    type='text'
                    name='firstName'
                    id='firstName'
                    data-tip='Min width: 3'
                />
                {!errors.firstName ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='Step__box'>
                <label className='Step__label' htmlFor='lastName'>
                    Last Name<span>*</span>
                </label>
                <input
                    className='Step__input'
                    {...register('lastName')}
                    type='text'
                    name='lastName'
                    id='lastName'
                    data-tip='Min width: 3'
                />
                {!errors.lastName ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='Step__box'>
                <label className='Step__label' htmlFor='email'>
                    Email<span>*</span>
                </label>
                <input
                    className='Step__input'
                    {...register('email')}
                    type='email'
                    name='email'
                    id='email'
                    data-tip='Must be email'
                />
                {!errors.email ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='Step__box'>
                <label className='Step__label' htmlFor='phone'>
                    Phone<span>*</span>
                </label>
                <input
                    className='Step__input'
                    {...register('phone')}
                    type='tel'
                    name='phone'
                    id='phone'
                    placeholder='123455678'
                    pattern='[0-9]{9}'
                    data-tip='Lenght: 9'
                />
                {!errors.phone ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='Step__box'>
                <label className='Step__label' htmlFor='city'>
                    City<span>*</span>
                </label>
                <input
                    className='Step__input'
                    {...register('city')}
                    type='text'
                    name='city'
                    id='city'
                    data-tip='Min width: 3'
                />
                {!errors.city ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='Step__box'>
                <label className='Step__label' htmlFor='address'>
                    Address<span>*</span>
                </label>
                <input
                    className='Step__input'
                    type='text'
                    {...register('address')}
                    name='address'
                    id='address'
                    data-tip='Min width: 3'
                />
                {!errors.address ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='Step__box'>
                <label className='Step__label' htmlFor='postalCode'>
                    Postal code<span>*</span>
                </label>
                <input
                    className='Step__input'
                    {...register('postalCode')}
                    type='text'
                    name='postalCode'
                    id='postalCode'
                    placeholder='12-345'
                    pattern='[0-9]{2}-[0-9]{3}'
                    data-tip='Min width: 1'
                />
                {!errors.postalCode ? <CorrectInput /> : <WrongInput />}
            </div>
            <div className='Step__box'>
                <label className='Step__label' htmlFor='country'>
                    Country<span>*</span>
                </label>
                <select
                    className='Step__select'
                    {...register('country')}
                    name='country'
                    id='country'>
                    <option value='poland'>Poland</option>
                    <option value='usa'>USA</option>
                    <option value='uk'>UK</option>
                </select>
            </div>
            <div className='Step__buttons'>
                <DefaultButton onClick={redirect}>Back</DefaultButton>
                {Object.keys(errors).length === 0 && errors.constructor === Object ? (
                    <ActiveButton>Choose Shipping</ActiveButton>
                ) : (
                    <DisabledButton>Choose Shipping</DisabledButton>
                )}
            </div>
        </form>
    );
};

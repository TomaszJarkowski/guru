import { useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Loader } from '../../UI/Loader/Loader';

import './Newslatter.scss';

const Success = () => {
    return <div className='success__newslatter'>Thank you for subscribing to our newsletter!</div>;
};

const Defeat = ({ descriptionError }: { descriptionError: string }) => {
    return <div className='defeat__newslatter'>{descriptionError}</div>;
};

const schema = yup.object().shape({
    email: yup.string().email().required()
});

type TData = {
    email: string;
};

export const Newslatter = () => {
    const [correctEmail, setCorrectEmail] = useState(false);
    const [errorEmail, setErrorEmail] = useState('Aleksandra');
    const [firstTime, setFirstTime] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: TData) => {
        setIsLoading(true);
        setFirstTime(false);
        const url = `${process.env.REACT_APP_API}/newslatter`

        try {
            await axios.post(url, data);
            setCorrectEmail(true);
            reset();
        } catch (e) {
            if (e.response.data.errors) {
                setErrorEmail(e.response.data.errors);
            } else {
                setErrorEmail('Failed to fetch');
            }
            setCorrectEmail(false);
        }
        setIsLoading(false);
    };

    return (
        <div className='newslatter'>
            <h2>Newsletter</h2>
            <p>
                Sign up to our newsletter to keep up to date with our latest news and product
                releases.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='email'>Email:</label>
                <input {...register('email')} type='text' id='emial' name='email' />
                <input type='submit' className='formButton' value='Subscribe' />
            </form>
            <p className='error'>{errors.email?.message}</p>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='div__results'>
                    {!firstTime ? (
                        correctEmail ? (
                            <Success />
                        ) : (
                            <Defeat descriptionError={errorEmail} />
                        )
                    ) : null}
                </div>
            )}
        </div>
    );
};

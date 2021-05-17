import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { reduceStep, selectOrderState, thirdStep } from '../../../store/order/orderSlice';

import imgBLIK from '../../../img/blik.png';
import guruLogo from '../../../img/guru_logo.jpg';
import imgMBANK from '../../../img/mbank.png';
import imgCREDITBANK from '../../../img/credit-bank.png';
import imgCASHONDELIVERY from '../../../img/cashOnDelivery.jpg';

const methodsPayment = [
    {
        name: 'BLIK',
        img: imgBLIK
    },
    {
        name: 'Payment by electronic transfer',
        img: imgMBANK
    },
    {
        name: 'Payment by credit card',
        img: imgCREDITBANK
    },
    {
        name: 'Cash on delivery',
        img: imgCASHONDELIVERY
    }
];

export const Step3: React.FC = () => {
    const dispatch = useDispatch();
    const [paymentMethod, setPaymentMethod] = useState(methodsPayment[0].name);
    const selector = useSelector(selectOrderState);

    useEffect(() => {
        if (selector.paymentMethod) {
            setPaymentMethod(selector.paymentMethod);
        }
    }, []);

    const onSubmit = async () => {
        const data = {
            paymentMethod
        };

        dispatch(thirdStep(data));
    };

    const back = () => {
        dispatch(reduceStep());
    };

    return (
        <form className='form-step'>
            <div className='logo'>
                <img src={guruLogo} alt='logo' />
            </div>
            <h2 className='header-form'>METHOD OF PAYMENT</h2>
            <div className='payment__container'>
                {methodsPayment.map((el) => (
                    <div
                        key={el.name}
                        className='payment__item'
                        onClick={() => {
                            setPaymentMethod(el.name);
                        }}
                        style={
                            el.name === paymentMethod
                                ? { backgroundColor: '#00F260' }
                                : { backgroundColor: 'white' }
                        }>
                        <img src={el.img} alt='img' />
                        <h4>{el.name}</h4>
                    </div>
                ))}
            </div>
            <div className='forom__buttons'>
                <button onClick={back} className='back'>
                    Back
                </button>
                <button
                    type='submit'
                    className='active'
                    onClick={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}>
                    Choose Payment
                </button>
            </div>
        </form>
    );
};

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { reduceStep, selectOrderState, thirdStep } from '../../../store/order/orderSlice';
import { DefaultButton } from '../../UI/DefaultButton/DefaultButton';
import { HeaderStep } from '../HeaderStep/HeaderStep';
import { ActiveButton } from '../../UI/ActiveButton/ActiveButton';

import imgBLIK from '../../../img/blik.png';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <form className='Step'>
            <HeaderStep>METHOD OF PAYMENT</HeaderStep>
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
            <div className='Step__buttons'>
                <DefaultButton onClick={back}>Back</DefaultButton>
                <ActiveButton
                    onClick={(e: any) => {
                        e.preventDefault();
                        onSubmit();
                    }}>
                    Summary
                </ActiveButton>
            </div>
        </form>
    );
};

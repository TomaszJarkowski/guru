import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { secondStep, reduceStep, selectOrderState } from '../../../store/order/orderSlice';
import { DefaultButton } from '../../UI/DefaultButton/DefaultButton';
import { ActiveButton } from '../../UI/ActiveButton/ActiveButton';
import { HeaderStep } from '../HeaderStep/HeaderStep';

import './Step2.scss';

import imgDPD from '../../../img/dpd.png';
import imgUPS from '../../../img/ups.png';
import imgINPOST from '../../../img/inpost.png';
import imgDHL from '../../../img/dhl.png';

const method = [
    {
        name: 'DPD COURIER',
        img: imgDPD,
        cost: 3.75
    },
    {
        name: 'UPS COURIER',
        img: imgUPS,
        cost: 3.9
    },
    {
        name: 'INPOST COURIER',
        img: imgINPOST,
        cost: 3.3
    },
    {
        name: 'DHL COURIER',
        img: imgDHL,
        cost: 4
    }
];

export const Step2: React.FC = () => {
    const dispatch = useDispatch();
    const [deliveryMethod, setDeliveryMethod] = useState(method[0].name);
    const [deliveryCost, setDeliveryCost] = useState(method[0].cost);

    const selector = useSelector(selectOrderState);

    useEffect(() => {
        if (selector.deliveryMethod && selector.deliveryCost) {
            setDeliveryMethod(selector.deliveryMethod);
            setDeliveryCost(selector.deliveryCost);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = async () => {
        const data = {
            deliveryMethod,
            deliveryCost
        };

        dispatch(secondStep(data));
    };

    const back = () => {
        dispatch(reduceStep());
    };

    return (
        <form className='Step'>
            <HeaderStep>CHOOSE THE DELIVERY METHOD</HeaderStep>
            <div className='delivery__container'>
                {method.map((el) => (
                    <div
                        key={el.name}
                        className='delivery__item'
                        onClick={() => {
                            setDeliveryMethod(el.name);
                            setDeliveryCost(el.cost);
                        }}
                        style={
                            el.name === deliveryMethod
                                ? { backgroundColor: '#00F260' }
                                : { backgroundColor: 'white' }
                        }>
                        <img src={el.img} alt='img' />
                        <h4>{el.name}</h4>
                        <h4>{el.cost} $</h4>
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
                    Choose Payment
                </ActiveButton>
            </div>
        </form>
    );
};

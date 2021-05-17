import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { secondStep, reduceStep, selectOrderState } from '../../../store/order/orderSlice';

import './Step2.scss';

import imgDPD from '../../../img/dpd.png';
import imgUPS from '../../../img/ups.png';
import imgINPOST from '../../../img/inpost.png';
import imgDHL from '../../../img/dhl.png';
import guruLogo from '../../../img/guru_logo.jpg';

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
        <form className='form-step'>
            <div className='logo'>
                <img src={guruLogo} alt='logo' />
            </div>
            <h2 className='header-form'>CHOOSE THE DELIVERY METHOD</h2>
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

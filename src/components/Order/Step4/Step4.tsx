import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { postOrder, reduceStep, selectOrderState } from '../../../store/order/orderSlice';
import { selectBasketState } from '../../../store/basket/basketSlice';
import { DefaultButton } from '../../UI/DefaultButton/DefaultButton';
import { ActiveButton } from '../../UI/ActiveButton/ActiveButton';
import { HeaderStep } from '../HeaderStep/HeaderStep';
import { sumNumbers } from '../../../helpers/helpers';
import { StatusFetch } from '../../../store/products/productsSlice';
import { Loader } from '../../UI/Loader/Loader';
import { Subtitle } from '../../UI/Subtitle/Subtitle';

import '../Step2/Step2.scss';
import './Step4.scss';

export const Step4: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {
        paymentMethod,
        lastName,
        firstName,
        address,
        deliveryMethod,
        deliveryCost,
        city,
        country,
        email,
        phone,
        postalCode,
        orderFetch,
        errorMessage
    } = useSelector(selectOrderState);

    const { basket, cost } = useSelector(selectBasketState);

    const back = () => {
        dispatch(reduceStep());
    };

    const redirect = () => {
        setTimeout(() => {
            history.push('/finish');
        }, 1);
    };

    const handleSubmit = () => {
        const order = {
            firstName,
            lastName,
            email,
            phone,
            cost,
            address,
            delivery: deliveryMethod,
            payment: paymentMethod,
            products: basket
        };
        dispatch(postOrder(redirect, order));
    };

    return (
        <form className='Step'>
            <HeaderStep>FINISH</HeaderStep>
            <div className='Summary'>
                <div className='Summary__basket'>
                    <Subtitle classNames='subtitle'>Products</Subtitle>
                    {basket.map((product) => (
                        <div key={product.id}>
                            <img src={product.pathIMG} alt='product order img' />
                            <h3>{product.name}</h3>
                            <h3>{product.quantity}</h3>
                        </div>
                    ))}
                </div>
                <div className='Summary__user'>
                    <Subtitle classNames='subtitle'>Address</Subtitle>
                    <h3>First name: {firstName}</h3>
                    <h3>Last name: {lastName}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Country: {country}</h3>
                    <h3>Phone: {phone}</h3>
                    <h3>Postal code: {postalCode}</h3>
                    <h3>City: {city}</h3>
                    <h3>Address: {address}</h3>
                </div>
                <div className='Summary__delivery'>
                    <Subtitle classNames='subtitle'>Delivery</Subtitle>
                    <h3>Delivery method: {deliveryMethod}</h3>
                    <h3>Delivery cost: ${deliveryCost}</h3>
                    <h3>Payment method: {paymentMethod}</h3>
                </div>
                <div className='Summary__total'>
                    <Subtitle classNames='subtitle'>Total cost</Subtitle>
                    <h3>${sumNumbers(cost, deliveryCost as number)}</h3>
                </div>
            </div>
            <div className='Step__buttons'>
                <DefaultButton onClick={back}>Back</DefaultButton>
                <ActiveButton
                    onClick={(e: any) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                    Order
                </ActiveButton>
            </div>
            {orderFetch === StatusFetch.LOADING && <Loader />}
            {orderFetch === StatusFetch.FAIL && <p className='Summary__error'>{errorMessage}</p>}
        </form>
    );
};

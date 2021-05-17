import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { finish, reduceStep, selectOrderState } from '../../../store/order/orderSlice';
import { clearBasket, selectBasketState } from '../../../store/basket/basketSlice';
import { sumNumbers } from '../../../helpers/helpers';

import '../Step2/Step2.scss';
import './Step4.scss';

import guruLogo from '../../../img/guru_logo.jpg';

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
        postalCode
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
        dispatch(finish());
        dispatch(clearBasket());
        redirect();
    };

    return (
        <form className='form-step'>
            <div className='logo'>
                <img src={guruLogo} alt='logo' />
            </div>
            <h2 className='header-form'>Finish</h2>
            <div className='summary'>
                <div className='summary__basket'>
                    <h2>Products</h2>
                    {basket.map((product) => (
                        <div key={product.id}>
                            <img src={product.pathIMG} alt='product order img' />
                            <h3>{product.name}</h3>
                            <h3>{product.quantity}</h3>
                        </div>
                    ))}
                </div>
                <div className='summary__user'>
                    <h2>Address</h2>
                    <h3>First name: {firstName}</h3>
                    <h3>Last name: {lastName}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Country: {country}</h3>
                    <h3>Phone: {phone}</h3>
                    <h3>Postal code: {postalCode}</h3>
                    <h3>City: {city}</h3>
                    <h3>Address: {address}</h3>
                </div>
                <div className='summary__delivery'>
                    <h2>Delivery</h2>
                    <h3>Delivery method: {deliveryMethod}</h3>
                    <h3>Delivery cost: ${deliveryCost}</h3>
                    <h3>Payment method: {paymentMethod}</h3>
                </div>
                <div className='summary__total'>
                    <h2>Total cost</h2>
                    <h3>${sumNumbers(cost, deliveryCost as number)}</h3>
                </div>
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
                        handleSubmit();
                    }}>
                    Order
                </button>
            </div>
        </form>
    );
};

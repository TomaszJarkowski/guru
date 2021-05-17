import { useSelector } from 'react-redux';

import { selectOrderState } from '../../../store/order/orderSlice';

import './StepsDots.scss';

export const StepDots: React.FC = () => {
    const { step } = useSelector(selectOrderState);

    return (
        <div className='dots'>
            <div className='dot' style={{ backgroundColor: '#00f260' }}>
                <h3>Address</h3>
                <i className='fas fa-angle-double-right'></i>
            </div>
            <div
                className='dot'
                style={step >= 2 ? { backgroundColor: '#00f260' } : { backgroundColor: 'white' }}>
                <h3>Delivery</h3>
                <i className='fas fa-angle-double-right'></i>
            </div>
            <div
                className='dot'
                style={step >= 3 ? { backgroundColor: '#00f260' } : { backgroundColor: 'white' }}>
                <h3>Payment</h3>
                <i className='fas fa-angle-double-right'></i>
            </div>
            <div
                className='dot'
                style={step === 4 ? { backgroundColor: '#00f260' } : { backgroundColor: 'white' }}>
                <h3>Summary</h3>
                <i className='fas fa-check'></i>
            </div>
        </div>
    );
};

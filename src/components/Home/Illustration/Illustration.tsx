import './Illustration.scss';

import img1 from '../../../img/calendar.png';
import img2 from '../../../img/clock.png';
import img3 from '../../../img/free-shipping.png';
import img4 from '../../../img/lock.png';

export const Illustration = () => {
    return (
        <div className='illustration'>
            <div className='illustration__item'>
                <img src={img1} alt='30 days money back' />
                <h2>30 days money back</h2>
            </div>
            <div className='illustration__item'>
                <img src={img2} alt='Fast shipping' />
                <h2>Fast shipping</h2>
            </div>
            <div className='illustration__item'>
                <img src={img3} alt='Free delivery' />
                <h2>Free delivery</h2>
            </div>
            <div className='illustration__item'>
                <img src={img4} alt='Safe shopping' />
                <h2>Safe shopping</h2>
            </div>
        </div>
    );
};

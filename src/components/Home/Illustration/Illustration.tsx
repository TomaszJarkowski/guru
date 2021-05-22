import './Illustration.scss';

import img1 from '../../../img/calendar.png';
import img2 from '../../../img/clock.png';
import img3 from '../../../img/free-shipping.png';
import img4 from '../../../img/lock.png';

export const Illustration = () => (
    <div className='Illustration'>
        <div className='illustration__item'>
            <img className='Illustration__img' src={img1} alt='30 days money back' />
            <h2 className='Illustration__title'>30 days money back</h2>
        </div>
        <div className='illustration__item'>
            <img className='Illustration__img' src={img2} alt='Fast shipping' />
            <h2 className='Illustration__title'>Fast shipping</h2>
        </div>
        <div className='illustration__item'>
            <img className='Illustration__img' src={img3} alt='Free delivery' />
            <h2 className='Illustration__title'>Free delivery</h2>
        </div>
        <div className='illustration__item'>
            <img className='Illustration__img' src={img4} alt='Safe shopping' />
            <h2 className='Illustration__title'>Safe shopping</h2>
        </div>
    </div>
);

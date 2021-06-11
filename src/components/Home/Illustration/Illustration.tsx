import { Subtitle } from '../../UI/Subtitle/Subtitle';

import './Illustration.scss';

import img1 from '../../../img/calendar.png';
import img2 from '../../../img/clock.png';
import img3 from '../../../img/free-shipping.png';
import img4 from '../../../img/lock.png';

export const Illustration = () => (
    <div className='Illustration'>
        <div className='illustration__item'>
            <img className='Illustration__img' src={img1} alt='30 days money back' />
            <Subtitle classNames='Illustration__title'>30 days money back</Subtitle>
        </div>
        <div className='illustration__item'>
            <img className='Illustration__img' src={img2} alt='Fast shipping' />
            <Subtitle classNames='Illustration__title'>Fast shipping</Subtitle>
        </div>
        <div className='illustration__item'>
            <img className='Illustration__img' src={img3} alt='Free delivery' />
            <Subtitle classNames='Illustration__title'>Free delivery</Subtitle>
        </div>
        <div className='illustration__item'>
            <img className='Illustration__img' src={img4} alt='Safe shopping' />
            <Subtitle classNames='Illustration__title'>Safe shopping</Subtitle>
        </div>
    </div>
);

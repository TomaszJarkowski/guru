import { Link } from 'react-router-dom';
import { Container } from '../components/UI/Container/Container';

import './scss/Finish.scss';

import finishIMG from '../img/finish6.svg';

export const Finish: React.FC = () => (
    <Container>
        <div className='FinishPage'>
            <h1 className='FinishPage__title'>Thank you for your purchase !!!</h1>
            <h3 className='FinishPage__info'>
                We'll email you an order confirmation with details and tracking information.
            </h3>
            <Link to='/' className='FinishPage__link'>
                Home
            </Link>
            <img src={finishIMG} className='FinishPage__img' alt='finish img' />
        </div>
    </Container>
);

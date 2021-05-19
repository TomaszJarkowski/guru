import { Link } from 'react-router-dom';
import { Container } from '../components/UI/Container/Container';

import finishIMG from '../img/finish6.svg';

export const Finish: React.FC = () => (
    <Container>
        <div className='finishPage'>
            <h1 className='finishPage__title'>Thank you for your purchase !!!</h1>
            <h3 className='finishPage__info'>
                We'll email you an order confirmation with details and tracking information.
            </h3>
            <Link to='/' className='finishPage__link'>
                Home
            </Link>
            <img src={finishIMG} className='finishPage__img' alt='finish img' />
        </div>
    </Container>
);

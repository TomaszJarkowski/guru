import { Container } from '../components/UI/Container/Container';

import './scss/Page404.scss';

import errorIMG from '../img/404.svg';

export const Page404: React.FC = () => (
    <Container>
        <div className='ErrorPage'>
            <h1 className='ErrorPage__title'>Page not found 🙁</h1>
            <img src={errorIMG} alt='error img' className='ErrorPage__img' />
        </div>
    </Container>
);

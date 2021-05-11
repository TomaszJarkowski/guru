import { Container } from '../components/Container/Container';
import errorIMG from '../img/404.svg';

export const Page404: React.FC = () => {
    return (
        <Container>
            <div className='errorPage'>
                <h1>Page not found 🙁</h1>
                <img src={errorIMG} alt='error img' />
            </div>
        </Container>
    );
};

import { Container } from '../components/UI/Container/Container';

import finishIMG from '../img/finish.svg';

export const Finish: React.FC = () => (
    <Container>
        <div className='finishPage'>
            <h1>Congratulation !!!</h1>
            <img src={finishIMG} alt='finish img' />
        </div>
    </Container>
);

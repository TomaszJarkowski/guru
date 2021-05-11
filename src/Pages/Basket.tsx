import { Content } from '../components/Basket/Content';
import { Container } from '../components/Container/Container';
import { Title } from '../components/Title/Title';

export const Basket: React.FC = () => {
    return (
        <Container>
            <Title>Basket</Title>
            <Content />
        </Container>
    );
};

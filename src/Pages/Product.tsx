import { Container } from '../components/Container/Container';
import { Content } from '../components/Product/Content';
import { Title } from '../components/Title/Title';

export const Product: React.FC = () => {
    return (
        <Container>
            <Title>Product</Title>
            <Content />
        </Container>
    );
};

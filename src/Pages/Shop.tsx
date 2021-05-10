import { Container } from '../components/Container/Container';
import { Content } from '../components/Shop/Content';
import { Title } from '../components/Title/Title';

export const Shop = () => (
    <div className='shop'>
        <Container>
            <Title>Shop</Title>
            <Content />
        </Container>
    </div>
);

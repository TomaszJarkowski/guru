import { ArticleContent } from '../components/Article/ArticleContent';
import { Container } from '../components/UI/Container/Container';
import { Title } from '../components/UI/Title/Title';

export const Article: React.FC = () => (
    <Container>
        <Title>Article</Title>
        <ArticleContent />
    </Container>
);

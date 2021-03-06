import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectArticlesState,
    TArticle
} from '../../../store/articles/articlesSlice';
import { fetchArticles } from '../../../api/articles/index';
import { StatusFetch } from '../../../constant/StatusFetch';
import { DefaultLink } from '../../UI/DefaultLink/DefaultLink';
import { Loader } from '../../UI/Loader/Loader';
import { Error } from '../../UI/Error/Error';
import { Text } from '../../UI/Text/Text';
import { Subtitle } from '../../UI/Subtitle/Subtitle';

import './Articles.scss';

const Description = ({ description }: { description: string }) => {
    const descriptionShort = description.slice(0, 80);
    return (
        <Text classNames='descriptionShort' small={true}>
            {descriptionShort}...
        </Text>
    );
};

export const Articles = () => {
    const { articles, articlesFetch, errorMessage } = useSelector(selectArticlesState);
    const dispatch = useDispatch();
    const [numberOfArticles, setNumberOfArticles] = useState(4);

    useEffect(() => {
        if (!articles.length) {
            dispatch(fetchArticles());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        if (numberOfArticles === 4) {
            setNumberOfArticles(articles.length);
        } else {
            setNumberOfArticles(4);
        }
    };

    if (articlesFetch === StatusFetch.FAIL) {
        return <Error>{errorMessage}</Error>;
    }

    return (
        <div className='Articles'>
            <>
                {articlesFetch !== StatusFetch.SUCCESS ? (
                    <Loader />
                ) : (
                    <div className='Articles__list'>
                        {articles
                            .map((article: TArticle) => (
                                <div className='Articles__item' key={article.id}>
                                    <Subtitle classNames='title'>{article.title}</Subtitle>
                                    <img className='img' src={article.imgs[0].src} alt='img' />
                                    <Description description={article.description} />
                                    <DefaultLink path={`/article/${article.id}`}>
                                        Read more
                                    </DefaultLink>
                                </div>
                            ))
                            .slice(0, numberOfArticles)}
                    </div>
                )}
            </>
            <div className='Articles__btn'>
                <button onClick={handleClick}>
                    <i
                        className='fas fa-arrow-alt-circle-up'
                        style={
                            numberOfArticles !== 4
                                ? { transform: 'rotate(0)' }
                                : { transform: 'rotate(180deg)' }
                        }></i>
                </button>
            </div>
        </div>
    );
};

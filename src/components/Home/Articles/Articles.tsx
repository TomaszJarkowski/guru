import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    fetchArticles,
    selectArticlesState,
    TArticle
} from '../../../store/articles/articlesSlice';
import { StatusFetch } from '../../../store/products/productsSlice';
import { Loader } from '../../UI/Loader/Loader';
import { Error } from '../../UI/Error/Error';

import './Articles.scss';

const Description = ({ description }: { description: string }) => {
    const descriptionShort = description.slice(0, 90);
    return <p className='descriptionShort'>{descriptionShort}...</p>;
};

export const Articles = () => {
    const { articles, articlesFetch, errorMessage } = useSelector(selectArticlesState);
    const dispatch = useDispatch();
    const [numberOfArticles, setNumberOfArticles] = useState(4);

    useEffect(() => {
        if (!articles.length) {
            dispatch(fetchArticles());
        }
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
        <div className='articles'>
            <>
                {articlesFetch !== StatusFetch.SUCCESS ? (
                    <Loader />
                ) : (
                    <div className='articles__list'>
                        {articles
                            .map((article: TArticle) => (
                                <div className='articles__item' key={article.id}>
                                    <h2>{article.title}</h2>
                                    <img src={article.imgs[0].src} alt='' />
                                    <Description description={article.description} />
                                    <Link to={`/article/${article.id}`}>
                                        <button className='btn'>Read more</button>
                                    </Link>
                                </div>
                            ))
                            .slice(0, numberOfArticles)}
                    </div>
                )}
            </>
            <div className='btn__allArticles'>
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

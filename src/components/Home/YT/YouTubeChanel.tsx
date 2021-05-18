import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectChanelState, TFilm, fetchFilms } from '../../../store/chanel/chanelSlice';
import { StatusFetch } from '../../../store/products/productsSlice';
import { Loader } from '../../UI/Loader/Loader';
import { Error } from '../../UI/Error/Error';

import './YouTubeChanel.scss';

export const YouTubeChanel = () => {
    const { films, filmsFetch, errorMessage } = useSelector(selectChanelState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!films.length) {
            dispatch(fetchFilms());
        }
    }, []);

    if (filmsFetch === StatusFetch.FAIL) {
        return <Error>{errorMessage}</Error>;
    }

    return (
        <div className='YTChanel'>
            <h1 className='video__header'>TackleGuruTV</h1>
            <div className='video__items'>
                {filmsFetch !== StatusFetch.SUCCESS ? (
                    <Loader />
                ) : (
                    films.map((film: TFilm) => (
                        <div className='video__item' key={film.id.videoId}>
                            <h1 className='video__title'>{film.snippet.title}</h1>
                            <img src={film.snippet.thumbnails.high.url} alt='yt chanel img' />
                            <button>
                                <a
                                    href={`https://www.youtube.com/watch?v=${film.id.videoId}`}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    YouTube<i className='fab fa-youtube'></i>
                                </a>
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

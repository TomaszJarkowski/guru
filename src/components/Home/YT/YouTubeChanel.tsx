import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectChanelState, TMovie } from '../../../store/chanel/chanelSlice';
import { StatusFetch } from '../../../constant/StatusFetch';
import { Loader } from '../../UI/Loader/Loader';
import { Error } from '../../UI/Error/Error';
import { Subtitle } from '../../UI/Subtitle/Subtitle';
import { fetchRecentMovies } from '../../../api/movies/index';

import './YouTubeChanel.scss';

export const YouTubeChanel = () => {
    const { films, filmsFetch, errorMessage } = useSelector(selectChanelState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!films.length) {
            dispatch(fetchRecentMovies());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    films.map((film: TMovie) => (
                        <div className='video__item' key={film.id.videoId}>
                            <Subtitle classNames='video__title'>{film.snippet.title}</Subtitle>
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

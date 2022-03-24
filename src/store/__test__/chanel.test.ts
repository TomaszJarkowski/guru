import chanelReducer, { initialState } from '../chanel/chanelSlice';
import { fetchRecentMovies } from '../../api/movies';
import { StatusFetch } from '../../constant/StatusFetch';

const mockData = [
    {
        id: {
            videoId: 1
        },
        snippet: {
            title: 'Deano’s Scottish adventure for GIGANTIC GRAYLING (New PB!)',
            thumbnails: {
                high: {
                    url: 'https://i.ytimg.com/vi/pfB6ibsXkFE/hqdefault.jpg'
                }
            }
        }
    },
    {
        id: {
            videoId: 2
        },
        snippet: {
            title: 'The Perfect Hybrid Feeder Mix With Steve Ringer',
            thumbnails: {
                high: {
                    url: 'https://i.ytimg.com/vi/N8YOoj-_j9o/hqdefault.jpg'
                }
            }
        }
    },
    {
        id: {
            videoId: 3
        },
        snippet: {
            title: 'The ULTIMATE Fishing Reel Explainer with Steve Ringer',
            thumbnails: {
                high: {
                    url: 'https://i.ytimg.com/vi/ZwyOC9YHzgY/hqdefault.jpg'
                }
            }
        }
    }
];

describe('chanel reducer', () => {
    it('pending', () => {
        const action = {
            type: fetchRecentMovies.pending.type
        };

        const state = chanelReducer(initialState, action);

        expect(state.filmsFetch).toEqual(StatusFetch.LOADING);
    });

    it('fulfilled', () => {
        const action = {
            type: fetchRecentMovies.fulfilled.type,
            payload: mockData
        };

        const state = chanelReducer(initialState, action);

        expect(state.filmsFetch).toEqual(StatusFetch.SUCCESS);
        expect(state.errorMessage).toEqual('');
        expect(state.films.length).toEqual(3);
        expect(state.films[0].snippet.title).toEqual(
            'Deano’s Scottish adventure for GIGANTIC GRAYLING (New PB!)'
        );
    });

    it('rejected', () => {
        const errorMessage = 'Uppps something wents wrong';

        const action = {
            type: fetchRecentMovies.rejected.type,
            payload: errorMessage
        };

        const state = chanelReducer(initialState, action);

        expect(state.filmsFetch).toEqual(StatusFetch.FAIL);
        expect(state.errorMessage).toEqual(errorMessage);
        expect(state.films.length).toEqual(0);
    });
});

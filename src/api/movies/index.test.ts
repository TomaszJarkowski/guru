/* eslint-disable padded-blocks */
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import { fetchRecentMovies } from './index';
import { MOVIES_API_URL } from './../URL/apiAddresses';

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

const errorMockData = {
    message: 'Error message',
    statusCode: 404
};

describe('fetchRecentMovies', () => {
    it('resolved', async () => {
        const getSpy = jest
            .spyOn(axios, 'get')
            .mockResolvedValueOnce({ data: { items: mockData } });

        const store = configureStore({
            reducer: function (state = '', action) {
                switch (action.type) {
                    case 'chanel/fetch/fulfilled':
                        return action.payload;
                    default:
                        return state;
                }
            }
        });

        await store.dispatch(fetchRecentMovies());
        expect(getSpy).toBeCalledWith(MOVIES_API_URL);
        const state = await store.getState();
        expect(state).toEqual(mockData);
    });

    it('rejected', async () => {
        const getSpy = jest.spyOn(axios, 'get').mockRejectedValueOnce({ data: errorMockData });

        const store = configureStore({
            reducer: function (state = '', action) {
                switch (action.type) {
                    case 'chanel/fetch/rejected':
                        return action.payload;
                    default:
                        return state;
                }
            }
        });

        await store.dispatch(fetchRecentMovies());
        expect(getSpy).toBeCalledWith(MOVIES_API_URL);
        const state = await store.getState();
        expect(state).toEqual('Oops something went wrong...');
    });
});

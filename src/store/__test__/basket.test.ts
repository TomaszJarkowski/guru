import basketReducer, {
    initialState,
    addProduct,
    removeProduct,
    trashProduct,
    clearBasket
} from '../basket/basketSlice';

describe('basker reducer', () => {
    it('addProduct', () => {
        const state = basketReducer(
            initialState,
            addProduct({
                id: 1,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        expect(state.basket.length).toBe(1);
    });
    it('addProduct, multiple products', () => {
        const state = basketReducer(
            initialState,
            addProduct({
                id: 1,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        const state1 = basketReducer(
            state,
            addProduct({
                id: 2,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        const state2 = basketReducer(
            state1,
            addProduct({
                id: 2,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        expect(state2.basket.length).toBe(2);
        expect(state2.number).toBe(3);
        expect(state2.cost).toBe(45);
    });
    it('removeProduct', () => {
        const state = basketReducer(
            initialState,
            addProduct({
                id: 1,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        const state1 = basketReducer(
            state,
            addProduct({
                id: 1,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        const state2 = basketReducer(
            state1,
            removeProduct({
                id: 1,
                price: 15
            })
        );

        expect(state2.number).toBe(1);
    });
    it('trashProduct', () => {
        const state = basketReducer(
            initialState,
            addProduct({
                id: 1,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        const state1 = basketReducer(
            state,
            addProduct({
                id: 2,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        const state2 = basketReducer(
            state1,
            trashProduct({
                id: 1
            })
        );

        expect(state2.number).toBe(1);
        expect(state2.cost).toBe(15);
        expect(state2.basket.length).toBe(1);
    });
    it('clearBasket', () => {
        const state = basketReducer(
            initialState,
            addProduct({
                id: 1,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        const state1 = basketReducer(
            state,
            addProduct({
                id: 2,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        const state2 = basketReducer(
            state1,
            addProduct({
                id: 1,
                name: 'Product',
                price: 15,
                pathIMG: 'URL'
            })
        );

        const state3 = basketReducer(state2, clearBasket());

        expect(state3.number).toBe(initialState.number);
        expect(state3.cost).toBe(initialState.cost);
        expect(state3.basket.length).toBe(0);
    });
});

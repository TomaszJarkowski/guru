import {
    sumNumbers,
    differenceNumbers,
    sortByStatus,
    sortByPriceHighToLow,
    sortByPriceLowToHigh,
    sortByNameAToZ,
    sortByNameZToA
} from './helpers';

describe('helpers', () => {
    const products = [
        { name: 'sss', id: 1, price: 0.1, status: 'old', pathIMG: 'string' },
        { name: 'vvv', id: 2, price: 1, status: 'old', pathIMG: 'string' },
        { name: 'BBB', id: 3, price: 1.2, status: 'old', pathIMG: 'string' },
        { name: 'Zzz', id: 4, price: 8, status: 'old', pathIMG: 'string' },
        { name: 'Aab', id: 5, price: 9.6, status: 'new', pathIMG: 'string' },
        { name: 'AAa', id: 6, price: 2.5, status: 'new', pathIMG: 'string' }
    ];

    test('sumNumbers', () => {
        expect(sumNumbers(1, 2)).toBe(3);
        expect(sumNumbers(1.999999, 2.12)).toBe(4.12);
        expect(sumNumbers(1.322, 2.1)).toBe(3.42);
        expect(sumNumbers(1, 2.0001)).toBe(3);
    });

    test('differenceNumbers', () => {
        expect(differenceNumbers(4, 2)).toBe(2);
        expect(differenceNumbers(2.12, 1.9999999)).toBe(0.12);
        expect(differenceNumbers(2.1, 1.32)).toBe(0.78);
        expect(differenceNumbers(2.00001, 1)).toBe(1);
    });

    test('sortByStatus', () => {
        const sortedProducts = sortByStatus(products);

        expect(sortedProducts[0].status).toBe('new');
        expect(sortedProducts[1].status).toBe('new');
        expect(sortedProducts[5].status).not.toBe('new');
    });

    test('sortByPriceHighToLow', () => {
        const sortedProducts = sortByPriceHighToLow(products);

        const firstElement = sortedProducts[0].price;
        const secondElement = sortedProducts[1].price;
        const thirdElement = sortedProducts[2].price;

        expect(firstElement > secondElement).toBeTruthy();
        expect(secondElement > thirdElement).toBeTruthy();
        expect(firstElement).toBe(9.6);
    });

    test('sortByPriceLowToHigh', () => {
        const sortedProducts = sortByPriceLowToHigh(products);

        const firstElement = sortedProducts[0].price;
        const secondElement = sortedProducts[1].price;
        const thirdElement = sortedProducts[2].price;

        expect(firstElement < secondElement).toBeTruthy();
        expect(secondElement < thirdElement).toBeTruthy();
        expect(firstElement).toBe(0.1);
    });

    test('sortByNameAToZ', () => {
        const sortedProducts = sortByNameAToZ(products);

        const firstElement = sortedProducts[0].name;
        const secondElement = sortedProducts[1].name;
        const lastElement = sortedProducts[sortedProducts.length - 1].name;

        expect(firstElement).toBe('AAa');
        expect(secondElement).toBe('Aab');
        expect(lastElement).toBe('Zzz');
    });

    test('sortByNameZToA', () => {
        const sortedProducts = sortByNameZToA(products);

        const firstElement = sortedProducts[0].name;
        const secondElement = sortedProducts[1].name;
        const lastElement = sortedProducts[sortedProducts.length - 1].name;

        expect(firstElement).toBe('Zzz');
        expect(secondElement).toBe('vvv');
        expect(lastElement).toBe('AAa');
    });
});

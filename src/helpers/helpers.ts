import { TProduct } from '../components/Shop/Product/Product';

export const sumNumbers = (numberOne: number, numberTwo: number) => {
    return Math.round((numberOne + numberTwo) * 100) / 100;
};

export const differenceNumbers = (numberOne: number, numberTwo: number) => {
    return Math.round((numberOne - numberTwo) * 100) / 100;
};

export const sortByStatus = (products: TProduct[]): TProduct[] => {
    const array = [...products].sort(function (a, b) {
        let fa = a.status;
        if (fa === 'new') {
            return -1;
        }
        return 0;
    });

    return array;
};

export const sortByPriceHighToLow = (products: TProduct[]) => {
    const array = [...products]
        .sort(function (a, b) {
            return a.price - b.price;
        })
        .reverse();

    return array;
};

export const sortByPriceLowToHigh = (products: TProduct[]) => {
    const array = [...products].sort(function (a, b) {
        return a.price - b.price;
    });

    return array;
};

export const sortByNameAToZ = (products: TProduct[]) => {
    const array = [...products].sort(function (a, b) {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });

    return array;
};

export const sortByNameZToA = (products: TProduct[]) => {
    const array = [...products]
        .sort(function (a, b) {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
        .reverse();

    return array;
};

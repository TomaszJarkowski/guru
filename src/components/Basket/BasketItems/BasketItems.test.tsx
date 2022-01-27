/* eslint-disable max-len */
import { fireEvent, render } from '@testing-library/react';
import { BasketItems } from './BasketItems';

const mockDispatch = jest.fn();

const mockBasketData = [
    {
        id: 1,
        pathIMG:
            'https://i.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
        name: 'Guru hooks',
        quantity: 2,
        price: 2.2
    },
    {
        id: 2,
        pathIMG:
            'https://i.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
        name: 'Guru line',
        quantity: 1,
        price: 0.6
    },
    {
        id: 3,
        pathIMG:
            'https://i.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
        name: 'Worms',
        quantity: 3,
        price: 1.2
    },
    {
        id: 4,
        pathIMG:
            'https://i.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
        name: 'Red worms',
        quantity: 45,
        price: 1
    }
];

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

const payload = {
    id: 1,
    name: 'Guru hooks',
    pathIMG:
        'https://i.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
    price: 2.2,
    quantity: 2
};

const MockRedux = () => <BasketItems basket={mockBasketData} />;

describe('BasketItems', () => {
    it('should render basket item', () => {
        const { container } = render(<MockRedux />);

        const nameElement = container.getElementsByClassName('BasketItem__name')[0];
        const numbersElement = container.getElementsByClassName('BasketItem__numbers')[0];
        const totalElement = container.getElementsByClassName('BasketItem__total')[0];

        expect(nameElement).toHaveTextContent('Guru hooks');
        expect(numbersElement).toHaveTextContent('2');
        expect(totalElement).toHaveTextContent('4.40');

        const nameElementSecond = container.getElementsByClassName('BasketItem__name')[1];
        const numbersElementSecond = container.getElementsByClassName('BasketItem__numbers')[1];
        const totalElementSecond = container.getElementsByClassName('BasketItem__total')[1];

        expect(nameElementSecond).toHaveTextContent('Guru line');
        expect(numbersElementSecond).toHaveTextContent('1');
        expect(totalElementSecond).toHaveTextContent('0.6');

        const nameElementThird = container.getElementsByClassName('BasketItem__name')[2];
        const numbersElementThird = container.getElementsByClassName('BasketItem__numbers')[2];
        const totalElementThird = container.getElementsByClassName('BasketItem__total')[2];

        expect(nameElementThird).toHaveTextContent('Worms');
        expect(numbersElementThird).toHaveTextContent('3');
        expect(totalElementThird).toHaveTextContent('3.6');
    });

    it('should render multiple basket items', () => {
        const { container } = render(<MockRedux />);

        const itemElements = container.getElementsByClassName('BasketItem');

        expect(itemElements.length).toBe(4);
    });

    it('should increase number of product after button is clicked', async () => {
        const { container } = render(<MockRedux />);

        const buttonElement = container.getElementsByClassName('fa-arrow-circle-right')[0];
        fireEvent.click(buttonElement);

        expect(mockDispatch).toBeCalledWith({
            payload,
            type: 'basket/addProduct'
        });
    });

    it('should decrease number of product after button is clicked', async () => {
        const { container } = render(<MockRedux />);

        const buttonElement = container.getElementsByClassName('fa-arrow-circle-left')[0];
        fireEvent.click(buttonElement);

        expect(mockDispatch).toBeCalledWith({
            payload,
            type: 'basket/removeProduct'
        });
    });

    it('should delete product after trash icon is clicked', async () => {
        const { container } = render(<MockRedux />);

        const buttonElement = container.getElementsByClassName('fa-trash-alt')[0];
        fireEvent.click(buttonElement);

        expect(mockDispatch).toBeCalledWith({
            payload,
            type: 'basket/trashProduct'
        });
    });
});

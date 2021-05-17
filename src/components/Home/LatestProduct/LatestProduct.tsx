import { NavLink, Route, Switch } from 'react-router-dom';

import { Modal } from '../../Modal/Modal';

import './LatestProduct.scss';

import img5 from '../../../img/new-product.jpg';
import img14 from '../../../img/latest-product.jpg';

const Product = () => {
    return (
        <div className='news__products'>
            <h2>Super MWG</h2>
            <p>
                The MWG (Match Wide Gape) hook pattern has been a massive success since its launch,
                and there’s now a new version joining the already extensive range of Guru hooks. The
                Guru Super MWGs feature a PTFE coating, which gives it a duller finish, as well as
                making the surface smoother to aid penetration and the hook last longer. It is still
                a bit of an all-rounder, and can be used for a variety of different styles of
                fishing – everything from waggler or feeder fishing with hair-rigged baits, through
                to pole fishing for big fish on heavy elastics. The wide gape ensures that as many
                bites as possible are converted into hooked fish, as does its beaked, ultra-sharp
                point. It is also the perfect choice to use when hair rigging baits as the
                over-sized eye means that it is possible to attach it using a knotless knot, even
                with heavier hook link materials. Guru product developer Pemb Wrighting revealed:
                “This is a premium version of the already proven MWG hook. The Super MWG pattern
                comes with a durable PTFE coating and this takes the hook to a whole new level of
                sharpness and strength.
            </p>
            <img src={img14} alt='new product' />
        </div>
    );
};

export const LatestProduct = () => {
    return (
        <>
            <div className='last-products'>
                <div className='last-products__item'>
                    <h2>Latest Products</h2>
                    <p>
                        Our busy team of designers, engineers and consultants are constantly working
                        on exciting new products. Our main objective is to produce items that are
                        practical, well-engineered, affordable and most importantly, tackle that
                        will help you catch more fish. We have at least four major product launches
                        a year, so bookmark this page to stay in touch with all of the latest
                        developments.
                    </p>
                    <NavLink to='/home/new-products'>
                        <button>New Products</button>
                    </NavLink>
                </div>
                <img src={img5} alt='our new product' />
            </div>
            <Switch>
                <Route path='/home/new-products'>
                    <Modal>
                        <Product />
                    </Modal>
                </Route>
            </Switch>
        </>
    );
};

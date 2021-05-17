import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Shop } from './Pages/Shop';
import { Contact } from './Pages/Contact';
import { Basket } from './Pages/Basket';
import { Page404 } from './Pages/Page404';
import { Order } from './Pages/Order';
import { Article } from './Pages/Article';
import { Product } from './Pages/Product';
import { Finish } from './Pages/Finish';
import { useSelector } from 'react-redux';
import { selectBasketState } from './store/basket/basketSlice';
import { selectOrderState } from './store/order/orderSlice';

export const Page = () => {
    const { basket } = useSelector(selectBasketState);
    const { finish } = useSelector(selectOrderState);

    return (
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route path='/article/:id' component={Article} />
            <Route path='/product/:id' component={Product} />
            <Route path='/contact' component={Contact} />
            <Route path='/basket' component={Basket} />
            <Route
                path='/order'
                render={() => (basket.length ? <Order /> : <Redirect to='/basket' />)}
            />
            <Route
                path='/finish'
                render={() => (finish ? <Finish /> : <Redirect to='/shop' />)}
            />
            <Route component={Page404} />
        </Switch>
    );
};

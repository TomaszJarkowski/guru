import { Route, Switch } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Shop } from './Pages/Shop';
import { Contact } from './Pages/Contact';
import { Basket } from './Pages/Basket';
import { Page404 } from './Pages/Page404';
import { Order } from './Pages/Order';
import { Article } from './Pages/Article';
import { Product } from './Pages/Product';

export const Page = () => (
    <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/article/:id' component={Article} />
        <Route path='/product/:id' component={Product} />
        <Route path='/contact' component={Contact} />
        <Route path='/basket' component={Basket} />
        <Route path='/order' component={Order} />
        <Route component={Page404} />
    </Switch>
);

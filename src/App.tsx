import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as Sentry from '@sentry/react';

import { Nav } from './components/Navigation/Nav';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Page } from './Page';

import './scss/Reset.scss';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <Router>
        <div className='App'>
            <ToastContainer limit={4} autoClose={3000} />
            <Header />
            <Nav />
            <Page />
            <Footer />
        </div>
    </Router>
);

export default Sentry.withProfiler(App);

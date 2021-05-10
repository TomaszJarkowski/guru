import url from '../../img/guru_logo.jpg';

import './Header.scss';

export const Header: React.FC = () => (
    <header className='header'>
        <img className='header__logo' src={url} alt='header-logo' />
    </header>
);

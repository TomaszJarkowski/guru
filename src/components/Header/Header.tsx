import './Header.scss';

import url from '../../img/guru_logo.jpg';

export const Header: React.FC = () => (
    <header className='header'>
        <img className='header__logo' src={url} alt='header-logo' />
    </header>
);

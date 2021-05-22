import './Header.scss';

import url from '../../img/guru_logo.jpg';

export const Header: React.FC = () => (
    <header className='Header'>
        <img className='Header__logo' src={url} alt='header-logo' />
    </header>
);

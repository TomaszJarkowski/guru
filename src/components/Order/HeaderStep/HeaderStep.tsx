import guruLogo from '../../../img/guru_logo.jpg';

import './HeaderStep.scss';

export const HeaderStep: React.FC = ({ children }) => {
    return (
        <div className='HeaderStep'>
            <div className='HeaderStep__logo'>
                <img src={guruLogo} alt='logo' />
            </div>
            <h2 className='HeaderStep__title'>{children}</h2>
        </div>
    );
};

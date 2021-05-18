import '../../UI/Empty/Empty.scss';

import imgError from '../../../img/error.svg';

export const Error: React.FC = ({ children }) => (
    <div className='error'>
        <h3>{children}</h3>
        <img src={imgError} alt='error' />
    </div>
);

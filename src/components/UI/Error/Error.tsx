import '../../UI/Empty/Empty.scss';

import imgError from '../../../img/error.svg';

/**
 * Error component.
 *
 * @version 1.0.0
 * @author [Tomasz Jarkowski](https://github.com/TomaszJarkowski)
 */

export const Error: React.FC = ({ children }) => (
    <div className='Error'>
        <h3>{children}</h3>
        <img src={imgError} alt='error' />
    </div>
);

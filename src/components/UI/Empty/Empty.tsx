import './Empty.scss';

import imgEmpty from '../../../img/empty.svg';

/**
 * Empty component.
 *
 * @version 1.0.0
 * @author [Tomasz Jarkowski](https://github.com/TomaszJarkowski)
 */

export const Empty: React.FC = ({ children }) => (
    <div className='Empty'>
        <h3>{children}</h3>
        <img src={imgEmpty} alt='empty' />
    </div>
);

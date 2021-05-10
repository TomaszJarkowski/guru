import imgEmpty from '../../../img/empty.svg';

import './Empty.scss';

export const Empty: React.FC = () => (
    <div className='empty'>
        <h3>The product list is empty!</h3>
        <img src={imgEmpty} alt='empty' />
    </div>
);

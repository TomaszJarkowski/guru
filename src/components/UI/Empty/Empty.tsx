import './Empty.scss';

import imgEmpty from '../../../img/empty.svg';

export const Empty: React.FC = ({ children }) => (
    <div className='Empty'>
        <h3>{ children }</h3>
        <img src={imgEmpty} alt='empty' />
    </div>
);

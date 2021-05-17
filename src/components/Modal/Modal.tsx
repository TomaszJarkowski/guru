import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import './Modal.scss';

export const Modal = ({ children }: any) => {
    const history = useHistory();

    const handleClose = (e: any) => {
        e.stopPropagation();
        history.goBack();
    };

    return createPortal(
        <div className='modal__wrapper' onClick={handleClose}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <div className='modal__closeIcon' onClick={handleClose}>
                    X
                </div>
                {children}
            </div>
        </div>,
        document.querySelector('#modal') as any
    );
};

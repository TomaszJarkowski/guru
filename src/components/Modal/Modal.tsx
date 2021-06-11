import React from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import './Modal.scss';

type TModal = {
    children: React.ReactNode;
};

export const Modal: React.FC<TModal> = ({ children }) => {
    const history = useHistory();

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        history.goBack();
    };

    const modal = document.querySelector('#modal');

    return createPortal(
        <div className='Modal' onClick={handleClose}>
            <div className='Modal__content' onClick={(e) => e.stopPropagation()}>
                <div className='Modal__closeIcon' onClick={handleClose}>
                    X
                </div>
                {children}
            </div>
        </div>,
        modal as HTMLDivElement
    );
};

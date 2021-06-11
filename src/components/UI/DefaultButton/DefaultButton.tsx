import { CSSProperties } from 'react';
import './DefaultButton.scss';

type TDefaultButton = {
    children: React.ReactNode;
    onClick?: () => void;
    style?: CSSProperties;
};

export const DefaultButton: React.FC<TDefaultButton> = ({ children, onClick, style }) => (
    <button className='DefaultButton' style={style} onClick={onClick}>
        {children}
    </button>
);

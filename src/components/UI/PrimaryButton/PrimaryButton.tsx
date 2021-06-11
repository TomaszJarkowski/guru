import { CSSProperties } from 'react';
import './PrimaryButton.scss';

type TPrimaryButton = {
    children: React.ReactNode;
    onClick?: () => void;
    style?: CSSProperties;
};

export const PrimaryButton: React.FC<TPrimaryButton> = ({ children, onClick, style }) => (
    <button className='PrimaryButton' style={style} onClick={onClick}>
        {children}
    </button>
);

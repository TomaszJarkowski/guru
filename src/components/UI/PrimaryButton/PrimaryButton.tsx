import { CSSProperties } from 'react';
import './PrimaryButton.scss';

type TPrimaryButton = {
    children: React.ReactNode;
    onClick?: () => void;
    style?: CSSProperties;
};

/**
 * Primary button.
 *
 * @version 1.0.0
 * @author [Tomasz Jarkowski](https://github.com/TomaszJarkowski)
 */

export const PrimaryButton: React.FC<TPrimaryButton> = ({ children, onClick, style }) => (
    <button className='PrimaryButton' style={style} onClick={onClick}>
        {children}
    </button>
);

import { CSSProperties } from 'react';
import './DefaultButton.scss';

type TDefaultButton = {
    children: React.ReactNode;
    onClick?: () => void;
    style?: CSSProperties;
};

/**
 * Default button.
 *
 * @version 1.0.0
 * @author [Tomasz Jarkowski](https://github.com/TomaszJarkowski)
 */

export const DefaultButton: React.FC<TDefaultButton> = ({ children, onClick, style }) => (
    <button className='DefaultButton' style={style} onClick={onClick}>
        {children}
    </button>
);

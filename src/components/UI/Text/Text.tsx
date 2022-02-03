import { CSSProperties } from 'react';

import './Text.scss';

type TText = {
    children: React.ReactNode;
    classNames: string;
    small?: boolean;
    style?: CSSProperties;
};

/**
 * Text component.
 *
 * @version 1.0.0
 * @author [Tomasz Jarkowski](https://github.com/TomaszJarkowski)
 */

export const Text: React.FC<TText> = ({ children, classNames, small = false, style }) => (
    <p className={small ? `SmallText ${classNames}` : `Text ${classNames}`} style={style}>
        {children}
    </p>
);

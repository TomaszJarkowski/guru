import { CSSProperties } from 'react';

import './Subtitle.scss';

type TSubtitle = {
    children: React.ReactNode;
    classNames?: string;
    style?: CSSProperties;
};

/**
 * Subtitle component.
 *
 * @version 1.0.0
 * @author [Tomasz Jarkowski](https://github.com/TomaszJarkowski)
 */

export const Subtitle: React.FC<TSubtitle> = ({ children, classNames, style }) => (
    <p className={`Subtitle ${classNames}`} style={style}>{children}</p>
);

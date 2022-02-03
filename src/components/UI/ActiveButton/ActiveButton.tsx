import './ActiveButton.scss';

type TActiveButton = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

/**
 * Active button.
 *
 * @version 1.0.0
 * @author [Tomasz Jarkowski](https://github.com/TomaszJarkowski)
 */

export const ActiveButton: React.FC<TActiveButton> = ({ children, onClick }) => (
    <button className='ActiveButton' onClick={onClick}>
        {children}
    </button>
);

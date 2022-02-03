import './DisabledButton.scss';

type TDisabledButton = {
    children: React.ReactNode;
};

/**
 * Disabled button.
 *
 * @version 1.0.0
 * @author [Tomasz Jarkowski](https://github.com/TomaszJarkowski)
 */

export const DisabledButton: React.FC<TDisabledButton> = ({ children }) => (
    <button className='DisabledButton' disabled={true}>{children}</button>
);

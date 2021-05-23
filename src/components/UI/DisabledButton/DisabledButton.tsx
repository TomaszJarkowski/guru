import './DisabledButton.scss';

type TDisabledButton = {
    children: React.ReactNode;
};

export const DisabledButton: React.FC<TDisabledButton> = ({ children }) => (
    <button className='DisabledButton'>
        {children}
    </button>
);

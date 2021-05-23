import './ActiveButton.scss';

type TActiveButton = {
    children: React.ReactNode;
    onClick?: any;
};

export const ActiveButton: React.FC<TActiveButton> = ({ children, onClick }) => (
    <button className='ActiveButton' onClick={onClick}>
        {children}
    </button>
);

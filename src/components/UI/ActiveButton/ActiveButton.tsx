import './ActiveButton.scss';

type TActiveButton = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export const ActiveButton: React.FC<TActiveButton> = ({ children, onClick }) => (
    <button className='ActiveButton' onClick={onClick}>
        {children}
    </button>
);

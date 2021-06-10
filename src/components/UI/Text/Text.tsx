import './Text.scss';

type TText = {
    children: React.ReactNode;
    classNames: string;
    small?: boolean
}

export const Text: React.FC<TText> = ({ children, classNames, small=false }) => (
    <p className={ small ? `SmallText ${classNames}` : `Text ${classNames}`}>{children}</p>
);

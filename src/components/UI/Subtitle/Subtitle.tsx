import './Subtitle.scss';

type TSubtitle = {
    children: React.ReactNode;
    classNames?: string;
}

export const Subtitle: React.FC<TSubtitle> = ({ children, classNames }) => (
    <p className={`Subtitle ${classNames}`}>{children}</p>
);

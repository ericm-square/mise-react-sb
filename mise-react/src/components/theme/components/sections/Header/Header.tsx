export interface IHeaderProps {
    remove: string;
}

export default function Header(props: IHeaderProps) {
    const { remove } = props;
    console.log(remove);
    return (
        <div>
            Header
        </div>
    );
}
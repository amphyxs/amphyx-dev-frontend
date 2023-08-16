import NamedIcon from "./NamedIcon";


type Props = {
    text?: string,
    icon?: string,
    textClassName?: string,
    iconClassName?: string,
}

const IconedTitle = ({ text, icon, textClassName='text-2xl', iconClassName='mr-1 w-7 h-7' }: Props) => {

    return (
        <div className="flex mb-5">
            {
                icon &&
                <NamedIcon
                    name={icon}
                    className={iconClassName + ' self-center inline'}
                />
            }
            {
                text &&
                <h1 className={textClassName}>{text}</h1>
            }
        </div>
    );
}

export default IconedTitle;

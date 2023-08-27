import NamedIcon from "./NamedIcon";


type Props = {
    text?: string,
    icon?: string,
    textClassName?: string,
    iconClassName?: string,
    className?: string,
    href?: string,
}

const IconedTitle = ({ text, icon, textClassName='text-2xl', iconClassName='mr-1 w-7 h-7', className='mb-5', href }: Props) => {

    return (
        <div className={className + " flex"}>
            {
                icon &&
                <NamedIcon
                    name={icon}
                    className={iconClassName + ' self-center inline dark:text-slate-200 dark:fill-slate-200'}
                />
            }
            {
                text && (
                    href ? (
                        <a href={href} className={textClassName + ' flex-1 hover:opacity-50'}>{text}</a>
                    ) : (
                        <h1 className={textClassName + ' flex-1'}>{text}</h1>
                    )
                )
            }
        </div>
    );
}

export default IconedTitle;

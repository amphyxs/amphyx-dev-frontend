import { ReactNode } from "react";
import IconedTitle from "./IconedTitle";


type Props = {
    children: ReactNode,
    title?: string,
    icon?: string,
    className?: string,
    onClick?: () => void,
}

const TitledCard = ({ children, title, icon, className, onClick }: Props) => {

    if (!className)
        className = ''
    else
        className += ' '
    
    return (
        <div 
            className={className + 'p-6 bg-white dark:text-slate-200 dark:bg-zinc-800 border-solid border-2 dark:border-slate-500 border-slate-100 shadow-sm rounded-xl'}
            onClick={onClick}
        >
            {
                (title || icon) &&
                <IconedTitle
                    text={title}
                    icon={icon}
                    iconClassName="stroke-slate-800 fill-slate-800 text-slate-800 dark:text-slate-200 dark:fill-slate-200 w-7 h-7 mr-2 dark:stroke-slate-200"
                />
            }
            <div>
                {children}
            </div>
        </div>
    );
}

export default TitledCard;

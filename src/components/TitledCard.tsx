import { ReactNode } from "react";
import IconedTitle from "./IconedTitle";


type Props = {
    children: ReactNode,
    title?: string,
    icon?: string,
    className?: string,
}

const TitledCard = ({ children, title, icon, className }: Props) => {

    if (!className)
        className = ''
    else
        className += ' '
    
    return (
        <div className={className + 'p-6 bg-white border-solid border-2 border-slate-100 shadow-sm rounded-xl'}>
            {
                (title || icon) &&
                <IconedTitle
                    text={title}
                    icon={icon}
                />
            }
            <div>
                {children}
            </div>
        </div>
    );
}

export default TitledCard;

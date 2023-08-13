import { ReactNode } from "react";
import NamedIcon from "./NamedIcon";


type Props = {
    children: ReactNode,
    title?: string,
    icon?: string,
    colspan: number,
}

const TitledCard = ({ children, title, icon, colspan }: Props) => {
    return (
        <div className={`md:col-span-${colspan} col-span-${colspan} p-6 bg-white shadow-lg rounded-xl`}>
            {
                (title || icon) && 
                <div className="flex mb-5">
                    {
                        icon &&
                        <NamedIcon
                            name={icon}
                            className='inline mr-2 w-9 h-9'
                        />
                    }
                    {
                        title &&
                        <h1 className='text-3xl'>{title}</h1>
                    }
                </div>
            }
            <div>
                {children}
            </div>
        </div>
    );
}

export default TitledCard;

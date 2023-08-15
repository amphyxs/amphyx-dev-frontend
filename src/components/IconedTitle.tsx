import NamedIcon from "./NamedIcon";


type Props = {
    text?: string,
    icon?: string,
}

const IconedTitle = ({ text, icon }: Props) => {

    return (
        <div className="flex mb-5">
            {
                icon &&
                <NamedIcon
                    name={icon}
                    className='self-center inline mr-1 w-7 h-7'
                />
            }
            {
                text &&
                <h1 className='text-2xl'>{text}</h1>
            }
        </div>
    );
}

export default IconedTitle;

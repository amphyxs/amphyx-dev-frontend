import { LinkIcon } from '@heroicons/react/24/solid'
import { ReactComponent as VKIcon } from '../icons/vk.svg';

const NamedIcon = ({ name, className }: { name: string, className: string }) => {
    
    const icons: Record<string, JSX.Element> = {
        'vk': <VKIcon/>
    };

    const getIconWithClassName = () => {
        const element = icons[name] ?? <LinkIcon/>;
        return (
            <span className={className}>{ element }</span>
        )
    }

    return getIconWithClassName();
}

export default NamedIcon;

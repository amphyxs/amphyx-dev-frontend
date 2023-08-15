import { LinkIcon, ChartBarIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { ReactComponent as VKIcon } from '../icons/vk.svg';
import { ReactComponent as HelloIcon } from '../icons/hello.svg';
import { ReactComponent as GitHubIcon } from '../icons/github.svg';
import { ReactComponent as LeetCodeIcon } from '../icons/leetcode.svg';

const NamedIcon = ({ name, className }: { name: string, className: string }) => {
    
    const icons: Record<string, JSX.Element> = {
        'vk': <VKIcon/>,
        'hello': <HelloIcon/>,
        'stats': <ChartBarIcon/>,
        'github': <GitHubIcon/>,
        'leetcode': <LeetCodeIcon/>,
        'info': <InformationCircleIcon/>,
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

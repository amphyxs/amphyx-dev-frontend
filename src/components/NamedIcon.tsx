import { LinkIcon, ChartBarIcon, InformationCircleIcon, BriefcaseIcon, AcademicCapIcon, EnvelopeIcon, DocumentIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { ReactComponent as VKIcon } from '../icons/vk.svg';
import { ReactComponent as HelloIcon } from '../icons/hello.svg';
import { ReactComponent as GitHubIcon } from '../icons/github.svg';
import { ReactComponent as LeetCodeIcon } from '../icons/leetcode.svg';
import { ReactComponent as LogoIcon } from '../icons/logo.svg';
import { ReactComponent as DjangoIcon } from '../icons/django.svg';
import { ReactComponent as ReactIcon } from '../icons/react.svg';
import { ReactComponent as TelegramIcon } from '../icons/telegram.svg';
import { ReactComponent as WIPIcon } from '../icons/wip.svg';


const NamedIcon = ({ name, className }: { name: string, className?: string }) => {
    
    const icons: Record<string, JSX.Element> = {
        'vk': <VKIcon/>,
        'hello': <HelloIcon/>,
        'stats': <ChartBarIcon/>,
        'github': <GitHubIcon/>,
        'leetcode': <LeetCodeIcon/>,
        'info': <InformationCircleIcon/>,
        'logo': <LogoIcon/>,
        'django': <DjangoIcon/>,
        'react': <ReactIcon/>,
        'hire': <BriefcaseIcon/>,
        'education': <AcademicCapIcon/>,
        'telegram': <TelegramIcon/>,
        'email': <EnvelopeIcon/>,
        'wip': <WIPIcon/>,
        'document': <DocumentIcon/>,
        'day': <SunIcon/>,
        'night': <MoonIcon/>,
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

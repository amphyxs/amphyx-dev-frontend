import axios, { AxiosResponse } from 'axios';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import NamedIcon from '../components/NamedIcon';
import TitledCard from '../components/TitledCard';


const Main = () => {

    type ContactLinkResponse = {
        'id': number,
        'name': string,
        'url': string,
        'icon_name': string,
    }

    type ContactLink = {
        'id': number,
        'name': string,
        'url': string,
        'icon': string,
    }

    const [contactLinks, setContactLinks] = useState([] as Array<ContactLink>);

    const API_URL = process.env.REACT_APP_API_URL;

    const fetchContactLinks = () => {
        axios.get(`${API_URL}/api/personal-info/contact-links/`)
            .then((response: AxiosResponse<Array<ContactLinkResponse>, ContactLink>) => {
                setContactLinks(response.data.map((responseObject) => Object.create({
                    'id': responseObject.id,
                    'name': responseObject.name,
                    'url': responseObject.url,
                    'icon': responseObject.icon_name,
                }) as ContactLink))
            })
            .catch((error: Error) => alert(error.message));
    }

    useEffect(() => {
        fetchContactLinks();
    });

    return (
        <div className="flex flex-col gap-3 p-3 md:grid md:grid-cols-10">
            <TitledCard
                title='Hello!'
                icon='hello'
                colspan={8}
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni dicta quasi itaque esse labore minima sunt rerum hic ab autem, iste tempora nemo sequi quia quisquam velit distinctio tenetur!</p>
            </TitledCard>x
            <TitledCard
                colspan={2}
            >
                <div role="list" className="divide-y-2 divide-gray-300">
                    {
                        contactLinks.map(contactLink => (
                            <a href={contactLink.url} className="flex justify-between py-4 gap-x-6 hover:opacity-70">
                                <div className='flex gap-2'>
                                    <NamedIcon
                                        className='self-center w-4 h-4 text-slate-500 fill-slate-500'
                                        name={contactLink.icon}
                                    />
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{contactLink.name}</p>
                                </div>
                                <ArrowUpRightIcon className='self-center w-4 h-4' />
                            </a>
                        ))
                    }
                </div>
            </TitledCard>
            <TitledCard
                title='GitHub stats'
                icon='github'
                colspan={4}
            >
                <img src='https://github-readme-stats.vercel.app/api?username=amphyxs&hide_border=true&card_width=700&card_height=500&disable_animations=true' />
            </TitledCard>
            <TitledCard
                title='LeetCode stats'
                icon='leetcode'
                colspan={4}
            >
                <img src='https://leetcard.jacoblin.cool/amphyx?border=0&theme=light&show_rank=false&width=700' />
            </TitledCard>
            <TitledCard
                title='Current status'
                icon='info'
                colspan={2}
            >
                <p>Working at Mindskills</p>
                <h2>Hire me</h2>
                <div role="list" className="divide-y-2 divide-gray-300">
                    {
                        contactLinks.map(contactLink => (
                            <a href={contactLink.url} className="flex justify-between py-4 gap-x-6 hover:opacity-70">
                                <div className='flex gap-2'>
                                    <NamedIcon
                                        className='self-center w-4 h-4 text-slate-500 fill-slate-500'
                                        name={contactLink.icon}
                                    />
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{contactLink.name}</p>
                                </div>
                                <ArrowUpRightIcon className='self-center w-4 h-4' />
                            </a>
                        ))
                    }
                </div>
            </TitledCard>
        </div>
    );
}

export default Main;

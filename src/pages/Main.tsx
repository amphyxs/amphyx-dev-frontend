import axios, { AxiosResponse } from 'axios';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import NamedIcon from '../components/NamedIcon';
import TitledCard from '../components/TitledCard';
import IconedTitle from '../components/IconedTitle';


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
    const [hireLinks, setHireLinks] = useState([] as Array<ContactLink>);

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
            .catch((error: Error) => console.error(error.message));
    }

    const fetchHireLinks = () => {
        axios.get(`${API_URL}/api/personal-info/hire-links/`)
            .then((response: AxiosResponse<Array<ContactLinkResponse>, ContactLink>) => {
                setHireLinks(response.data.map((responseObject) => Object.create({
                    'id': responseObject.id,
                    'name': responseObject.name,
                    'url': responseObject.url,
                    'icon': responseObject.icon_name,
                }) as ContactLink))
            })
            .catch((error: Error) => console.error(error.message));
    }

    useEffect(() => {
        fetchContactLinks();
        fetchHireLinks();
    }, [])

    return (
        <div className='grid grid-cols-10 py-12 lg:px-3 lg:gap-3 xl:gap-5 2xl:gap-10 xl:px-4 2xl:px-16 max-lg:flex max-lg:flex-col max-lg:px-20 max-sm:px-5 max-sm:py-5'>
            <div className='col-span-2'></div>
            <div className="flex flex-col col-span-6 gap-6">
                <TitledCard
                    className='col-span-6'
                    title='Hello!'
                    icon='hello'
                >
                    <p>I am Kirill Sandow — 19 y.o. Full-Stack dev from Saint-Petersurg, Russia.</p>
                    <h2 className='text-xl'>My main stack:</h2>
                    <div
                        className='flex flex-row justify-around mt-5'
                    >
                        <IconedTitle
                            text='Django + DRF'
                            icon='django'
                        />
                        <IconedTitle
                            text='React'
                            icon='react'
                        />
                    </div>
                    <hr className='my-2'/>
                    <p>I am opened to collaboration. Also, you can offer me a job.</p>
                </TitledCard>
                <TitledCard
                    className='col-span-6'
                    title='GitHub stats'
                    icon='github'
                >
                    <img src='https://github-readme-stats.vercel.app/api?username=amphyxs&hide_border=true&card_width=700&card_height=500&disable_animations=true' />
                </TitledCard>
                <TitledCard
                    className='col-span-6'
                    title='LeetCode stats'
                    icon='leetcode'
                >
                    <img src='https://leetcard.jacoblin.cool/amphyx?border=0&theme=light&show_rank=false&width=700' />
                </TitledCard>
            </div>
            <div className='flex flex-col col-span-2 gap-6 max-lg:mt-6'>
                <TitledCard
                    className='col-span-2'
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
                    className='col-span-2'
                    title='Current status'
                    icon='info'
                >
                    <IconedTitle
                        text='Working at Mindskills'
                        icon='hire'
                        textClassName='text-md'
                        iconClassName='w-7 h-7 mr-2'
                        />
                    <IconedTitle
                        text={`Studying at ITMO Software Engineering '26`}
                        icon='education'
                        textClassName='text-md'
                        iconClassName='w-7 h-7 mr-2'
                    />
                </TitledCard>
                <TitledCard
                    className='col-span-2'
                    title='Hire me'
                    icon='hire'
                >
                        <div role="list" className="divide-y-2 divide-gray-300">
                            {
                                hireLinks.map(contactLink => (
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
        </div>
    );
}

export default Main;

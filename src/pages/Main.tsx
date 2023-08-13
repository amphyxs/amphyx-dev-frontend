import axios, { AxiosResponse } from 'axios';
import { HandRaisedIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import NamedIcon from '../components/NamedIcon';


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
        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-4">
            <div className="col-span-3 p-6 bg-white shadow-lg rounded-xl">
                <div className="flex mb-5">
                    <HandRaisedIcon className='inline mr-2 w-9 h-9' />
                    <h1 className='text-3xl'>Hello!</h1>
                </div>
                <p className="text-slate-950">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates inventore architecto obcaecati fugiat, est eligendi, nihil doloribus fuga, perferendis asperiores officia voluptatum dignissimos quaerat sit quis assumenda laudantium nesciunt labore!
                </p>
                <p className="text-slate-950">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates inventore architecto obcaecati fugiat, est eligendi, nihil doloribus fuga, perferendis asperiores officia voluptatum dignissimos quaerat sit quis assumenda laudantium nesciunt labore!
                </p>
                <p className="text-slate-950">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates inventore architecto obcaecati fugiat, est eligendi, nihil doloribus fuga, perferendis asperiores officia voluptatum dignissimos quaerat sit quis assumenda laudantium nesciunt labore!
                </p>
            </div>
            <div className="col-span-1 p-6 bg-white shadow-lg rounded-xl">
                <div role="list" className="divide-y-2 divide-gray-300">
                    {contactLinks.map(contactLink => (
                        <a href={contactLink.url} className="flex justify-between py-4 gap-x-6 hover:opacity-70">
                            <div className='flex gap-2'>
                                <NamedIcon
                                    className='self-center w-4 h-4 text-slate-500 fill-slate-500'
                                    name={contactLink.icon}
                                />
                                <p className="text-sm font-semibold leading-6 text-gray-900">{contactLink.name}</p>
                            </div>
                            <ArrowUpRightIcon className='self-center w-4 h-4'/>
                        </a>
                    ))}
                </div>
            </div>
            <div className="col-span-3 p-6 bg-white shadow-lg rounded-xl">
                <p className="text-slate-950">Test</p>
            </div>
            <div className="col-span-1 p-6 bg-white shadow-lg rounded-xl">
                <p className="text-slate-950">Test</p>
            </div>
        </div>
    );
}

export default Main;

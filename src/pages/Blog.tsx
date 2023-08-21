import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import TitledCard from "../components/TitledCard";
import IconedTitle from "../components/IconedTitle";
import Container from "../components/Container";


const Blog = () => {

    const API_URL = process.env.REACT_APP_API_URL;

    type Post = {
        'id': number,
        'title': string,
        'createdAt': string,
        'updatedAt': string,
    }

    type PostResponse = {
        'id': number,
        'title': string,
        'created_at': string,
        'updated_at': string,
    }

    const [posts, setPosts] = useState([] as Array<Post>);

    const fetchPosts = () => {
        axios
            .get(`${API_URL}/api/blog/posts/`)
            .then((response: AxiosResponse<Array<PostResponse>, Post>) => {
                setPosts(response.data.map((responseObject) => Object.create({
                    'id': responseObject.id,
                    'title': responseObject.title,
                    'createdAt': responseObject.created_at,
                    'updatedAt': responseObject.updated_at,
                }) as Post))
            })
            .catch((error: Error) => console.error(error.message));
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <Container>
            <div className='col-span-2'></div>
            <div className="flex flex-col col-span-6 gap-6">
                {
                    posts.map(post => (
                        <TitledCard
                            className='hover:opacity-80 hover:cursor-pointer'
                            title={post.title}
                        >
                            <IconedTitle
                                text={post.createdAt}
                                icon="calendar"
                                textClassName="font-sm"
                                iconClassName="h-5 w-5 mr-2"
                            />
                        </TitledCard>
                    ))
                }
            </div>
            <div className='col-span-2'></div>
        </Container>
    );
}

export default Blog;

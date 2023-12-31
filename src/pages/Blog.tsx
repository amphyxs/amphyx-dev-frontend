import { useEffect, useState } from "react";
import TitledCard from "../components/TitledCard";
import IconedTitle from "../components/IconedTitle";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import { Post, getBlogPosts } from "../services/Blog";
import WIPMessage from "../components/WIPMessage";


const Blog = () => {

    const [posts, setPosts] = useState([] as Array<Post>);
    const navigate = useNavigate();

    const fetchPosts = () => {
        getBlogPosts(setPosts);
    }

    const openPost = (postSlug: string) => {
        navigate(`/blog/${postSlug}`);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <Container>
            <div className='col-span-2'></div>
            <div className="flex flex-col col-span-6 gap-6">
                {
                    posts.length ? posts.map(post => (
                        <TitledCard
                            className='pb-3 hover:opacity-80 hover:cursor-pointer'
                            title={post.title}
                            onClick={() => openPost(post.slug)}
                            key={post.id}
                        >
                            <div className="flex flex-row justify-between">
                                <IconedTitle
                                    text={post.createdAt}
                                    icon="calendar"
                                    textClassName="font-sm"
                                    iconClassName="h-5 w-5 mr-2"
                                    className="mb-0"
                                />
                                <div className="flex flex-row gap-5">
                                    {
                                        post.tags.map(tag => (
                                            <p>{tag}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </TitledCard>
                    )) : (
                        <WIPMessage
                            icon='not-found'
                            text="No posts yet"
                        />
                    )
                }
            </div>
            <div className='col-span-2'></div>
        </Container>
    );
}

export default Blog;

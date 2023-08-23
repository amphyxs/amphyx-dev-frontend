import { useEffect, useState } from "react";
import TitledCard from "../components/TitledCard";
import IconedTitle from "../components/IconedTitle";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import { Post, getBlogPosts } from "../services/Blog";


const Blog = () => {

    const [posts, setPosts] = useState([] as Array<Post>);
    const navigate = useNavigate();

    const fetchPosts = () => {
        getBlogPosts(setPosts);
    }

    const openPost = (postId: number) => {
        navigate(`/blog/${postId}`);
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
                            onClick={() => openPost(post.id)}
                            key={post.id}
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

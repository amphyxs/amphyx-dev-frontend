import { useLoaderData } from "react-router-dom";
import Container from "../components/Container"
import { FullPost } from "../services/Blog";


const BlogPostView = () => {

    const post = useLoaderData() as FullPost;
    
    return (
        <Container>
            <div className='col-span-2'></div>
            <div className="col-span-6">
                <div className="mb-10">
                    <h1 className="text-5xl dark:text-slate-200">{post.title}</h1>
                </div>
                <div className="dark:text-slate-200">
                    <p>{post.content}</p>
                </div>
            </div>
            <div className='col-span-2'></div>
        </Container>
    );
}

export default BlogPostView;

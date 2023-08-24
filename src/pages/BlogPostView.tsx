import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm'

import Container from "../components/Container"
import { FullPost } from "../services/Blog";
import { ThemeContext } from "../contexts/ThemeContext";
import { Theme } from "../services/Common";
import WIPMessage from "../components/WIPMessage";


const BlogPostView = () => {

    const post = useLoaderData() as FullPost;
    const theme = useContext(ThemeContext).theme;

    return post ? (
            <Container>
                <div className='col-span-2'></div>
                <div className="col-span-6">
                    <div className="mb-10">
                        <h1 className="text-5xl dark:text-slate-200">{post.title}</h1>
                    </div>
                    <div className="dark:text-slate-200">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            {...props}
                                            className='my-5 rounded-xl'
                                            children={String(children).replace(/\n$/, '')}
                                            style={theme === Theme.Dark ? atomOneDark : atomOneLight}
                                            language='javascript'
                                            PreTag="div"
                                        />
                                    ) : (
                                        <code {...props} className='dark:text-slate-500 text-cyan-700'>
                                            {children}
                                        </code>
                                    )
                                },
                                h1({ children, ...props }) {
                                    return (
                                        <h1 {...props} className='my-5 text-5xl border-b-2'>{children}</h1>
                                    )
                                },
                                h2({ children, ...props }) {
                                    return (
                                        <h2 {...props} className='my-2 text-4xl'>{children}</h2>
                                    )
                                },
                                h3({ children, ...props }) {
                                    return (
                                        <h3 {...props} className='my-2 text-3xl'>{children}</h3>
                                    )
                                },
                                h4({ children, ...props }) {
                                    return (
                                        <h3 {...props} className='my-2 text-2xl'>{children}</h3>
                                    )
                                },
                                h5({ children, ...props }) {
                                    return (
                                        <h3 {...props} className='my-2 text-xl'>{children}</h3>
                                    )
                                },
                                h6({ children, ...props }) {
                                    return (
                                        <h3 {...props} className='my-2 text-lg'>{children}</h3>
                                    )
                                },
                                ul({ children, ...props }) {
                                    return (
                                        <ul {...props} className='list-disc list-inside'>{children}</ul>
                                    )
                                },
                                ol({ children, ...props }) {
                                    return (
                                        <ol {...props} className='list-decimal list-inside'>{children}</ol>
                                    )
                                },
                                a({ children, ...props }) {
                                    return (
                                        <a {...props} className='underline dark:text-slate-500 hover:dark:text-slate-400 text-cyan-700 hover:text-cyan-500'>{children}</a>
                                    )
                                },
                                blockquote({ children, ...props }) {
                                    return (
                                        <blockquote {...props} className='pl-5 border-l-2'>{children}</blockquote>
                                    )
                                },
                            }}
                            className='markdown-container'
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </div>
                <div className='col-span-2'></div>
            </Container>
        ) : (
            <Container>
                <WIPMessage
                    icon="not-found"
                    text='Not found'
                />
            </Container>
        );
}

export default BlogPostView;

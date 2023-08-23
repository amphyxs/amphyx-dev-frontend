import axios, { AxiosResponse } from "axios";
import { API_URL } from "./Common";

export type Post = {
    'id': number,
    'title': string,
    'createdAt': string,
    'updatedAt': string,
    'author': string,
}

export type PostResponse = {
    'id': number,
    'title': string,
    'created_at': string,
    'updated_at': string,
    'author': string,
}

export type FullPost = {
    'id': number,
    'title': string,
    'content': string,
    'createdAt': string,
    'updatedAt': string,
    'author': string,
}

export type FullPostResponse = {
    'id': number,
    'title': string,
    'content': string,
    'created_at': string,
    'updated_at': string,
    'author': string,
}

export const getBlogPosts = (callback: (posts: Array<Post>) => void) => {
    axios
        .get(`${API_URL}/api/blog/posts/`)
        .then((response: AxiosResponse<Array<PostResponse>>) => {
            callback(response.data.map((responseObject) => convertResponseToPost(responseObject)))
        })
        .catch((error: Error) => console.error(error.message));
}

export const getBlogPost = async (postId: string | number | undefined) => {
    const response = await (
        axios
        .get(`${API_URL}/api/blog/posts/${postId}/`)
    )
    return convertResponseToFullPost(response.data as FullPostResponse);
}

export const convertResponseToPost = (responseData: PostResponse) => {
    return Object.create({
        'id': responseData.id,
        'title': responseData.title,
        'createdAt': responseData.created_at,
        'updatedAt': responseData.updated_at,
        'author': responseData.author,
    }) as Post;
}

export const convertResponseToFullPost = (responseData: FullPostResponse) => {
    return Object.create({
        'id': responseData.id,
        'title': responseData.title,
        'content': responseData.content,
        'createdAt': responseData.created_at,
        'updatedAt': responseData.updated_at,
        'author': responseData.author,
    }) as FullPost;
}

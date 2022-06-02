import { useEffect, useState } from "react"
import { posts } from "../data";
import { Post } from "../data/interfaces"

export const useGetPost = (id: number) => {
    const [post, setPost] = useState<Post>();

    // GET request would go here

    useEffect(() => {
        refetch();
    }, [id])

    const refetch = () => {
        setPost(posts.find((p) => p.id === id));
    }

    return {post, refetch}
}

export const useGetPosts = () => {
    const [data, setPosts] = useState<Post[]>();

    // GET request would go here

    useEffect(() => {
        refetch();
    }, [])

    const refetch = () => {
        setPosts(posts);
    }

    return {data, refetch}
}


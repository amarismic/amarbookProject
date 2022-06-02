import { posts } from "../data";
import { Comment, Post } from "../data/interfaces";

export const useAddNewPost = () => {
    // POST request would go here
    const mutate = (post: Post) => {
    posts.push(post);
    }

    return {mutate};
}

export const useAddComment = () => {
    // PUT request would go here
    const mutate = (postID: number, comment: Comment) => {
        posts.find((p) => p.id === postID)?.comments?.push(comment);
    }

    return {mutate}
}

export const useLike = () => {
    // PUT request would go here
    const mutate = (postID: number) => {
        const post = posts.find((p) => p.id === postID);
        if (post) {
        const num = post?.numOfLikes + 1;
        post.numOfLikes = num;
        const postIndex = posts.findIndex((p) => p.id === postID);
        posts[postIndex] = post;
        }
    }

    return {mutate}
}
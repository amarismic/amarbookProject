export interface User {
    firstName: string;
    lastName: string;
    username: string;
}

export interface Comment {
    commentatorUsername: string;
    comment: string;
    numOfLikes: number;
}

export interface Post {
    title: string;
    image: string;
    comments: Comment[];
}
export interface User {
    firstName: string;
    lastName: string;
    username: string;
    id: number;
}

export interface Comment {
    commentatorUsername: string;
    comment: string;
}

export interface Post {
    title: string;
    content: string;
    authorUsername: string;
    image: string;
    comments?: Comment[];
    numOfLikes: number;
    id: number;
}
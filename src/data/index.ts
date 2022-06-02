import { Post, User } from "./interfaces";

export const Users: User[] = [
    {firstName: "Amar", lastName: "Ismic", username: "amarismic", id: 4422}
]

export const posts: Post[] = [
    {
        title: "Hell yes, look at this",
        content: "Very nice",
        authorUsername: "amarismic",
        image: "https://images.unsplash.com/photo-1653427472957-b3b3f313d719?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940", 
        comments: [{comment: "WOWzers", commentatorUsername: "amarismic"}],
        numOfLikes: 1,
        id: 1
    },
    {
        title: "Hell yes, look at this",
        content: "Very nice",
        authorUsername: "amarismic",
        image: "https://images.unsplash.com/photo-1653427472957-b3b3f313d719?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940", 
        comments: [{comment: "WOWzers", commentatorUsername: "amarismic"}],
        numOfLikes: 1,
        id: 2
    },




]


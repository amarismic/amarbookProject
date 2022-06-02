import { Typography } from "antd"
import { useState } from "react";
import { posts } from "../../data";
import { Post } from "../../data/interfaces";
import { useGetPosts } from "../../utils/useQuery";
import PostComponent from "../Post/Post";
import PostDetailsModal from "../PostDetailsModal/PostDetailsModal";

const {Title} = Typography;
const Content = () => {
    const username = localStorage.getItem("username")
    const [selectedPost, setSelectedPost] = useState<Post>();
    const [postDetailsVisible, setPostDetailsVisible] = useState<boolean>(false);
    const {data} = useGetPosts();

    return <div className="flex flex-col w-full h-auto items-center sm:h-4/5 mt-2 ">
        <Title style={{fontSize: "18px"}}>{`Hello ${username}, here's what's new on AmarBook`}</Title>
        <div className="w-full h-full flex flex-col sm:flex-row sm:flex-wrap">
        {data?.map((post) => (
            <PostComponent post={post} setPost={setSelectedPost} setVisible={setPostDetailsVisible}/>
        ))}
        </div>
        <PostDetailsModal post={selectedPost} visible={postDetailsVisible} setVisible={setPostDetailsVisible}/>
    </div>
};

export default Content;

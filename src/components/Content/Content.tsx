import { Typography } from "antd"
import { posts } from "../../data";
import PostComponent from "../Post/Post";

const {Title} = Typography;
const Content = () => {
    const username = localStorage.getItem("username")
    return <div className="flex flex-col w-full h-auto items-center sm:h-4/5 mt-2 ">
        <Title style={{fontSize: "18px"}}>{`Hello ${username}, here's what's new on AmarBook`}</Title>
        <div className="w-full h-full flex flex-col sm:flex-row sm:flex-wrap">
        {posts.map((post) => (
            <PostComponent post={post}/>
        ))}
        </div>
    </div>
};

export default Content;

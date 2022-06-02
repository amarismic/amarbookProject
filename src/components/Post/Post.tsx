import { Card, Comment, Row, Typography } from "antd"
import { Post } from "../../data/interfaces"
import {LikeOutlined} from "@ant-design/icons"


interface PostProps {
    post: Post;
    setPost: (post: Post) => void;
    setVisible: (newValue: boolean) => void;
}
const {Text} = Typography;

const PostComponent = ({post, setPost, setVisible}: PostProps) => {

    const handleClick = () => {
        setPost(post);
        setVisible(true);
    }
    
    return <div className="sm:mr-5 flex justify-center"><Card hoverable style={{width: "250px", marginBottom: "10px"}} title={post.title} onClick={handleClick}>
    <img src={post.image} alt="img" style={{width: "150px"}}/>
    <Row><LikeOutlined />{post.numOfLikes}</Row>
    <Text style={{fontSize: "10px", marginTop: "20px"}}>{`${post.comments ? post.comments?.length : "0"} comments`}</Text>
</Card>
</div>
}

export default PostComponent;
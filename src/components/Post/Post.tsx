import { Card, Comment, Row } from "antd"
import { Post } from "../../data/interfaces"
import { LikeOutlined } from '@ant-design/icons';


interface PostProps {
    post: Post;
}
const PostComponent = ({post}: PostProps) => {
    return <div className="sm:mr-5 flex justify-center"><Card hoverable style={{width: "250px", marginBottom: "10px"}} title={post.title}>
    <img src={post.image} alt="img" style={{width: "150px"}}/>
    {post.comments.map((comment) => (
        <Comment content={comment.comment} author={comment.commentatorUsername} actions={[<Row><LikeOutlined />{comment.numOfLikes}</Row>]}/>
    ))}
</Card>
</div>
}

export default PostComponent;
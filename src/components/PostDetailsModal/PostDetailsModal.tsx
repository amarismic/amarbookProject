import { Col, Form, Input, Modal, Row, Typography, Comment, Button } from "antd"
import { Post } from "../../data/interfaces";
import {HeartFilled} from "@ant-design/icons"
import { useAddComment, useLike } from "../../utils/useMutation";
import { useForm } from "antd/lib/form/Form";

interface PDMProps {
    post?: Post;
    visible: boolean;
    setVisible: (newValue: boolean) => void;
}

const {Text} = Typography;

const PostDetailsModal = ({post, visible, setVisible}: PDMProps) => {
    const {mutate} = useLike();
    const {mutate: comment} = useAddComment();
    const [form] = useForm();

    const handleLike = () => {
        mutate(post?.id || 0)
    }
    return <Modal title={post?.title} onCancel={() => setVisible(false)} visible={visible}
    footer={[
        <Button onClick={handleLike}><HeartFilled /></Button>,
        
    ]}
    >
       <Row>
           <Col>
            <img src={post?.image} alt="post"/>
           </Col>
           <Col>
            <Text>{post?.content}</Text>
           </Col>
       </Row>
       <Row>
           <Form form={form} onFinish={(values) => comment(post?.id || 0, {...values, commentatorUsername: localStorage.getItem("username")})}>
               <Form.Item name="comment">
                   <Input placeholder="Add a comment"/>
               </Form.Item>
               <Button htmlType="submit">Comment</Button>
           </Form>
       </Row>
       <Row>
  {post?.comments?.map((comment) => (
        <Comment content={comment.comment} author={comment.commentatorUsername} />
    ))}
        </Row>
    </Modal>
}

export default PostDetailsModal;
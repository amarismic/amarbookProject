import { Form, Input, Modal } from "antd"
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import { useAddNewPost } from "../../utils/useMutation";

interface ANPMProps {
    visible: boolean;
    setVisible: (newValue: boolean) => void;
    onFinish: () => void;
}

const AddNewPostModal = ({visible, setVisible, onFinish}: ANPMProps) => {
    const {mutate} = useAddNewPost();
    const [form] = useForm();

    const handleSubmit = (values: any) => {
        mutate({...values});

    }
    return <Modal visible={visible} onOk={() => {
        setVisible(false);
        form.submit();
        onFinish();
    }
    } onCancel={() => setVisible(false)} title="Add new post">
        <Form onFinish={handleSubmit} form={form}>
            <Form.Item name="title" label="Title" rules={[{required: true, message: "Title is required"}]}>
                <Input />
            </Form.Item>
            <Form.Item name="content" label="Content" rules={[{required: true, message: "Title is required"}]}>
                <TextArea />
            </Form.Item>
            <Form.Item name="image" label="Image" rules={[{required: true, message: "Title is required"}]}>
                <Input />
            </Form.Item>
        </Form>
    </Modal>
}

export default AddNewPostModal;
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const [form] = Form.useForm();
    const router = useNavigate()

    return <div className="w-full h-screen flex items-center justify-center">
        <div className="w-2/5 h-2/5 bg-sky-200 p-12 items-center justify-center">
            <Form form={form} name="login" layout="vertical" onFinish={(values) => {
                localStorage.setItem("username", values.username);
                router("/");
                }}>
                <Form.Item name="username" label="Username" required rules={[{message: "Username is required"}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" required rules={[{message: "Password is required"}]}>
                    <Input type="password"/>
                </Form.Item>
                <Button onClick={() => form.submit()}>Login</Button>
            </Form>
        </div>
    </div>
}

export default LoginScreen;
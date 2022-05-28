import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({isSmall}: {isSmall?: boolean;}) => {
    const router = useNavigate()

    return <Button onClick={() => {
        localStorage.removeItem("username");
        router("/login");
    }}
    size={isSmall ? "small" : undefined}
    >Logout</Button>
}

export default LogoutButton;
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element}: {element: JSX.Element}) => {
    const username = localStorage.getItem("username");
    if (username !== null) {
        return element;
    }
    return <Navigate to="/login"/>
};

export default ProtectedRoute;
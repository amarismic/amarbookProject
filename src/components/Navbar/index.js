import { Button } from "antd";
import logo from "../../assets/logo.png"
import LogoutButton from "../LogoutButton/LogoutButton";

const Navbar = () => {
    return <div className="w-full h-12 bg-blue-700 flex justify-around">
        <img src={logo} alt="logo" className="h-full"/>
        <div className="sm:hidden w-fit h-full flex justify-center items-center">
            <LogoutButton isSmall/>
        </div>
        </div>
}

export default Navbar;

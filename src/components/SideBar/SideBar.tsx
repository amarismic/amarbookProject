import { Button } from "antd";
import LogoutButton from "../LogoutButton/LogoutButton";

interface SideBarProps{
    handleNewPost : (newValue: boolean) => void;
}
const SideBar = ({handleNewPost}: SideBarProps) => {

    return <div className="flex flex-col w-1/5 h-96 mr-1 hidden border-2 border-red-800 sm:flex sm:flex-col p-10">
        <LogoutButton />
        <Button onClick={()=> handleNewPost(true)}>Add New Post</Button>
    </div>
}

export default SideBar;

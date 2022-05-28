import LogoutButton from "../LogoutButton/LogoutButton";

const SideBar = () => {

    return <div className="flex flex-col w-1/5 h-96 mr-1 hidden border-2 border-red-800 sm:flex sm:flex-col p-10">
        <LogoutButton />
    </div>
}

export default SideBar;

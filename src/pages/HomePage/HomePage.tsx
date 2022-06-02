import 'antd/dist/antd.css';
import Navbar from "../../components/Navbar";
import Content from "../../components/Content/Content";
import SideBar from "../../components/SideBar/SideBar";
import AddNewPostModal from "../../components/AddNewPostModal/AddNewPostModal";
import { useState } from "react";
import { useGetPosts } from '../../utils/useQuery';

const HomePage = () => {
    const [newPostModalVisible, setNewPostModalVisible] = useState<boolean>(false);
    const {refetch} = useGetPosts();
    // after adding a new post data is not refreshed, in real project that would be solved with refetch but I cannot get it to work here
    return <div className="w-full h-full">
        <Navbar />
        <div className="w-full h-fit flex overflow-y-auto">
            <SideBar handleNewPost={setNewPostModalVisible}/>
            <Content />
        </div>
        <AddNewPostModal visible={newPostModalVisible} setVisible={setNewPostModalVisible} onFinish={refetch}/>

    </div>
}

export default HomePage;
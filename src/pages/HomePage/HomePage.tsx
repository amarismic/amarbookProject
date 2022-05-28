import {  Col, Layout, Row, Typography } from "antd";
import 'antd/dist/antd.css';
import Navbar from "../../components/Navbar";
import Content from "../../components/Content/Content";
import SideBar from "../../components/SideBar/SideBar";
import { Header, Content as AntContent } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";

const HomePage = () => {
    return <div className="w-full h-full">
        <Navbar />
        <div className="w-full h-fit flex overflow-y-auto">
            <SideBar />
            <Content />
        </div>
    </div>
}

export default HomePage;

  // return <Row style={{width: "100vw", height: "100vh"}}>
    //     <Col style={{width: "100%", height: "100%"}}>
    //         <Navbar />
    //         <Row style={{width: "100%", height: "calc(100vh - 70px)"}}>
    //             <SideBar />
    //             <Content />
    //         </Row>
    //     </Col>
    // </Row>
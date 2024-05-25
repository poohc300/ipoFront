import React from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";

const Home = () => {
    return (
        <div id='home'>
            <div id="header">
                <Header />

            </div>
            <div id="sidebar">
                <SideBar />

            </div>
        </div>
    )
}
export default Home
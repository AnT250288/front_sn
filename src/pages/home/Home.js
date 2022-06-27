import React from "react";
import "./Home.css"
import Profile from "../../component/profile/Profile";
import Post from "../../component/Post/Post";

const Home = () => {
    return (
        <div className={"Home"}>
            <Profile/>
            <Post/>
            <div className={"rightSide"}>RightSide</div>
        </div>
    )
}


export default Home
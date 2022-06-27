import "./RightSide.css"
import Home from "../../img/home.png"
import Notification from "../../img/noti.png"
import Comment from "../../img/comment.png"
import {UilSetting} from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import {useState} from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import ShareModal from "../ShareModal/ShareModal";


const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false)
    return (
        <div className={"RightSide"}>
            <div className={"navIcon"}>
                <img src={Home} alt={"homeIcon"}/>
                <UilSetting/>
                <img src={Notification} alt={"notifyIcon"}/>
                <img src={Comment} alt={"commentIcon"}/>
            </div>

            <TrendCard/>

            <button className={"button r_button"} onClick={() => setModalOpened(true)}>
                Share
            </button>
            <ShareModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}/>
        </div>
    )
}

export default RightSide
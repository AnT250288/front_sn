import "./Profile.css"
import ProfileLeft from "../../component/ProfileLeft/ProfileLeft";
import PostSide from "../../component/PostSide/PostSide";
import ProfileCard from "../../component/profileCard/ProfileCard";
import RightSide from "../../component/RightSide/RightSide";

const Profile = () => {
    return (
        <div className={"Profile"}>
            <ProfileLeft/>
            <div className={"ProfileCenter"}>
                <ProfileCard/>
                <PostSide/>
            </div>

            <RightSide/>
        </div>
    )
}

export default Profile
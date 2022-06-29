import Search from "../Seach/Search";
import ProfileCard from "../profileCard/ProfileCard";
import "./ProfileSide.css"
import FollowersCard from "../FollowersCard/FollowersCard";


const ProfileSide = () => {
    return (
        <div className={"ProfileSide"}>
            <Search/>
            <ProfileCard location={"homepage"}/>
            <FollowersCard/>
        </div>
    )
}

export default ProfileSide

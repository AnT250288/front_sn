import Search from "../Seach/Search";
import ProfileCard from "../profileCard/ProfileCard";
import "./Profile.css"
import FollowersCard from "../followersCard/FollowersCard";


const Profile = () => {
    return (
        <div className={"Profile"}>
            <Search/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
    )
}

export default Profile

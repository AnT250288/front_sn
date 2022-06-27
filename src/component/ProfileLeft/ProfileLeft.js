import Search from "../Seach/Search";
import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";


const ProfileLeft = () => {
    return (
        <div className={"ProfileSide"}>
            <Search/>
            <InfoCard/>
            <FollowersCard/>
        </div>
    )
}

export default ProfileLeft
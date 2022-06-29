import './ProfileCard.css'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileCard = ({location}) => {
    const {user} = useSelector((state) => state.authReducer.authData);
    const posts = useSelector((state) => state.postReducer.posts)
    const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className={'ProfileCard'}>
            <div className={'ProfileImages'}>
                <img src={
                    user.coverPicture
                        ? serverPublicFolder + user.coverPicture
                        : serverPublicFolder + "defaultCover.jpg"
                } alt="CoverImage"/>
                <img src={
                    user.profilePicture
                        ? serverPublicFolder + user.profilePicture
                        : serverPublicFolder + "defaultProfile.jpg"
                } alt={'profileImage'}/>
            </div>

            <div className={'ProfileName'}>
                <span>{user.firstname} {user.lastname}</span>
                <span>{user.worksAt ? user.worksAt : "Open to work"}</span>
            </div>

            <div className={'followStatus'}>
                <hr/>
                <div>
                    <div className={'follow'}>
                        <span>{user.following.length}</span>
                        <span>Following</span>
                    </div>
                    <div className={'vl'}></div>

                    <div className={'follow'}>
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                    {location === "profilePage" && (
                        <>
                            <div className={"vl"}>

                            </div>
                            <div className={"follow"}>
                                <span>{posts.filter((post) => post.userId === user._id).length}</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr/>
            </div>

            {location === "profilePage"
                ? ''
                : <span>
            <Link style={{textDecoration: "none", color: "inherit"}} to={`/profile/${user._id}`}>
                My profile
                </Link>
            </span>
            }

        </div>
    )
}

export default ProfileCard
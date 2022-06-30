import {useDispatch, useSelector} from "react-redux";
import {followUser, unFollowUser} from "../../actions/UserActions";
import {useState} from "react";


const User = ({person}) => {
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.authReducer.authData)
    const [following, setFollowing] = useState(
        person.followers.includes(user._id)
    )
    const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const followHandler = () => {
        following
            ? dispatch(unFollowUser(person._id, user))
            : dispatch(followUser(person._id, user))

        setFollowing((prev) => !prev)
    }
    return (
        <div className={'follower'}>
            <div>
                <div>
                    <img src={person.profilePicture
                        ? serverPublicFolder + person.profilePicture
                        : serverPublicFolder + "defaultProfile.jpg"
                    } alt={'followersAvatar'} className={'followerImg'}/>
                </div>
                <div className={'name'}>
                    <span>{person.firstname}</span>
                    <span>{person.username}</span>
                </div>
            </div>
            <button
                className={following ? 'button fc_button UnfollowButton' : 'button fc_button'}
                onClick={followHandler}>{following ? "UnFollow" : "Follow"}</button>
        </div>
    )
}

export default User
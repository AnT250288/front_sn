import './FollowerCard.css'

import {Followers} from "../../data/followersData";

const FollowersCard = () => {

    return (
        <div className={'FollowersCard'}>
            <h3>Who is following you</h3>

            {Followers.map((follower, id) => {
                return (
                    <div className={'follower'}>
                        <div>
                            <div>
                                <img src={follower.img} alt={'followersAvatar'} className={'followerImg'}/>
                            </div>
                            <div className={'name'}>
                                <span>{follower.name}</span>
                                <span>{follower.username}</span>
                            </div>
                        </div>
                        <button className={'button fc_button'}>Follow</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard
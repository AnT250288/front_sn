import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    const ProfilePage = true


    return (
        <div className={'ProfileCard'}>
            <div className={'ProfileImages'}>
                <img src={Cover} alt={'coverPicture'}/>
                <img src={Profile} alt={'profileImage'}/>
            </div>

            <div className={'ProfileName'}>
                <span>Zendaya</span>
                <span>Senior UI/UX Designer</span>
            </div>

            <div className={'followStatus'}>
                <hr/>
                <div>
                    <div className={'follow'}>
                        <span>1000</span>
                        <span>Followings</span>
                    </div>
                    <div className={'vl'}></div>

                    <div className={'follow'}>
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                    {ProfilePage && (
                        <>
                            <div className={"vl"}>

                            </div>
                            <div className={"follow"}>
                                <span>3</span>
                                <span>Posts</span>
                            </div>

                        </>
                    )}
                </div>
                <hr/>
            </div>

            {ProfilePage ? '' : <span>My profile</span>}

        </div>
    )
}

export default ProfileCard
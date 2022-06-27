import {useState} from "react";
import "./InfoCard.css"
import {UilPen} from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";


const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

    return (
        <div className={"InfoCard"}>
            <div className={"infoHead"}>
                <h4>Your info</h4>
                <div>
                    <UilPen
                        width={'2rem'}
                        height={'1.2rem'}
                        onClick={() => setModalOpened(true)}/>
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}/>
                </div>
            </div>


            <div className={"info"}>
                <span>
                    <b>Status </b>
                </span>
                <span>In relationship</span>
            </div>

            <div className={"info"}>
                <span>
                    <b>Lives in </b>
                </span>
                <span>Minsk</span>
            </div>

            <div className={"info"}>
                <span>
                    <b>Works at </b>
                </span>
                <span>Vironit</span>
            </div>

            <button className={"button logout_btn"}>LogOut</button>


        </div>
    )
}


export default InfoCard
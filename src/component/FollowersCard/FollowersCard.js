import './FollowerCard.css'
import User from "../User/User";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getAllUsers} from "../../api/UserRequest";

const FollowersCard = () => {
    const {user} = useSelector((state) => state.authReducer.authData)
    const [persons, setPersons] = useState([])

    useEffect(() => {
        const fetchPersons = async () => {
            const {data} = await getAllUsers();
            setPersons(data);
        };
        fetchPersons();
    }, []);

    return (
        <div className={'FollowersCard'}>
            <h3>People you can know</h3>

            {persons.map((person, id) => {
                if (person._id !== user._id) {
                    return (
                        <User person={person} key={id}/>
                    )
                }

            })}
        </div>
    )
}

export default FollowersCard
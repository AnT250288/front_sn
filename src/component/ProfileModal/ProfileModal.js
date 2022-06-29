import {Modal, useMantineTheme} from '@mantine/core';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {uploadImage} from "../../actions/UploadAction";
import {updateUser} from "../../actions/UserActions";

function ProfileModal({modalOpened, setModalOpened, data}) {
    const theme = useMantineTheme();
    const dispatch = useDispatch()
    const params = useParams()

    const {password, ...other} = data
    const [formData, setFormData] = useState(other)
    const [profileImage, setProfileImage] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    const {user} = useSelector((state) => state.authReducer.authData)

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let UserData = formData;
        if (profileImage) {
            const data = new FormData();
            const fileName = Date.now() + profileImage.name;
            data.append("name", fileName);
            data.append("file", profileImage);
            UserData.profilePicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }
        if (coverImage) {
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append("name", fileName);
            data.append("file", coverImage);
            UserData.coverPicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }
        dispatch(updateUser(params.id, UserData));
        setModalOpened(false);
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            event.target.name === "profileImage"
                ? setProfileImage(img)
                : setCoverImage(img);
        }
    };


    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size={"55%"}
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className={"infoForm"}>
                <h3>Your info</h3>

                <div>
                    <input
                        type={"text"}
                        className={"infoInput"}
                        name={"firstname"}
                        placeholder={"First Name"}
                        onChange={changeHandler}
                        value={formData.firstname}
                    />
                    <input
                        type={"text"}
                        className={"infoInput"}
                        name={"lastname"}
                        placeholder={"Last Name"}
                        onChange={changeHandler}
                        value={formData.lastname}
                    />
                </div>

                <div>
                    <input
                        type={"text"}
                        className={"infoInput"}
                        name={"worksAt"}
                        placeholder={"Works at"}
                        onChange={changeHandler}
                        value={formData.worksAt}
                    />
                </div>

                <div>
                    <input
                        type={"text"}
                        className={"infoInput"}
                        name={"livesIn"}
                        placeholder={"City"}
                        onChange={changeHandler}
                        value={formData.livesIn}
                    />
                    <input
                        type={"text"}
                        className={"infoInput"}
                        name={"country"}
                        placeholder={"Country"}
                        onChange={changeHandler}
                        value={formData.country}
                    />
                </div>

                <div>
                    <input
                        type={"text"}
                        className={"infoInput"}
                        name={"relationship"}
                        placeholder={"Relashionship Status"}
                        onChange={changeHandler}
                        value={formData.relationship}
                    />
                </div>

                <div>
                    Profile Image
                    <input type={"file"} name={"profileImage"} onChange={onImageChange}/>
                    Cover Image
                    <input type={"file"} name={"coverImage"} onChange={onImageChange}/>
                </div>

                <button className={"button infoButton"} onClick={submitHandler}>Update</button>

            </form>
        </Modal>
    );
}

export default ProfileModal
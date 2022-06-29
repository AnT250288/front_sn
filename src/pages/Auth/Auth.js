import "./Auth.css"
import Logo from "../../logo.svg"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logIn, signUp} from "../../actions/AuthAction";
import {useNavigate} from "react-router-dom";

const Auth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loading = useSelector((state) => state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(true)
    const [data, setData] = useState({
        firstname: "", lastname: "", username: "", password: "", confirmpass: ""
    })

    const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const [confirmPass, setConfirmPass] = useState(true)

    const submitHandler = (e) => {
        setConfirmPass(true);
        e.preventDefault();
        if (isSignUp) {
            data.password === data.confirmpass
                ? dispatch(signUp(data, navigate))
                : setConfirmPass(false);
        } else {
            dispatch(logIn(data, navigate));
        }
    };

    const resetForm = () => {
        setConfirmPass(true)
        setData({firstname: "", lastname: "", username: "", password: "", confirmpass: ""})
    }

    return (
        <div className={"Auth"}>
            <div className={"a_left"}>
                <img src={Logo} alt={"logo"}/>
                <div className={"WebName"}>
                    <h1>My Social</h1>
                    <h6>It's just a my project</h6>
                </div>
            </div>
            <div className={"a_right"}>
                <form className={"infoForm authForm"} onSubmit={submitHandler}>
                    <h3>{isSignUp ? "Sign up" : "Log In"}</h3>


                    {isSignUp && (
                        <div>
                            <input type={"text"}
                                   placeholder={"First name"}
                                   className={"infoInput"}
                                   name={"firstname"}
                                   onChange={changeHandler}
                                   value={data.firstname}
                            />
                            <input type={"text"}
                                   placeholder={"Last name"}
                                   className={"infoInput"}
                                   name={"lastname"}
                                   onChange={changeHandler}
                                   value={data.lastname}
                            />
                        </div>
                    )}

                    <div>
                        <input type={"text"}
                               placeholder={"User name"}
                               className={"infoInput"}
                               name={"username"}
                               onChange={changeHandler}
                               value={data.username}
                        />
                    </div>

                    <div>
                        <input type={"password"}
                               placeholder={"Password"}
                               className={"infoInput"}
                               name={"password"}
                               onChange={changeHandler}
                               value={data.password}
                        />
                        {isSignUp &&
                            <input type={"password"}
                                   placeholder={"Confirm password"}
                                   className={"infoInput"}
                                   name={"confirmpass"}
                                   onChange={changeHandler}
                                   value={data.confirmpass}
                            />
                        }
                    </div>
                    <span style={{
                        display: confirmPass ? "none" : "block",
                        color: "red",
                        fontSize: "12px",
                        alignSelf: "flex-end"
                    }}>
                            * Password doesn't match
                        </span>
                    <div>
                        <span style={{fontSize: "12px", cursor: "pointer"}}
                              onClick={() => {
                                  setIsSignUp(!isSignUp)
                                  resetForm()
                              }}>
                            {isSignUp
                                ? "Already have an account? LogIn"
                                : "Don't have an account? Sign Up"
                            }
                        </span>
                    </div>
                    <button className={"button infoButton"} type={"submit"} disabled={loading}>
                        {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
                    </button>
                </form>
            </div>
        </div>
    )
}


function SignUp() {
    return (
        <div className={"a_right"}>
            <form className={"infoForm authForm"}>
                <h3>Sign Up</h3>

                <div>
                    <input type={"text"}
                           placeholder={"First name"}
                           className={"infoInput"}
                           name={"firstname"}
                    />
                    <input type={"text"}
                           placeholder={"Last name"}
                           className={"infoInput"}
                           name={"lastname"}
                    />
                </div>
                <div>
                    <input type={"text"}
                           placeholder={"User name"}
                           className={"infoInput"}
                           name={"username"}
                    />
                </div>

                <div>
                    <input type={"text"}
                           placeholder={"Password"}
                           className={"infoInput"}
                           name={"password"}
                    />

                    <input type={"text"}
                           placeholder={"Confirm password"}
                           className={"infoInput"}
                           name={"confirmpass"}
                    />
                </div>
                <div>
                    <span style={{fontSize: "12px"}}>Already have an account? LogIn</span>
                </div>
                <button className={"button infoButton"} type={"submit"}>Sign Up</button>
            </form>
        </div>
    )
}

export default Auth
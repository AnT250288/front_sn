import "./Auth.css"
import Logo from "../../img/logo.png"

const Auth = () => {
    return (
        <div className={"Auth"}>
            <div className={"a_left"}>
                <img src={Logo} alt={"logo"}/>
                <div className={"WebName"}>
                    <h1>My Social</h1>
                    <h6>It's just a my project</h6>
                </div>
            </div>

            <LogIn/>
        </div>
    )
}

function LogIn() {
    return (
        <div className={"a_right"}>
            <form className={"infoForm authForm"}>
                <h3>Log In</h3>

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
                </div>

                <div>
                    <span style={{fontSize: "12px"}}>
                        Don't have an account? Register
                     </span>
                    <button className={"button infoButton"}>LogIn</button>
                </div>
            </form>
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
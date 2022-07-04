import { Link } from "react-router-dom"
import "./auth.css"
import {useAuth} from "../../contexts"
import { useState } from "react";
import { loginRequest } from "../../requests/authRequests/loginRequest"

export const Login = ()=>{
    const { setIsAuthenticated, setToken, navigation, location } = useAuth();

    const [login, setLogin] = useState({ input: {}, error: "", visible: {password: false} });

    const [loading, setLoading] = useState(false);

    const loginCredentialsHandler = (e) => {
        const { name, value } = e.target;
        setLogin( {...login, input: { ...login.input, [name]: value} } )
        
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const { data } = await loginRequest(login.input);
            setLoading(false);

            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("token", data.encodedToken);
            setToken(data.encodedToken);

            setLogin({...login, input: { email: "", password: "" } });
            setIsAuthenticated(true);
            let from = location.state?.from?.pathname || '/';
            navigation(from, { replace: true });
        } catch (err) {
            setLoading(false);
            setLogin({ ...login, error: err.response.data.errors[0] });
        }
    };


    return (
        <div className="page-container">    
            { loading ? <h2>Loading...</h2> :
                <div className="card-component auth-card">
                <div className="card-content">
                    <h2 className="card-heading">Log In</h2>
                    <form className="UI-Interaction" onSubmit={handleLogin}>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" htmlhtmlFor="email-input">Email</label>
                            <input type="email" name="email" required onChange={loginCredentialsHandler} value={login.input.email || ""} placeholder="Enter your Email here"/>
                        </div>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" htmlhtmlFor="password-input">Password</label>
                            <div className="password-toggle">
                                <input type={`${login.visible.password ? "text" : "password"}`} name="password" value={login.input.password || ""} required onChange={loginCredentialsHandler} placeholder="Enter your Password here"/>
                                <i
                                    className={`fa-solid ${
                                        login.visible.password ? "fa-eye-slash" : "fa-eye"
                                    }`}
                                    onClick={() =>
                                        setLogin({
                                        ...login,
                                        visible: { password: !login.visible.password },
                                        })
                                    }
                                ></i>
                            </div>
                        </div>
                        <div className="input-label-pair input-checkbox remember-checkbox">

                            <label className="input-label"><input type="checkbox"/> Remember Me</label>
                            <a href="/" className="link-primary forgot-pwd"><span className="primary">Forgot Password?</span></a>
                          </div>
                          <button className="button button-primary" type="submit">Login</button>
                          <button className="button outline" type="submit" onClick={()=> {
                            setLogin({
                                ...login, input:{
                                    email: "adarshbalika@gmail.com", 
                                    password: "adarshbalika"
                                }
                            })
                            }
                          }>
                            Login as a Guest
                          </button>
                          <div className="card-action">
                              <span>Don't have an Account?</span>
                              <Link to={"/sign-up"} className="link">Signup</Link>
                          </div>
                        <div className="input-validation-error">{login.error}</div>
                    </form>
                    

                          
                          
                </div>
            </div>}
        </div>
    )
}
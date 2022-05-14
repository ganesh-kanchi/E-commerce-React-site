import { Link } from "react-router-dom"
import "./auth.css"

export const Login = ()=>{
    return (
        <div className="page-container">    
            <div className="card-component auth-card">
                <div className="card-content">
                    <h2 className="card-heading">Log In</h2>
                    <div className="UI-Interaction">
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" for="email-input">Email</label>
                            <input type="email" email="email-input" placeholder="Enter your Email here"/>
                        </div>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" for="password-input">Password</label>
                            <input type="password" name="password-input" placeholder="Enter your Password here"/>
                        </div>
                        <div className="input-label-pair input-checkbox remember-checkbox">

                            <label className="input-label"><input type="checkbox"/> Remember Me</label>
                            <a href="/" className="link-primary forgot-pwd"><span className="primary">Forgot Password?</span></a>
                          </div>
                          <button className="button button-primary">Login</button>
                          <button className="button outline">Login as a Guest</button>
                          <div className="card-action">
                              <span>Don't have an Account?</span>
                              <Link to={"/sign-up"} className="link">SignUp</Link>
                          </div>
                        <div className="input-validation-none"></div>
                </div>
                </div>
            </div>
        </div>
    )
}
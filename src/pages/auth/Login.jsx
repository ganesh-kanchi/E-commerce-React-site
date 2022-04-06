import { Link } from "react-router-dom"
import "./auth.css"

export const Login = ()=>{
    return (
        <div className="page-container">    
            <div className="card-component auth-card">
                <div className="card-content">
                    <h2 className="card-heading">Log In</h2>
                    <div class="UI-Interaction">
                        <div class="input input-label-pair input-basic">
                            <label class="input-label" for="email-input">Email</label>
                            <input type="email" email="email-input" placeholder="Enter your Email here"/>
                        </div>
                        <div class="input input-label-pair input-basic">
                            <label class="input-label" for="password-input">Password</label>
                            <input type="password" name="password-input" placeholder="Enter your Password here"/>
                        </div>
                        <div class="input-label-pair input-checkbox remember-checkbox">

                            <label class="input-label"><input type="checkbox"/> Remember Me</label>
                            <a href="/" class="link-primary forgot-pwd"><span class="primary">Forgot Password?</span></a>
                          </div>
                          <button class="button button-primary">Login</button>
                          <button class="button outline">Login as a Guest</button>
                          <div class="card-action">
                              <span>Don't have an Account?</span>
                              <Link to={"sign-up"} class="link">SignUp</Link>
                          </div>
                        <div class="input-validation-none"></div>
                </div>
                </div>
            </div>
        </div>
    )
}
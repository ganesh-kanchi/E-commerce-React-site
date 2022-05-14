import { Link } from "react-router-dom"
import "./auth.css"

export const SignUp = ()=>{
    return (
        <div className="div-container">
            <div className="card-component auth-card">
                <div className="card-content">
                    <h2 className="card-heading">Sign Up</h2>
                    <div className="UI-Interaction">
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" for="email-input">Email</label>
                            <input required type="email" name="email-input" placeholder="Enter your email here"/>
                        </div>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" for="name-input">First Name</label>
                            <input required type="text" name="name-input" placeholder="Enter your name here"/>
                        </div>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" for="last-name-input">Last Name</label>
                            <input required type="text" name="last-name-input" placeholder="Enter your last name here"/>
                        </div>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" for="password-input">Password</label>
                            <input required type="password" name="password-input" placeholder="Enter your password here"/>
                        </div>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" for="password-input">Confirm Password</label>
                            <input required type="password" name="password-input" placeholder="Enter your password again"/>
                        </div>
                        
                          <button className="button button-primary">Sign Up</button>
                          <div className="card-action">
                              <span>Have an account already?</span>
                              <Link to="/login" className="link">Login</Link>
                          </div>
                        <div className="input-validation-none"></div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
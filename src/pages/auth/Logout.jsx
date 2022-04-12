import { Link } from "react-router-dom"
import "./auth.css"

export const Logout = ()=>{
    return (
        <div className="page-container">
            <div className="card-component auth-card">
                <div className="success-icon">
                    <i class="fa-solid fa-check-circle"></i>
                </div>
                <div class="card-content heading-3">
                    You have successfully been logged out!
                </div>
                <Link to={"/"}>Get back to Home</Link>
            </div>
        </div>
    )
}
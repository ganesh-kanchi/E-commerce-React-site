import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="page-container error-page">
            <img src="/assets/error-image.svg" className="error-image" alt="404 error symbol" />
            <Link to="/" className="error-link">go to home</Link>
        </div>
    )
}


export { ErrorPage };
import { Link } from "react-router-dom"
import "./auth.css"
import { useState } from "react";
import { signupRequest } from "../../requests/authRequests/signupRequest";
import { useAuth } from "../../contexts";

export const SignUp = ()=>{
    const { setIsAuthenticated, setToken, navigate } = useAuth();

    const [signup, setSignup] = useState({
        input: {},
        passwordConfirmation: true,
        error: "",
        visible: { password: false, passwordConfirmation: false }
      });

      const [loading, setLoading] = useState(false);

      const signupCredentialsHandler = (e) => {
        const { name, value } = e.target;
        if (name === "password-confirmation") {
          setSignup({
            ...signup,
            input: { ...signup.input, [name]: value },
            passwordConfirmation: value === signup.input.password ? true : false,
          });
        } else {
          setSignup({ ...signup, input: { ...signup.input, [name]: value } });
        }
      };


      const signupHandler = async (e) => {
        e.preventDefault();
    
        try {
          setLoading(true);
          const { data } = await signupRequest(signup.input);
          setLoading(false);
    
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("token", data.encodedToken);
          setToken(data.encodedToken);
    
          setIsAuthenticated(true);
          setSignup({ ...signup, input: "" });
    
          navigate("/");
        } catch (err) {
          setLoading(false);
          setSignup({ ...signup, error: err.response.data.errors[0] });
        }
      };

    return (
        (loading ? <h2>Loading...</h2> : <div className="div-container">
            <div className="card-component auth-card">
                <div className="card-content">
                    <h2 className="card-heading">Sign Up</h2>
                    <form className="UI-Interaction" onSubmit={signupHandler}>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" htmlhtmlFor="email-input">Email</label>
                            <input required type="email" name="email-input" onChange={signupCredentialsHandler} placeholder="Enter your email here"/>
                        </div>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" htmlhtmlFor="name-input">First Name</label>
                            <input required type="text" name="name-input" onChange={signupCredentialsHandler} placeholder="Enter your name here"/>
                        </div>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" htmlhtmlFor="last-name-input">Last Name</label>
                            <input required type="text" name="last-name-input" onChange={signupCredentialsHandler} placeholder="Enter your last name here"/>
                        </div>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" htmlhtmlFor="password-input">Password</label>
                            <div className="password-toggle">
                                <input required type={signup.visible.password ? "text" : "password"} name="password-input" onChange={signupCredentialsHandler} placeholder="Enter your password here"/>
                                <i
                                    className={`fa-solid ${
                                        signup.visible.password ? "fa-eye-slash" : "fa-eye"
                                    }`}
                                    onClick={() =>
                                        setSignup({
                                        ...signup,
                                        visible: { ...signup.visible, password: !signup.visible.password },
                                        })
                                    }
                                ></i>
                            </div>
                        </div>
                        <div className="input input-label-pair input-basic">
                            <label className="input-label" htmlhtmlFor="password-input">Confirm Password</label>
                            <div className="password-toggle">
                                <input required type={signup.visible.passwordConfirmation ? "text" : "password"} name="password-confirmation" onChange={signupCredentialsHandler} placeholder="Enter your password again"/>
                                <i className={`fa-solid ${
                                        signup.visible.passwordConfirmation ? "fa-eye-slash" : "fa-eye"
                                        }`}
                                        onClick={() =>
                                            setSignup({
                                            ...signup,
                                            visible: { ...signup.visible, passwordConfirmation: !signup.visible.passwordConfirmation },
                                            })
                                        }
                                ></i>
                            </div>
                        </div>
                        
                          <button className="button button-primary" type="submit">Sign Up</button>
                          <div className="card-action">
                              <span>Have an account already?</span>
                              <Link to="/login" className="link">Login</Link>
                          </div>
                        <div className="input-validation-none"></div>
                    </form>
                
                </div>
            </div>
        </div>)
    )
}
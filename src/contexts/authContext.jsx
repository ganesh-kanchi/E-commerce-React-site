import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthenticationProvider = ({ children }) => {
    let location = useLocation();
    const navigation = useNavigate();

    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const [ isAuthenticated, setIsAuthenticated ] = useState(JSON.parse(localStorage.getItem("isAuthenticated")) || false)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, token, setToken, navigation, location }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthenticationProvider, useAuth };
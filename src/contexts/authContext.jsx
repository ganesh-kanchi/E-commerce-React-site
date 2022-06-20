import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthenticationProvider = ({ children }) => {

    const navigation = useNavigate();

    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const [ isAuthenticated, setIsAuthenticated ] = useState(JSON.parse(localStorage.getItem("isAuthenticated")) || false)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, token, setToken, navigation }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthenticationProvider, useAuth };
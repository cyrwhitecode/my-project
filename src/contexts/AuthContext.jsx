import { createContext, useEffect } from "react";
import { useState } from "react";


export const AuthContext = createContext();

export function AuthProvider ({children}) {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const isAuthenticated = !!token;

    useEffect(() => {
        const savedToken = localStorage.getItem("token");

        if (savedToken) {
            setToken(savedToken);
            setUser({email: "cyolan@gmail.com"});
        }
    }, [])

    const login = (email, password) => {
        if (email==="cyolan@gmail.com" && password==="Natsu7002") {
            const token = "fake-JWT-token-01";
            localStorage.setItem("token", JSON.stringify(token));

            setToken(token);
            setUser({email});
            console.log(token)
            return true;
        }

        return false;
    }

    const logout = () => {
        localStorage.removeItem("token");

        setToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                isAuthenticated
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

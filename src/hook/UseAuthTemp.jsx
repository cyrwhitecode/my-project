import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function useAuth () {

    const context = useContext(AuthContext);
    
    if (!context) {
        throw new Error("Context should be use within provider! ")
    }

    return context
}


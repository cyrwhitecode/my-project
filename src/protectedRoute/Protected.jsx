import { useAuth } from "../hook/UseAuthTemp.jsx"
import { Navigate } from "react-router-dom"

export const Protected = ({ children }) => {
    
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }
    return <div>{children}</div>
}
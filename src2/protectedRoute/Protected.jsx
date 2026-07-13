import { useAuth } from "../hook/useAuth"
import { Navigate } from "react-router-dom"

export const Protected = ({ children }) => {
    
    const { isAuthenticated, loading } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }
    return <div>{children}</div>
}
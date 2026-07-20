import { NavLink, useNavigate } from "react-router-dom"
import '../styles/links.css'
import { useAuth } from "../hook/useAuth";
import { useState } from "react";

export function Nav () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const navStyle = ({isActive}) => {
        return isActive? "isActive link": "isPending link";
    }

    const logOut = () => {
        logout();
        navigate('/');
    }

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }

    return (
        <div className="nav-bar-container">
            {isAuthenticated? (
                <div className="nav-bar0">
                    <div>
                        <h1 className="logo">CoffeeShop</h1>
                    </div>
                    <div className="nav-bar-1">
                        <NavLink to="/" className={navStyle}>Home</NavLink>
                        <NavLink to="/dashboard" className={navStyle}>Shop</NavLink>
                        <NavLink to="/categories" className={navStyle}>Categories</NavLink>
                        <NavLink to="/about" className={navStyle}>About</NavLink>
                        
                    </div>

                    <div className="nav-bar-mobile">
                        <button className="menu-btn" onClick={() => openMenu()}> {isMenuOpen? "X": "Menu"} </button>
                    
                        <div className={`nav-bar ${isMenuOpen? "menuAnimation": ""}`}>
                            <NavLink to="/" className={navStyle}>Home</NavLink>
                            <NavLink to="/dashboard" className={navStyle}>Shop</NavLink>
                            <NavLink to="/categories" className={navStyle}>Categories</NavLink>
                            <NavLink to="/about" className={navStyle}>About</NavLink>
                            <NavLink className="except" onClick={() => logOut()}>Logout</NavLink>
                            <NavLink to="/panier" className="except">Panier</NavLink>
                        </div>
                        
                    </div>

                    <div className="header-btn">
                        <button className="logout" onClick={() => logout()}>Logout</button>
                        <button className="panier">Panier</button>
                    </div>
                
                </div>
            ) : (
                <div className="nav-bar0">
                    <div>
                        <h1 className="logo">CoffeeShop</h1>
                    </div>

                    <div className="nav-bar-1">
                            <NavLink to="/" className={navStyle}>Home</NavLink>
                            <NavLink to="/categories" className={navStyle}>Categories</NavLink>
                            <NavLink to="/about" className={navStyle}>About</NavLink>
                            <NavLink to="/login"  className={navStyle}>Login</NavLink>
                    </div>

                    <div className="nav-bar-mobile">
                        <button className="menu-btn" onClick={() => openMenu()}>{isMenuOpen? "X": "Menu"}</button>
                        
                        <div className={`nav-bar ${isMenuOpen? "menuAnimation": ""}`}>
                            <NavLink to="/" className={navStyle}>Home</NavLink>
                            <NavLink to="/categories" className={navStyle}>Categories</NavLink>
                            <NavLink to="/about" className={navStyle}>About</NavLink>
                            <NavLink to="/login"  className={navStyle}>Login</NavLink>
                        </div>
                        
                    </div>
                </div>
            )}
            
            
        </div>
    )
}
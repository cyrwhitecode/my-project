import { NavLink } from 'react-router-dom'

export const LogIn = ({ setIsFormOpen, openForm }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        openForm();
    }

    return (
        <form onSubmit={handleSubmit} action="/">
            <h2>Connexion Form</h2>
            <label>E-mail : 
                <input required type="email" placeholder="Enter your email adress" />    
            </label><br />
            <label>Password : 
                <input required type="password" placeholder="Enter your password" />
            </label><br />
            <label>Confirm Password : 
                <input required type="password" placeholder="confirm the password" />
            </label><br />
            <input type="button" value="Clear All" />
            <input type="submit"  /><br />
            <code>You don't have an account yet? <NavLink>Sign In</NavLink></code>
        </form>
    )
}
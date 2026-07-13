import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from '../navigation/Nav';
import { Footer } from '../footer/Footer';
import '../styles/layout.css';


export function MainLayout () {

    const location = useLocation();
    const isAuthPage = location.pathname === '/login'; 


    return (
        <div className='layout'>
            {!isAuthPage && (
                <header className='header'>
                    <Nav  />
                </header>)}

            <main className='main'>
                <Outlet />
            </main>

            {!isAuthPage && (
                <footer className='footer'>
                    <Footer />
                </footer>)}
        </div>
    )
}


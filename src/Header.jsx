import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'
import PersonLogo from './assets/person-circle.svg'
import ChatLogo from './assets/chat.svg'


function Header ({setIsFormOpen, openForm}) {

    
    return (
        <div className='header'>
            <h1>Coffee <span className='text-blue-500'>SHOP</span></h1>
            <div  className='flex gap-10'>
                <nav className='w-full flex gap-10 nav'>
                    <NavLink to='/' className={({isActive}) => isActive? 'transition duration-500 ease-in-out text-lg text-blue-500 border-b-2': 'text-white'} >Home</NavLink>
                    <NavLink to='/shop' className={({isActive}) => isActive? 'transition duration-500 ease-in-out text-lg text-blue-500 border-b-2': 'text-white'}>Shop</NavLink> 
                    <NavLink to='/categories' className={({isActive}) => isActive? 'transition duration-500 ease-in-out text-lg text-blue-500 border-b-2': 'text-white'}>Categories</NavLink> 
                    <NavLink to='/about' className={({isActive}) => isActive? 'transition duration-500 ease-in-out text-lg text-blue-500 border-b-2': 'text-white'}>About</NavLink>
                </nav>

                <div className='nav-burger'>
                    <h3>Menu</h3>
                    <nav className='nav2'>
                       <NavLink to='/' className='link' >Home</NavLink>
                        <NavLink to='/shop' className='link'>Shop</NavLink> 
                        <NavLink to='/categories' className='link'>Categories</NavLink> 
                        <NavLink to='/about' className='link'>About</NavLink>   
                    </nav>
                </div>

                <nav className='flex gap-5'>
                    <NavLink to='/login'> 
                        <img onClick={() => openForm()} className='person' src={PersonLogo} alt="" />
                    </NavLink>
                    <NavLink to='/chat'>
                        <img className='chat' src={ChatLogo} alt="" /> 
                    </NavLink>
                </nav>

            </div>
        </div>
    )
}

export default Header 
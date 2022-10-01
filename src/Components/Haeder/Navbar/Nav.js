import React from 'react';
import './Nav.scss'
import logo from '../../../Resources/images/Navbar/byju_logo_header.svg'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

const Nav = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: ''
    
    }); 

    const provider = new GoogleAuthProvider();

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(res =>{
          const {displayName, photoURL, email } = res.user;
          const userIn = {
            isSignIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(userIn);
          console.log(displayName, photoURL, email);
    
        })
        .catch(err => {
          console.log(err.message);
        })
    }
    
    const handleSignOut = () => {
        signOut(auth, provider)
        .then(res =>{
          
          const userOut = {
            isSignIn: false,
            name: '',
            email: '',
            photo: ''
          }
          setUser(userOut);
        })
    
        .catch(err => {
          console.log(err.message);
        })
    }
    return (
        
        <div className="navbar">
            <div className="navbar_icon relative">
                <img className="navbar_logo" src={logo} alt="" />
            </div>
            
            <div className="navbar_bar">
                <i className="fas fa-bars"></i>
            </div>

            <div className="navbar_menu">
                <a className="navbar_menu-link" href="/">Home</a>
                <a className="navbar_menu-link" href="/courses">Course</a>
                <a className="navbar_menu-link" href="/books">Book Store</a>
                <a className="navbar_menu-link" href="https://byjus.com/global/careers/" target="_blank" rel="noopener noreferrer">Careers</a>
                <a className="navbar_menu-link" href="/about">About us</a> 
                
                {
                    user.isSignIn ?
                    <button className="login" onClick={handleSignOut}><LogoutIcon fontSize='small' style={{position: 'relative', top:'5px'}}/> Sign out</button> : 
                    <button className="login" onClick={handleSignIn}><i className="fa-sharp fa-solid fa-right-to-bracket"></i> Sign in</button>
                }

                <h3 className="greet">
                {
                    user.isSignIn && <p>Welcome, {user.name}</p>
                }
                </h3>

            </div>
            
        </div>
    );
};

export default Nav;
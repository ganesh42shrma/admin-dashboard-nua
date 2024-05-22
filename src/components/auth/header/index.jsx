import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import './header.css'; 

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    const handleLogout = async () => {
        try {
            await doSignOut();
            navigate('/login');
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };

    return (
        <nav className='header-container'>
            {userLoggedIn ? (
                <button onClick={handleLogout} className='logout-button'>Logout</button>
            ) : (
                <>
                    <Link to="/login"><button className='header-link'>Login</button></Link>
                    <Link to="/register"><button className='header-link-register'>Register</button></Link>
                </>
            )}
        </nav>
    );
};

export default Header;

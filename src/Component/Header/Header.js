import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
  const {user} = useContext(AuthContext)
  // console.log(user.email);
    return (
      <nav className='header'>
          <img src={logo} alt="" />
        <div className='header-menu'>
            <Link to="/shop">Shop</Link>
            <Link to="/orders">Order Review</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
            <Link to="/about">About</Link>
        </div>
      </nav>
    );
};

export default Header;
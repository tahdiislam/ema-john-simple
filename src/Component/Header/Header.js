import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  // console.log(user.email);
    return (
      <nav className="header">
        <img src={logo} alt="" />
        <div className="header-menu">
          <Link to="/shop">Shop</Link>
          <Link to="/orders">Order Review</Link>
          <Link to="/shipping">Shipping</Link>
          {user?.uid ? (
            <button className="logOut-btn" onClick={logOut}>
              Log Out
            </button>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Log In</Link>
            </>
          )}
          {user?.uid && <Link>
            {user?.email}
          </Link>}
          <Link to="/about">About</Link>
        </div>
      </nav>
    );
};

export default Header;
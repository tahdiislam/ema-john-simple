import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    //form submit
    const handleFormSubmit = event => {
        event.preventDefault()
    }
    return (
      <div className='main-container'>
        <div className="form-container">
          <h1 className="form-title">Login</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="form-control">
              <input className="submit-btn" type="submit" value="Login" />
            </div>
            <div className="go-register">
              <small>
                New to Ema-john?{" "}
                <Link className="navigate-register" to="/register">
                  Create New Account
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;
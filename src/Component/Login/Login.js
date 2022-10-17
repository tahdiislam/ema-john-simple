import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {
    const [error, setError] = useState('')
    const {signIn} = useContext(AuthContext)
    //form submit
    const handleFormSubmit = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        // sign in 
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
        })
        .catch(error => {
            console.log(error);
            setError(error.message.split("Firebase: Error (auth/").join("").split(').').join(''));
        })
    }
    return (
        <div className="form-container">
          <h1 className="form-title">Login</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required/>
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required/>
            </div>
            <div className="form-control">
              <input className="submit-btn" type="submit" value="Login"/>
            </div>
            <div className="go-register">
              <small>
                New to Ema-john?{" "}
                <Link className="navigate-register" to="/register">
                  Create New Account
                </Link>
              </small>
              <p className='text-error'>{error}</p>
            </div>
          </form>
        </div>
    );
};

export default Login;
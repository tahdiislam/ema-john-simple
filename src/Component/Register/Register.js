import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Register.css'

const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext);
  //form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(email, password, confirmPassword);
    if(password.length < 8){
        setError('Please provide at least 8 character password');
        return;
    }
    if(password !== confirmPassword){
        setError("Password didn't match");
        return;
    }

    // create user with email and password
    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        form.reset()
    })
    .catch(error => {
        console.log(error);
    })
  };
  return (
    <div className="form-container" style={{height: '700px'}}>
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm-password">Confirm password</label>
          <input type="password" name="confirmPassword" id="confirm-password" required />
        </div>
        <div className="form-control">
          <input className="submit-btn" type="submit" value="Sign Up" />
        </div>
        <div className="go-register">
          <small>
            Already have an account?{" "}
            <Link className="navigate-register" to="/login">
              Login
            </Link>
          </small>
        </div>
        <p className='text-error'>{error}</p>
      </form>
    </div>
  );
};


export default Register;
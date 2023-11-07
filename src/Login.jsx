import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import devLinkLogo from './assets/images/logo-devlinks-large.svg';
import emailIcon from './assets/images/icon-email.svg';
import passwordIcon from './assets/images/icon-password.svg';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login = () => {

  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');

  const handleLoginButton = () => {
        if(email.trim() === '') {
          setEmailError("Can't be empty");
        } else {
          setEmailError('');
        }

        if(password.trim() === '') {
          setPasswordError('Please check again');
        } else {
          setPasswordError('')
        }
  }

  return (
    <div className="body">
      <img src={devLinkLogo} alt="dev link logo" className='devLinkLogo'/>
       <div className="whiteBoxSpace">
          <div className="login">
            <h1 className='login-title'>Login</h1>
            <p className='login-info'>Add your details below to get back into the app</p>
          </div>
          <div className="emailPassword">
            <div className="emailRequest">
              <label htmlFor="email">Email address</label>
              <div className="input-container">
                 <img src={emailIcon} alt="email icon" />
                 <input 
                 type="email" 
                 placeholder='e.g.alex@email.com' 
                 id='emailInput'
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                 className='custom-input'
                 /> 
                 {/* <span class="email-error-message" id="passwordError">Can't be empty</span> */}
              </div>
            </div>
            <div className="passwordRequest">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                 <img src={passwordIcon} alt="password icon" />
                 <input 
                 type="password" 
                 placeholder='Password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className='custom-input'
                 />
                 {/* <span class="password-error-message" id="passwordError">Please check again</span>  */}
              </div>
            </div>
            <button className='btn' onClick={handleLoginButton}>Login</button>
            <p className='createAccount'>Don't have an account? <a href="#">Create account</a></p>
          </div>
       </div>
    </div>
 
  )
}

export default Login
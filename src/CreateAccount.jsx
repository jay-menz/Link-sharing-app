import React, {useRef} from 'react';
import devLinkLogo from './assets/images/logo-devlinks-large.svg';
import emailIcon from './assets/images/icon-email.svg';
import passwordIcon from './assets/images/icon-password.svg';
import './CreateAccount.css';

const createAccount = () => {

  // const [password, setPassword] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [email, setEmail] = useState('');

  // const handleLoginButton = () => {
  //       if(email.trim() === '') {
  //         setEmailError("Can't be empty");
  //       } else {
  //         setEmailError('');
  //       }

  //       if(password.trim() === '') {
  //         setPasswordError('Please check again');
  //       } else {
  //         setPasswordError('')
  //       }
  // }

  return (
    <div className="body">
      <img src={devLinkLogo} alt="dev link logo" className='devLinkLogo'/>
       <div className="whiteBoxSpace">
          <div className="login">
            <h1 className='login-title'>Create account</h1>
            <p className='login-info'>Let's get you started sharing you links!</p>
          </div>
          <div className="emailPassword">
            <div className="emailRequest">
              <label htmlFor="email">Email address</label>
              <div className="input-container">
                 <img src={emailIcon} alt="email icon" />
                 <input 
                 type="email" 
                 placeholder='e.g.alex@email.com' 
                //  id='email'
                //  ref={useRef}
                //  autoComplete='off'
                 required
                //  value={email}
                //  onChange={(e) => setEmail(e.target.value)}
                 className='custom-input'
                 /> 
                 {/* <span class="email-error-message" id="passwordError">Can't be empty</span> */}
              </div>
            </div>
            <div className="passwordRequest">
              <label htmlFor="password">Create Password</label>
              <div className="input-container">
                 <img src={passwordIcon} alt="password icon" />
                 <input 
                 type="password" 
                 placeholder='At least 8 characters'
                 id="password"
                //  ref={useRef}
                //  autoComplete='off'
                 required
                //  value={password}
                //  onChange={(e) => setPassword(e.target.value)}
                 className='custom-input'
                 />
                 {/* <span class="password-error-message" id="passwordError">Please check again</span>  */}
              </div>
            </div>
            <div className="passwordRequest">
              <label htmlFor="password">Confirm Password</label>
              <div className="input-container">
                 <img src={passwordIcon} alt="password icon" />
                 <input 
                 type="password" 
                 placeholder='At least 8 characters'
                 id="password"
                //  ref={useRef}
                //  autoComplete='off'
                 required
                //  value={password}
                //  onChange={(e) => setPassword(e.target.value)}
                //  className='custom-input'
                 />
                 {/* <span class="password-error-message" id="passwordError">Please check again</span>  */}
              </div>
            </div>
            <p className='pwdReminder'>Password must contain at least 8 characters</p>
            <button className='btn'>Create new account</button>
            <p className='createAccount'>Already have an account? <a href="#">Login</a></p>
          </div>
       </div>
    </div>
 
  )
}

export default createAccount
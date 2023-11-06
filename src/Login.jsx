
import devLinkLogo from './assets/images/logo-devlinks-large.svg';
import emailIcon from './assets/images/icon-email.svg';
import passwordIcon from './assets/images/icon-password.svg';
import './Login.css';

const Login = () => {
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
                 <input type="email" placeholder='e.g.alex@email.com'/> 
              </div>
            </div>
            <div className="passwordRequest">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                 <img src={passwordIcon} alt="password icon" />
                 <input type="password" placeholder='Password'/>
              </div>
            </div>
            <button className='btn'>Login</button>
            <p className='createAccount'>Don't have an account? <a href="#">Create account</a></p>
          </div>
       </div>
    </div>
 
  )
}

export default Login
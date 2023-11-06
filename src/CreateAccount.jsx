
import devLinkLogo from './assets/images/logo-devlinks-large.svg';
import emailIcon from './assets/images/icon-email.svg';
import passwordIcon from './assets/images/icon-password.svg';
import './CreateAccount.css';

const CreateAccount = () => {
  return (
    <div className="body">
      <img src={devLinkLogo} alt="dev link logo" className='devLinkLogo'/>
       <div className="whiteBoxSpace">
          <div className="login">
            <h1 className='login-title'>Create account</h1>
            <p className='login-info'>Let's get you started sharing your links!</p>
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
              <label htmlFor="password">Create password</label>
              <div className="input-container">
                 <img src={passwordIcon} alt="password icon" />
                 <input type="password" placeholder='At least 8 characters'/>
              </div>
            </div>
            <div className="passwordRequest">
              <label htmlFor="password">Confirm password</label>
              <div className="input-container">
                 <img src={passwordIcon} alt="password icon" />
                 <input type="password" placeholder='At least 8 characters'/>
              </div>
            </div>
            <p className='password-info'>Password must contain at least 8 characters</p>
            <button className='btn'>Create new password</button>
            <p className='createAccount'>Already have an account? <a href="#">Login</a></p>
          </div>
       </div>
    </div>
 
  )
}

export default CreateAccount
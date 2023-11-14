import React from 'react';
import devLinkLogo from './assets/images/logo-devlinks-large.svg';
import emailIcon from './assets/images/icon-email.svg';
import passwordIcon from './assets/images/icon-password.svg';


import './Login.css';

 const Login = () => {

  //set states to track changes in app
  const [email, setEmail] = React.useState(''); //set state for user email
  const [password, setPassword] = React.useState(''); //set state for user password


  //handle Onchange when user enters any character in inputs
  const handleOnChangeEmail = (event)=>{setEmail(event.target.value);}
  const handleOnChangePassword = (event)=>{setPassword(event.target.value);}

  //show errors and success messages
  const [emailError, setEmailError] = React.useState(false); //set this to false on initial load. when field is empty set it to true to show error message
  const [emailErrorMessage, setEmailErrorMessage] = React.useState(''); //show error meesage in email
  
  const [passwordError, setPasswordError] = React.useState(false); //set this to false on initial load. when field is empty set it to true to show error message
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState(''); //show error meesage in password

  const [showLoginButton, setShowLoginButton] = React.useState(true); //show login button on load
  const [showLoading, setShowLoading] = React.useState(false); //show loading state when button is clicked

  const [borderError, setBorderError] = React.useState(false); //set border error to the color red
  const [labelError, setLabelError] = React.useState(false); //set label error to the color red

  const [emailLabelError, setEmailLabelError] = React.useState(false);
  const [passwordLabelError, setPasswordLabelError] = React.useState(false);



  //this function handles the login button when clicked.
  //this is where all your validation & authentication goes
  const handleLogin = async () => {

    //validate email and password field before granting access

    if(email == '' || email == null){
      //if email field is empty or null then show error message
      setEmailError(true)
      setEmailErrorMessage("Can't be empty")
      setEmailLabelError(true);

      //remove the error message after 3seconds. You can play with the time yourself by changing it in the setTimout function
      setTimeout(() => {
        
        setEmailError(false) //set message to false to hide it
        setEmailErrorMessage("") //remove the error message
        setEmailLabelError(false);
      }, 3000);

      return false;
    }
    else if(password == '' || password == null){
      //if email field is empty or null then show error message
      setPasswordError(true)
      setPasswordErrorMessage("Please check again");
      setPasswordLabelError(true);

      //remove the error message after 3seconds. You can play with the time yourself by changing it in the setTimout function
      setTimeout(() => {
        
        setPasswordError(false) //set message to false to hide it
        setPasswordErrorMessage("") //remove the error message
        setPasswordLabelError(false);
      }, 3000);

      return false;
    }
    else{

      //use trycatch block to handle errors if any should arise
      try {
        
        setShowLoginButton(false) // set this to false to hide and show the loading state
        setShowLoading(true)

        
        //====================================================================================================//

          //handle your backend database validaiton here if email and password is not empty
          alert('Success i just logged in') //remove and add your own backend logic

        //====================================================================================================//

        //after response from server backend make sure to hide the loading and then show the login button again
        setShowLoginButton(true) 
        setShowLoading(false)

      } catch (error) {
        console.log('Error:', + error)
      }
    }
  }


  return(
    <div className="body">

      <img src={devLinkLogo} alt="dev link logo" className='devLinkLogo'/>  

      <div className="whiteBoxSpace">

        <div className="login">
          <h1 className='login-title'>Login</h1>
          <p className='login-info'>Add your details below to get back into the app</p>
        </div>

        <div className="emailPassword">

          <div className="emailRequest">
            <label htmlFor="email" className={emailLabelError ? 'error' : ''}>Email address</label>
            <div className={`input-container ${emailError ? 'error' : ''}`}>
                <img src={emailIcon} alt="email icon" />
                <input 
                type="email" 
                placeholder='e.g.alex@email.com' 
                id='emailPwdInput' 
                value={email} 
                onChange={handleOnChangeEmail} 
                className={`input-container ${emailError ? 'error' : ''}`}
                /> 
                {emailError &&(
                  <span className="email-error-message" id="passwordError">{emailErrorMessage}</span>
                )}
            </div>
          </div>

          <div className="passwordRequest">
            <label htmlFor="password" className={passwordLabelError ? 'error' : ''}>Password</label>
            <div className={`input-container ${passwordError ? 'error' : ''}`}> 
                <img src={passwordIcon} alt="password icon" />
                <input  
                type="password" 
                placeholder='Password' 
                id='emailPwdInput' 
                value={password} 
                onChange={handleOnChangePassword}
                className={`input-container ${passwordError ? 'error' : ''}`}
                />
                {passwordError &&(
                  <span className="email-error-message" id="passwordError">{passwordErrorMessage}</span>
                )}
            </div>
          </div>

          

          {showLoginButton &&(
            <button className='btn' onClick={() => handleLogin()}>Login</button>
          )}

          {showLoading &&(
            <button className='btn' style={{backgroundColor:'gray'}} >Logging in... Please wait</button>
          )}

          <p className='createAccount'>Don't have an account? <a href="#!">Create account</a></p>
            

        </div>

      </div>

    </div>
  )
}

export default Login;
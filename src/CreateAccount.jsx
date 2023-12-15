import React from "react";
import devLinkLogo from "./assets/images/logo-devlinks-large.svg";
import emailIcon from "./assets/images/icon-email.svg";
import passwordIcon from "./assets/images/icon-password.svg";
import { useNavigate } from "react-router-dom";

import "./CreateAccount.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

 
  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };


  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");

  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const [showLoginButton, setShowLoginButton] = React.useState(true);
  const [showLoading, setShowLoading] = React.useState(false);

  const [borderError, setBorderError] = React.useState(false);
  const [labelError, setLabelError] = React.useState(false);

  const [emailLabelError, setEmailLabelError] = React.useState(false);
  const [passwordLabelError, setPasswordLabelError] = React.useState(false);

  const [confirmPassword, setConfirmPassword] = React.useState(false);

  const handleLogin = async () => {
    let chkSum = 0;
    if (email == "" || email == null) {
      setEmailError(true);
      setEmailErrorMessage("Can't be empty");
      setEmailLabelError(true);

      setTimeout(() => {
        setEmailError(false); 
        setEmailErrorMessage(""); 
        setEmailLabelError(false);
      }, 5000);

      chkSum++;
    }
    if (password == "" || password == null) {
      setPasswordError(true);
      setPasswordErrorMessage("Please check again");
      setPasswordLabelError(true);

      setTimeout(() => {
        setPasswordError(false);
        setPasswordErrorMessage("");
        setPasswordLabelError(false);
      }, 5000);

      chkSum++;
    }

    if (document.getElementById("confirmPasswordInput").value !== "") {
      setConfirmPassword(false);
    }

    if (chkSum > 0) return;

    try {
      setShowLoginButton(false); 
      setShowLoading(true);

      navigate("/Empty");

    
      setShowLoginButton(true);
      setShowLoading(false);
    } catch (error) {
      console.log("Error:", +error);
    }
  };

  return (
    <div className="body">
      <img src={devLinkLogo} alt="dev link logo" className="devLinkLogo" />

      <div className="whiteBox">
        <div className="create">
          <h1 className="create-title">Create account</h1>
          <p className="create-info">
            Let's get you started sharing your links!
          </p>
        </div>

        <div className="createEmailPwd">
          <div className="create-acc-email">
            <label
              htmlFor="email"
              className={emailLabelError ? "error-label" : ""}
            >
              Email address
            </label>
            <div
              className={`input-container ${emailError ? "error-border" : ""}`}
            >
              <img src={emailIcon} alt="email icon" />
              <input
                type="email"
                placeholder="e.g.alex@email.com"
                id="emailPwdInput"
                value={email}
                onChange={handleOnChangeEmail}
                className="custom-input"
              />
              {emailError && (
                <div id="error-message-container">
                  <span id="passwordError">{emailErrorMessage}</span>
                </div>
              )}
            </div>
          </div>

          <div className="createPwd">
            <label
              htmlFor="password"
              className={passwordLabelError ? "error-label" : ""}
            >
              Create password
            </label>
            <div
              className={`input-container ${
                passwordError ? "error-border" : ""
              }`}
            >
              <img src={passwordIcon} alt="password icon" />
              <input
                type="password"
                placeholder="At least 8 characters"
                id="createPasswordInput"
                className="custom-input"
                onChange={handleOnChangePassword}
              />
              {passwordError && (
                <div id="password-error-message-container">
                  <span id="passwordError">{passwordErrorMessage}</span>
                </div>
              )}
            </div>
          </div>

          <div className="confirmPwd">
            <label htmlFor="password" className={""}>
              Confirm password
            </label>
            <div className={`input-container`}>
              <img src={passwordIcon} alt="password icon" />
              <input
                type="password"
                placeholder="At least 8 characters"
                id="confirmPasswordInput"
                className="custom-input"
                onChange={handleOnChangePassword}
              />
              {/* {passwordError &&(
                  <span id="passwordError">{passwordErrorMessage}</span>
                )} */}
            </div>
          </div>

          <p className="reminder">
            Password must contain at least 8 characters
          </p>

          {showLoginButton && (
            <button className="create-btn" onClick={() => handleLogin()}>
              Create new account
            </button>
          )}
        </div>

        <p className="loginLink">
          Already have an account? <a href="./">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

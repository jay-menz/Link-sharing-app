import React, {useState} from 'react';
import devLinkLogo from './assets/images/logo-devlinks-large.svg';
import emailIcon from './assets/images/icon-email.svg';
import passwordIcon from './assets/images/icon-password.svg';
import './CreateAccount.css';

const CreateAccount = (props) => {
    const [email, setEmail] = useState('');
    // const [createPassword, setCreatePassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <section className='centered-section'>
                <img src={devLinkLogo} alt="dev link logo" />
            <div className="createAccountHeader">
                <h1>Create account</h1>
                <p>Let's get you started sharing your links!</p>
            </div>
            <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <div class="label-input">
                    <label htmlFor="email">Email address</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name=""
                        id="email"
                        placeholder='e.g. alex@email.com' />
                        <img src={emailIcon} alt="" className='email icon'/>
                </div>
                 <div class="label-input">
                    <label htmlFor="password">Create password</label>
                    <input
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name=""
                        id="password"
                        placeholder='At least 8 characters' />
                        <img src={passwordIcon} alt="password icon" />
                </div>
                <div class="label-input">
                    <label htmlFor="password">Confirm password</label>
                    <input
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name=""
                        id="password"
                        placeholder='At least 8 characters' />
                        <img src={passwordIcon} alt="password icon" />
                </div>
                <p className='reminder'>Password must contain at least 8 characters</p>
                <button type="submit">Create new account</button>
                <div class="container">
                     <p>Already have an account? <a href="/CreateAccount">Login</a></p>
                </div>
            </div>
        </form>
    </div>
        </section>
      );
    }
    
    export default CreateAccount;
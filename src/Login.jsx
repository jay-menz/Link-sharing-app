import React, {useState} from 'react';
import devLinkLogo from './assets/images/logo-devlinks-large.svg';
import './Login.css';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <section className='centered-section'>
            <img src={devLinkLogo} alt="dev link logo" />
        <div className="loginHeader">
            <h1>Login</h1>
            <p>Add your details below to get back into the app</p>
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
            </div>
            <div class="label-input">
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name=""
                    id="password"
                    placeholder='Enter your password' />
            </div>
            <button type="submit">Login</button>
            <div class="container">
                 <p>Don't have an account? <a href="/CreateAccount">Create account</a></p>
            </div>
        </div>
    </form>
</div>
    </section>
  );
}

export default Login;

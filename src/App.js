
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';
import React, {useState} from 'react';

function App() {

  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <main className="App">
      {/* {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : 
        <CreateAccount onFormSwitch={toggleForm}/>
      } */}
      {/* <Login /> */}
      <CreateAccount/>
    </main>
  );
}

export default App;

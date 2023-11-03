
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import Login from './Login';
// import CreateAccount from './CreateAccount';
import React, {useState} from 'react';
// import AddedOneLink from './AddedOneLink';
// import AddedLinks from './AddedLinks';
import Profile from './Profile';
// import Empty from './Empty';

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
      {/* <CreateAccount/> */}
      {/* <AddedOneLink /> */}
      <Profile />
      {/* <AddedLinks /> */}
      {/* <Empty /> */}
    </main>
  );
}

export default App;



import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount'; 
import AddedOneLink from './AddedOneLink';
import AddedLinks from './AddedLinks';
import Profile from './Profile';
import Preview from './Preview';
import Empty from './Empty';

function App() {

  // const [currentForm, setCurrentForm] = useState('login');
  
  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    // <main className="App">
    //   {/* {
    //     currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : 
    //     <CreateAccount onFormSwitch={toggleForm}/>
    //   } */}
    //   <Login />
      // {/* <CreateAccount/> */}
      // {/* <AddedOneLink /> */}
    //   {/* <Profile /> */}
    //   {/* <AddedLinks /> */}
    //   {/* <Empty /> */}
    //   {/* <Preview /> */}
    // </main>

    <div>
      <Router>
          <Routes>
            <Route path='/' element={<Login />  } />
            <Route path='/CreateAccount' element={<CreateAccount/> } />
            <Route path='/Empty' element={<Empty />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/AddedLinks' element={<AddedLinks />} />
            <Route path='/Preview' element={<Preview /> } />
            <Route path='/AddedOneLink' element={<AddedOneLink /> } />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

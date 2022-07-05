import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [loggedIn, setLoggedIn] = useState('');
  return (
    <div>
      {localStorage.getItem("token") === null ? <Login loggedIn={setLoggedIn}></Login> : <Dashboard loggedIn={setLoggedIn}></Dashboard>}

    </div>
  );
}

export default App;

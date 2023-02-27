import { useState } from 'react';
import Login from './components/Login';
import SecretInfo from './components/SecretInfo';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      {isLoggedIn
      ? <SecretInfo />
      : <Login setIsLoggedIn={setIsLoggedIn} /> 
    }
    </>
  );
}

export default App;

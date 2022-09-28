import React, { useContext } from 'react';
import { Routes, Route , Link} from 'react-router-dom';
import { AuthContext } from './contexts/Auth/AuthContext';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import {Home} from './pages/Home'
import {Private} from './pages/Private'


function App() {

  const auth = useContext(AuthContext)

  return (
    <div className="App">
      <h1>Header Do Site</h1>
      {auth.user &&
       <button onClick={auth.signout}>Log out</button>
       }
       {auth.user?.name &&
        <p>Olá {auth.user?.name}</p>
        }
       
      <nav>
        <Link to="/private">Priv</Link>
        <hr />
        <Link to="/">Home</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/private' element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route , Link} from 'react-router-dom';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import {Home} from './pages/Home'
import {Private} from './pages/Private'


function App() {
  return (
    <div className="App">
      <h1>Header Do Site</h1>
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

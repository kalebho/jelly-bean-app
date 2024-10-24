import logo from '../images/JellyBean.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import Add from './Add';
import Update from './Update';
import View from './View';
import Delete from './Delete';
import NavBar from './NavBar';
import Home from './Home';
import React, { useState } from 'react';

function App() {
  const [refresh, setRefresh] = useState(false);
  const triggerRefresh = () => setRefresh(!refresh);
  return (
    <Router>
      <div>
        <NavBar>
          <img  src={logo} alt='Logo' style={{ width: '60px', height: '50px' }}/>
        </NavBar>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/view' element={<View />}/>
          <Route path='/add' element={<Add triggerRefresh={triggerRefresh}/>}/>
          <Route path='/update' element={<Update triggerRefresh={triggerRefresh}/>}/>
          <Route path='/delete' element={<Delete triggerRefresh={triggerRefresh}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Nvbar from './component1/Nvbar/Nvbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Footer from './component1/Footer/Footer';
import Home from './Home/Home';
import Signup from './Signup/Signup';
import Aboutus from './AboutUS/Aboutus';

import A from './A/A';
function App() {
  return (
    <>
    
    <div className='app-div' >
      <BrowserRouter>
      <Nvbar/>
      <Switch>
        <Route   path='/aboutus' component={Aboutus} />
        <Route   path='/signup' component={Signup} />
        <Route  path='/' component={Home} />
      </Switch>
      <Footer/>
      </BrowserRouter>
    
    </div>
    </>
  );
}

export default App;

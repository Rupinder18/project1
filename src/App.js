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
  const mybutton =document.getElementById("btn-top");
  window.onscroll = function(){scrollFunction()}
  function scrollFunction  (){
    
      if (
        document.body.scrollTop > 20 || document.documentElement.scrollTop >20
      ){
        mybutton.style.display ="block";
      }
      else{
        mybutton.style.display ="none";
      }
    
  }
  function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
    <button onClick={topFunction} id='btn-top'>Top</button>
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

import React from 'react';
import '../Nvbar/nvbr.css';
import {NavLink} from 'react-router-dom';
function Nvbar() {
   
    let open =false;
    const change =()=>{
        const hamburger=document.getElementById("hamburger");
        const menu =document.getElementById("menu");
        if (!open){
            hamburger.classList.add('open');
            menu.classList.add('menu');
        }
        else{
            hamburger.classList.remove('open');
            menu.classList.remove('menu');
        }
        open=!open;
    }
    return (
        <>
        
       
         <div className='nav-div'>
             <div className="nav-div1">
             <a  href='#'> <i id='log-img' style={{fontSize:"40px",color:'white'}}   className="fa fa-university" aria-hidden="true"></i></a>
             </div>
           
            <div id='hamburger'onClick={change} >
                <div></div>
            </div>
            <div id="menu" className='link-div'>
                 <NavLink exact activeStyle={{background: "White",color:"darkslategrey"}} className='links' id='navlink' to='/' >Home</NavLink>
                 <NavLink exact activeStyle={{background: "White",color:"darkslategrey"}}  className='links'id='navlink' to='/aboutus'>About Us</NavLink>
                 <NavLink  exact activeStyle={{background: "White",color:"darkslategrey"}} className='links'id='navlink' to="/signup">Sign Up</NavLink>
             </div>
             
             </div>   
        </>
    )
}

export default Nvbar;

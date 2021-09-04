import React from 'react';

import '../Nvbar/nvbr.css';
import {NavLink} from 'react-router-dom';
function Nvbar() {
    return (
        <>
         <div className='nav-div'>
             <div className="nav-div1">
             <a  href='#'> <i id='log-img' style={{fontSize:"40px",color:'white'}}   className="fa fa-university" aria-hidden="true"></i></a>
             </div>
             <div className='link-div'>
                 <NavLink exact activeStyle={{background: "White",color:"darkslategrey"}} className='links'  to='/' >Home</NavLink>
                 <NavLink exact activeStyle={{background: "White",color:"darkslategrey"}}  className='links' to='/aboutus'>About Us</NavLink>
                 <NavLink  exact activeStyle={{background: "White",color:"darkslategrey"}} className='links' to="/signup">Sign Up</NavLink>
             </div>
             </div>   
        </>
    )
}

export default Nvbar;

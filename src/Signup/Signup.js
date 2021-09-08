import React from 'react'
import Dropdown1 from '../Dropdown/Dropdown';
import Rcard from '../ReactCard/Rcard';
import '../Signup/Signup.css';
import { Spinner } from 'reactstrap';
function Signup() {
    return (
        <>
        <div className='signup-main-div'>
               <form id='form-div'>
                  <div style={{textAlign:"center",paddingTop:"10px"}}>
                  <label id="label-div">Enter your name :</label>
                   <input id='input-div' type="text"  ></input>
                  </div> <br/>
                  <div  style={{textAlign:"center"}} >
                  <label id="label-div" >Your Password :</label>
                   <input id='input-div' type="password"></input>
                  </div><br/>
                  <div style={{textAlign:"center"}} >
                  <label id="label-div" >Enter your number :</label>
                   <input id='input-div' type="number"></input>
                  </div><br/>
                  <div  style={{textAlign:"center"}} >
                  <label id="label-div" >Enter your id :</label>
                   <input id='input-div' type="id"></input>
                  </div><br/>
                   
                     <div style={{textAlign:"center",padding:"10px"}} >
                         <button id='btn' >Submit</button>
                     </div>
               </form>
           </div>
        
        </>
    )
}

export default Signup;

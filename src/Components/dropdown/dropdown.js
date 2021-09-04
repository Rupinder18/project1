import React from 'react';
import img from '../../assests/flag.png'


import '../dropdown/dropdown.css';
function Dropdown1() {
    return (
        <>
        <div>
            
            <form>
                
                <select id='selected'>
                    <option   selected>Hello,Sign in  Accounts & Lists</option>
                    <option>india</option>
                    <option>pakistan</option>
                    <option>afganistan</option>
                    <option>nepal</option>
                    <option>uk</option>
                </select>
            </form>
        </div>
        
      
        </>
    )
}

export default Dropdown1;

import React from 'react';
import '../Card/Card.css';
function Card({img,hddr,p1,p2,btn}) {
    return (
        <>
        
            <div className='card-holder'>
               <div className='card-uppr-div'>
                   <img id='crdlogo' src={img} />
               </div>
               <div className='card-lower-div'>
                   <h4>{hddr}</h4>
                   <p>{p1}</p>
                   <p>{p2}</p>
                   <button>{btn}</button>
               </div>
            </div>
        </>
    )
}

export default Card;

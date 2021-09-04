import React from 'react';
import '../nav2/nav2.css';
import img2 from '../../assests/amazonlogo1.png';
const Nav2 = () => {
    return (
        <>
          <nav className='main-nav'>
              <div className='logo-div'>
                 <div>
                 <a href='#'><img src={img2} alt='no image'/></a>
                 </div>
                 <div className="main-location" >
                 <a className='location' href='#'><div>
                 <i id='fafa1' className="fa fa-map-marker" aria-hidden="true"></i>
                     </div>
                     <div className="span-div">
                         <span id='span-hello'>Hello</span> <br/><span id='span-addr' >Select your address</span>
                         
                         </div></a>
                 </div>
              </div>
              <div className='search-div'>
              <div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
</div>
              </div>
              <div className='cart-div'></div>
              </nav>  
        </>
    )
}

export default Nav2;

import React from 'react'
// import "../A/A.css"
const A = () => {
    
    let open = false;
      const change =()=>{
        const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('overlay');
        console.log(open)
          if(!open){
              hamburger.classList.add("open");
              menu.classList.add("menu");
              console.log("if")
          }
          else{
            hamburger.classList.remove("open");
            menu.classList.remove("menu");
            console.log("else")
          }
          open = !open;
           console.log(open)
      };

    return (
        <div>
            <main>
                <div id='overlay'>
                    <a href="#">Link1</a>
                    <a href="#">Link2</a>
                    <a href="#">Link3</a>
                    <a href="#">Link4</a>
                </div>
                <div className='nav'>
                    <div className='logo'>
                     LOGO
                    </div>
                    <div id="hamburger" onClick={change}>
                        <div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default A;

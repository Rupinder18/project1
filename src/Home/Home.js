import React from 'react'
import '../Home/Home.css';
import Card from '../Card/Card';
import simba from '../assests/simba.png';
import mufasa from '../assests/mufasa.png';
import scar from '../assests/scar.jpg';
import pic1 from '../assests/one.jpg';
import pic2 from '../assests/policy.jpg';
import img1 from '../assests/a1.jpg';
import img2 from '../assests/a2.jpg';
import img3 from '../assests/a3.jpg';
import img4 from '../assests/a4.jpg';
import img5 from '../assests/a5.jpg';
function Home() {
    return (
        <>

            <div className='home-main-div'>
                <div className='home-div-one'>
                    <div style={{color:"darkslategrey"}} className='hddr-div'>
                        <h1>Things You Need To Know</h1>
                        <p>Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[9] This process is called reconciliation. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost.[citation needed] It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page</p>
                    </div>
                    <div className='hddr-img'>
                        <img id="img1" src={pic1} />
                    </div>
                </div>
                <div id="div-two" className='home-div-one'>
                   
                    <div className='hddr-img'>
                        <img id="img1" src={pic2} />
                    </div>
                    <div className='hddr-div'>
                        <h1>Our Policy</h1>
                        <p>Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[9] This process is called reconciliation. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost.[citation needed] It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page</p>
                    </div>
                </div>
                <h1 id='employee-hddr'>Our Employees</h1>
                <div className='card-div'>
                   
                    <Card
                        img={simba}
                        hddr=" Name : Simba"
                        p1=" id :  200138"
                        p2=" Designation : King's Son"
                        btn='Know More'
                    />  <Card
                        img={mufasa}
                        hddr=" Name : Mufasa"
                        p1=" id : 2012012"
                        p2=" Designation : King"
                        btn='Know More'
                    />  <Card
                        img={scar}
                        hddr=" Name : Scar"
                        p1=" id : 252585"
                        p2=" Designation : King's Brother"
                        btn='Know More'
                    />
                </div>
             <div >
             <div className='slider-hddr'>
                    <h1>Web Techologies</h1>
                    <p>Our Currently projects</p>
                    <p>Human's technological ascent began in earnest in what is known as the Neolithic Period ("New Stone Age"). The invention of polished stone axes was a major advance that allowed forest clearance on a large scale to create farms. This use of polished stone axes increased greatly in the Neolithic, but were originally used in the preceding Mesolithic in some areas such as Ireland.[34] Agriculture fed larger populations, and the transition to sedentism allowed simultaneously raising more children, as infants no longer needed to be carried, as nomadic ones must. Additionally, children could contribute labor to the raising of crops more readily than they could to the hunter-gatherer economy.[35][36]

With this increase in population and availability of labor came an increase in labor specialization.[37] What triggered the progression from early Neolithic villages to the first cities, such as Uruk, and the first civilizations, such as Sumer, is not specifically known; however, the emergence of increasingly hierarchical social structures and specialized labor, of trade and war amongst adjacent cultures, and the need for collective action to overcome environmental challenges such as irrigation, are all thought to have played a role</p>
                <div className='home-slider'>
                    <img id='slider-image' src={img1}/>
                    <img id='slider-image' src={img2}/>
                    <img id='slider-image' src={img3}/>
                    <img id='slider-image' src={img4}/>
                    <img id='slider-image' src={img5}/>
                 </div>
             </div>
                </div>

            </div>
        </>
    )
}

export default Home;

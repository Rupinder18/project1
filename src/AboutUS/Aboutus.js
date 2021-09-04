import React from 'react'
import '../AboutUS/Aboutus.css';
import b1 from "../assests/b1.jpg"
function Aboutus() {
    return (
        <>
            <div className='aboutus-main-div'>
                <div className='abt-fdiv'>
                    <img id="abt-fdiv" src={b1} />
                </div>
    
                <div className='overview'>
                    <h2>Overview</h2>
                    <p> This Company is a leading global information technology, consulting and business process services company. We harness the power of cognitive computing, hyper-automation, robotics, cloud, analytics and emerging technologies to help our clients adapt to the digital world and make them successful. A company recognized globally for its comprehensive portfolio of services, strong commitment to sustainability and good corporate citizenship, we have over 200,000 dedicated employees serving clients across six continents. Together, we discover ideas and connect the dots to build a better and a bold new future.</p>
                </div>
                <div className="spirit-div" >
                    <div className='spirit'>
                        <h2>Spirit Of The Company</h2>
                        <p>The Spirit of this company is the core of Wipro. These are our Values. It is about who we are. It is our character. It is reflected consistently in all our behavior. The Spirit is deeply rooted in the unchanging essence of Wipro. But it also embraces what we must aspire to be. It is the indivisible synthesis of the four values. The Spirit is a beacon. It is what gives us direction and a clear sense of purpose. It energizes us and is the touchstone for all that we do.</p>
                        <div className="div-container">
                        <div className="div-container-two" >
                        <div className='flex-div'>
                            <div className="fdiv-one">
                                <div id='color-span'></div>
                                <div id='hddr-h3'>
                                    <h3>Treat Each Person With Respect</h3>
                                </div>
                                
                            </div>
                            <div className="hddr-para" >
                                    <p style={{fontSize:"20px"}} >We succeed when we make our clients successful. We collaborate to sharpen our insights and amplify this success. We execute with excellence. Always.</p>
                                </div>
                        </div>
                           
                        </div>
                        <div className="div-container-two" >
                        <div className='flex-div'>
                            <div className="fdiv-one">
                                <div id='color-span'></div>
                                <div id='hddr-h3'>
                                    <h3>Treat Each Person With Respect</h3>
                                </div>
                                
                            </div>
                            <div className="hddr-para">
                                    <p  style={{fontSize:"20px"}} >We succeed when we make our clients successful. We collaborate to sharpen our insights and amplify this success. We execute with excellence. Always.</p>
                                </div>
                        </div>
                           
                        </div>
                        </div>
                    </div>
                </div>
                <div className='overview'>
                    <h2>Our Strategy</h2>
                    <p> On September 03, 2021, Company's CEO and MD, Thierry Delaporte and members of the Executive Leadership team presented a strategic plan to investors and analysts. Watch the presentations to learn how Wipro's bold new vision will strengthen our global leadership, drive innovative solutions for our customers, and generate sustainable value for shareholders.</p>
                       <div style={{textAlign:"center"}}>
                       <button className='btn' >Know More</button>
                       </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus;

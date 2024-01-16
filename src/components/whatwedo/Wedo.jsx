
import './Wedo.css';

function Wedo() {
  return (
 <div className="wedoo" id='Wedo'>

           <section className='oone'></section>
           <section className='ttwo'></section>
          <section className='tthree'></section>
             <section className='ffour'></section>
    <div className="wrapper">
   
      
      <div className='three-box'>
            < div className='one'>
         <div className="onee">
          <div className="tala">
           <img src="/img/1.svg"  alt="tala" />
              </div>
               <div className="security">
             Security <br />Services 
        </div>
        </div>
        

         <div className="onesecu">
             Security services encompass a wide range of measures designed to protect individuals, businesses, and organizations from a variety of threats.
         </div> 
            </div>
             <div className='two'>
          < div className="twoo">
        <div className="twopri">
               <img src="/img/2.svg" alt="service" />
        </div>
        <div className="twoDpri">Data <br /> Privacy</div>
          
                  </div> 
       <div className="sceser">Security services encompass a wide range of measures designed to protect individuals, businesses, and organizations from a variety of threats.
       </div>
             </div>

            <div className='there'>
       <div className="theree">
       <div className="thereimg"><img src="/img/3.svg" alt="" /></div> 
       <div className="ind">Industry <br />Certified</div>
        
        </div>
        <div className="indu">Security services encompass a wide range of measures designed to protect individuals, businesses, and organizations from a variety of threats.</div>
            </div>
      
      </div>
      
      <div className="whatwe">
          <h1 className='whatwedo'>What We Do</h1>
           <h5 className='Today'>Today, information systems are widely used in many organizations. However, it is necessary <br /> to have all systems and data to be secured. To increase security, we provide various of <br />services to your organization including</h5>
           <h5 className='Today-hide'>Today, information systems are widely used in many organizations. <br />However, it is necessary  to have all systems and data to be secured. <br />To increase security, we provide various of services to your organization including</h5>
     </div>
      {/*screen-----1200px start */}
      <div className="wedoservice">
               < div id="groupone">{/*group--one-start */}
            
                  <div className="serviceone">
                      <div className="oneimg"><img     className='weimg'  src="/img/1.png" alt="" /></div>
                       <h3 className='peni'>Penetration Testing</h3>
                        <div className='pen'>Penetration testing is a    proactive  approach to identifying security  weaknesses.</div>
                   </div>
             
                   <div className="servicetwo">
                      <div className="twoimg"><img className='weimg' src="/img/2.png" alt="" /></div>
                       <h3  className='peni'>Vulnerabilities Scaning</h3>
                        <div className='pen'>Vulnerability scanning is the  process of identifying security  vulnerabilities</div>
                    </div>
                 <div className="servicethree">
                    <div className="threeimg"><img  className='weimg' src="/img/3.png" alt="threeimg" /></div>
          
                     <h3  className='peni'>Source Code Review</h3>
                      <div className='pen'>Source code review is the process  of analyzing the source code of a   software application.</div>
             
                  </div>
             </div>{/*group--one-end */}
             
             <div id="grouptwo">{/*group--two- */}
                  <div className="servicefour">
                  <div className="fourimg"><img className='weimg' src="/img/4.png" alt="" />
                    </div>
                     <h3  className='peni'>Performance Test</h3>
                     <div  className='pen'>The process of testing a computer  system, network, or application to determine its speed, responsiveness.</div>
                    </div>{/*group--two-servicefour  end */}
                <div className="servicefive">
                   <div className="fiveimg">
                        <img className='weimg' src="/img/5.png" alt="" />
                    </div> 
                    <h3  className='peni'>Security Consult </h3>
                   <div className='pen'>Security consulting is a service  provided by security professionals  to help organizations identify.</div>
                   </div> {/*group--two-servicefive==  end */}
                  <div className="servicesix">
                      <div className="siximg"><img  className='weimg' src="/img/6.png" alt="" /></div> 
                     <h3  className='peni'>Security Training</h3>
                     <div className='pen'>This training can cover a wide br range of topics, including cybersecurity, physical security.</div>
                 </div>{/*group--two-servicefour  end */}
          </div>{/*group--two-end */}
       </div>{/*wedoservice---end */}
        <div className="wedoservice-hide">
         <div id="groupone-hide">
            
              <div className="serviceone">
                 <div className="oneimg"><img     className='weimg'  src="../../../public/what we do/New folder/1.png" alt="" />
                 </div>
                   <h3 className='peni'>Penetration Testing</h3>
                    <div className='pen'>Penetration testing is a    proactive  approach to identifying security  weaknesses.</div>
               </div>
             
             < div className="servicetwo">
                 <div className="twoimg"><img className='weimg' src="../../../public/what we do/New folder/2.png" alt="" /></div>
                <h3  className='peni'>Vulnerabilities Scaning</h3>
                  <div className='pen'>Vulnerability scanning is the  process of identifying security  vulnerabilities</div>
            </div>
           
            </div>{/*groupone--hide-end */}
           <div id="grouptwo-hide">
             <div className="servicethree">
                 <div className="threeimg"><img  className='weimg' src="../../../public/what we do/New folder/3.png" alt="threeimg" /></div>
                 <h3  className='peni'>Source Code Review</h3>
                  <div className='pen'>Source code review is the process  of analyzing the source code of a   software application.</div>
             
               </div>
              <div className="servicefour">
                 <div className="fourimg"><img className='weimg' src="../../../public/what we do/New folder/4.png" alt="" /></div>
                <h3  className='peni'>Performance Test</h3>
                  <div  className='pen'>The process of testing a computer  system, network, or application to determine its speed, responsiveness.</div>
              </div>
              </div>{/*group-two-hide-end */}
              <div id="groupthree-hide"> 
                 <div className="servicefive">
                   <div className="fiveimg">
                    <img className='weimg'  src="/img/5.png" alt="" /> </div> 
                   <h3  className='peni'>Security Consult </h3>
                   <div className='pen'>Security consulting is a service  provided by security professionals  to help organizations identify.</div>
               </div>
                <div className="servicesix">
                       <div className="siximg"><img  className='weimg' src="/img/6.png" alt="" /></div> 
                     <h3  className='peni'>Security Training</h3>
                     <div className='pen'>This training can cover a wide br range of topics, including cybersecurity, physical security.</div>
                 </div>
              
          </div>{/*group-three-hide-end */}
        </div>{/*wedoservice--hide-end */}

        </div>   {/*wrapper end-end */}
        
      </div>
        
     )
}

export default Wedo
    


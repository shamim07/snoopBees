
import'./Training.css';
import   { useState } from "react";
const images=[
    '/img/banner1.png',
    '/img/traning-slide-1 (1).png',
    '/img/trainin-slide2.png',
    '/img/traning-slide3.png',
  ]


function Training () {
  
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = () => {
    setIndex((i) => (i - 1) % images.length);
  };
  return (<>
      <div className='wedoo' id='Training' >
      <section className='what'></section>
     <div className="wrapper">
          <div className="tren">Training </div>
         <div className="tre">This training is in the form of theories and workshops for those who are interested able to gain knowledge and reduce the vulnerability of information systems also the risk that  may occur </div>
         <div className="slidercointainer">
          {/*===slidercointainer=stsrt=*/}
   
           <div className="menulist">
             <div className="listone" onClick={()=>setIndex(0)} >
              
              
              <div className="listimgone" > <img src="/img/1sd.png" alt="" /> </div> 
               <div className="cyber">Cyber Security <br /> Workshop Training</div>
               </div>
             <div className="listtwo"onClick={()=>setIndex(1)} >
               <div  className="listimgtwo"  > <img src="/img/2sd.png" alt="" />  </div>
              <div className="secure" >Secure <br />CoadingTraining</div>
               
             </div>
             < div className="listthree" onClick={()=>setIndex(2)} >
               <div className="listimgthree"> 
                 <img src="/img/3sd.png" alt="" />
               
               </div>
               <div className="securityy">Security awerness  <br />Training</div>
             </div>
         </div>
   
         <div className="sliderimg">
           <img id='slide' src={images[index]}  className='banner 'alt="" /> 
           
       
           <img src="/img/leftaro.png" alt="" onClick={next} className="leftaro" />
           <img src="/img/ritaro.png" alt="" onClick={next}className="rightaro" />
 
   <img src="/img/leftarrowyelo.png" alt=""  className="leftaro-hiden" />
     <img src="/img/rightarrowyelo.png" alt="" className="rightaro-hiden" />
     </div>
     </div>
         </div>
        </div>
    </>
  )
}

export default Training
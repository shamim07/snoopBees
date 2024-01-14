
import'./Training.css';
import   { useState } from "react";
const images=[
    '../../../public/img/traning-slider-imgs/banner1.png',
    '../../../public/img/traning-slider-imgs/traning-slide-1 (1).png',
    '../../../public/img/traning-slider-imgs/trainin-slide2.png',
    '../../../public/img/traning-slider-imgs/traning-slide3.png',
  ]


function Training () {
  
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = () => {
    setIndex((i) => (i - 1) % images.length);
  };
  return (<raining>

Ref={Training}
  
     <div className='wedoo' id='Training' >
      
     <section className='what'></section>
     <div className="wrapper">
          <div className="tren">Training </div>
         <div className="tre">This training is in the form of theories and workshops for those who are interested able <br /> to gain knowledge and reduce the vulnerability of information systems also the risk that <br /> may occur </div>
         <div className="slidercointainer">{/*===slidercointainer=stsrt=*/}
   
           <div className="menulist">
             <div className="listone" onClick={()=>setIndex(0)} >
              
              
              <div className="listimgone" ><img src="../../../public/img/trainingicon/1.png" alt="" /></div> 
               <div className="cyber">Cyber Security <br /> Workshop Training</div>
               </div>
             <div className="listtwo"onClick={()=>setIndex(1)} >
               <div  className="listimgtwo"  ><img src="../../../public/img/trainingicon/2.png" alt="" />  </div>
              <div className="secure" >Secure <br />CoadingTraining</div>
               
             </div>
             < div className="listthree"onClick={()=>setIndex(2)} >
               <div className="listimgthree"> 
                 <img src="../../../public/img/trainingicon/3.png" alt="" />
               
               </div>
               <div className="securityy">Security awerness  <br />Training</div>
             </div>
         </div>
   
         <div className="sliderimg">
           <img id='slide' src={images[index]}  className='banner 'alt="" /> 
           
       
           <img src="../../../public/img/trainingicon/leftaro.png" alt=""onClick={next} className="leftaro" />
           <img src="../../../public/img/trainingicon/ritaro.png" alt="" onClick={next}className="rightaro" />
 
   <img src="../../../public/img/trainingicon/leftarrowyelo.png" alt=""  className="leftaro-hiden" />
     <img src="../../../public/img/trainingicon/rightarrowyelo.png" alt="" className="rightaro-hiden" />
     </div>
     </div>
         </div>
        </div>
    </raining>
  )
}

export default Training
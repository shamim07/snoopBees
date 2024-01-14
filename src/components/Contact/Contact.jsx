
import './Contact.css'
const Contact = () => {
  return (
    <div className='conmap' id='Contact' >
     
       <div className="wrapper">
         {/*=====contact us===========*/} 
          <div className="maphead">
                
               <div className="conimg"><img src="../../../public/image/whysnoop.png" alt="" /></div>
               <div className="conhed">Contact Us</div>
               <div className="conimg"><img src="../../../public/image/whysnoop.png" alt="" /></div>
          </div>
       <div className="mapdet">This training is in the form of theories and workshops for those who are interested able to gain knowledge and reduce <br /> the vulnerability of information systems also the risk that may occur</div>
        {/*=====contact end ===========*/}
         {/*=====frommm===========*/}
           <div className="mapandcontac">
             {/*=====map===========*/}
            <div className="map"  >
            
            <iframe className='maap' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=949&amp;height=575&amp;hl=en&amp;q=Haus%2035,%2099/110%20Klong%20Kua%20Pak%20Kret%20snoopbees+(SnoopBees%20co.,Ltd)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      
              </div>
               {/*=====map end===========*/}
                 {/*=====fromst===========*/}
            <div className="contacform">
            <form className='fro' action="post">
          <div className="fromhead">SnoopBees Co., Ltd. (Head Office)</div>
          <div className="fnamlname">
            <div className="fname">
              <span className="faname">First Name</span> <br/>
              <input type="text"  className='in'  name='firstname' placeholder='First name' required/>
              </div>
              <div className="lname"><span className="lame">Last Name</span> <br/>
              
              <input type="text"placeholder='Last Name' name='Lastname' required />
              </div>
          </div>
          <div className="email">
            <span className="mail">Email
            </span> <br />
            <input className='en' type="email"placeholder='info@snoopbees.com' name='Email' required/>
         </div>
         <div className="phone">
          <span className="number">Phone Number</span>
          <input type="phonenumber" className='phn' name="pnonenumber" placeholder='(+66) 093-624-6354' required />
         </div>
         <input type="button" className='btn' value="Send Now" required />
        </form>
            </div>
             {/*=====fromst end===========*/}
            
          </div>
      {/*=====frommm= end==========*/}
      <footer>Copyright © 2018 SnoopBees All Rights Reserved </footer>
    </div>
   </div>
  )
}

export default Contact
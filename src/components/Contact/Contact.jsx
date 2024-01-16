
import './Contact.css'
const Contact = () => {
  return (
    <div className='conmap' id='Contact' >
     
       <div className="wrapper">
         {/*=====contact us===========*/} 
          <div className="maphead">
                
               <div className="conimg"><img src="/img/whysnoop.png" alt="" /></div>
               <div className="conhed">Contact Us</div>
               <div className="conimg"><img src="/img/whysnoop.png" alt="" /></div>
          </div>
       <div className="mapdet">This training is in the form of theories and workshops for those who are interested able to gain knowledge and reduce <br /> the vulnerability of information systems also the risk that may occur</div>
        {/*=====contact end ===========*/}
         {/*=====frommm===========*/}
           <div className="mapandcontac">
             {/*=====map===========*/}
            <div className="map"  >
           <iframe width="550px" height="600px"  src="https://maps.google.com/maps?width=550px&amp;height=600px&amp;hl=en&amp;q=SnoopBees%20Co.,Ltd,%20Tower,%2012th%20Floor,%20S-Oasis,%20199%20Vibhavadi%20Rangsit%20Rd,%20Chom%20Phon,%20Chatuchak,%20Bangkok%2010900,%20%E0%A6%A5%E0%A6%BE%E0%A6%87%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A1+(SnoopBees.Co.Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
      
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
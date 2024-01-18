import'./public1.css'

function Public1() {
  return (
 <div className='public' id='Public1' >

  
           <section className='publicyellow'></section>
      <section className='publicyellow1'></section>
      <section className='publicyellow2'></section>
   <div className="wrapper">
         <div className="publi">{/**publi st */}
              <div className="publimg1"><img src="/img/whysnoop.png" alt="" /></div>
              <div className="publiched">Public Advisories</div>
                <div className="publimg2"><img src="/img/whysnoop.png" alt="" /></div>
          </div>{/**publi end */}
          <div className="pubprag">Before you can publish a security advisory or request a CVE identification number, you must create a draft security advisory and provide  <br />information about the versions of your project affected by the security vulnerability. For more information,</div>
           {/*-----public--data--start---*/}
             {/**table */}
             <table>
               <thead>
                 <tr>
                  <th>CVE Number</th>
                  <th>Description</th>
                  <th>Serverity</th>
               </tr>
               </thead>
               <tbody>
                 <tr>
                  <td>CVE-2019-6191</td>
                 <td>CLenovoPaper Discontinuation   Local Privilege Escalation</td>
                 <td>
                  <div className="cr"><div className="d-y"></div>Medium</div>
                  

                 </td>
                 </tr>

               </tbody>
               <tbody>
                 <tr><td>CVE-2019-14737</td>
                 <td>Ubisoft Uplay 92.0.0.6280 has Insecure Permissions</td>
                 <td>
                  <div className="cr"> <div className="d-r"></div>High</div>
                 

                 </td>
                 </tr>

               </tbody>
               <tbody>
                 <tr><td>CVE-2019-13605</td>
                 <td>CentOS Control Web Panel 0.9.8.836 Authentication Bypass</td>
                 <td>
                  <div className="cr"><div className="d-g"></div>Critical</div>
                  

                 </td>
                 </tr>

               </tbody>
               <tbody>
                 <tr><td>CVE-2019-13387</td>
                 <td>CentOS Control Web Panel 0.9.8.846 Cross-Site Scripting</td>
                 <td>
                  <div className="cr">
                    <div className="d-r"></div>
                  High</div>
                  
                 </td>
                 </tr>

               </tbody>
               <tbody>
                 <tr><td>CVE-2019-13386</td>
                 <td>CentOS Control Web Panel 0.9. 8.846 Command Execution</td>
                 <td>
                  <div className="cr"> <div className="d-g"></div>Critical</div>
                 

                 </td>
                 </tr>

               </tbody>
               <tbody>
                 <tr><td>CVE-2019-13360</td>
                 <td>CentOS Control Web Panel 0.9.8.836 Authentication Bypass</td>
                 <td>
                  <div className="cr"><div className="d-r"></div>High</div>
                  

                 </td>
                 </tr>

               </tbody>
               <tbody>
                 <tr><td>CVE-2019-13359</td>
                 <td>CentOS Control Web Panel 0.9.8.836 Privilege Escalation</td>
                 <td>
                  <div className="cr"> <div className="d-y"></div>Medium</div>
                 

                 </td>
                 </tr>

               </tbody>
             </table>
              {/**table */}
  
      
       <button className="readmore">READ MORE</button> 
   </div> {/**wrapper end */}
</div>
         
         

         
  )
}

export default Public1

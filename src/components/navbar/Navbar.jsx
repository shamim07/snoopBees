import { Link,  } from 'react-scroll';
import  { useState } from 'react'
import './navbar.css'

export default function Navbar() { 

  const [fix, setFix] = useState(false)
  function setFixed(){
      if(window.scrollY >=100){
          setFix(true)
      }else{
          setFix(false)
      }
  }
  
 
  window.addEventListener("scroll", setFixed)
  const [menuOpen, setMenuOpen] = useState(false);
  return (
   
    <header className={fix ? 'heading  fixed' : 'heading'}>
    
     <div className="logo"> <Link to='Header'> <img src="/img/logo.png" alt="SnoopBees" /></Link>
     </div>
       
       <div className="menu" onClick={() => setMenuOpen(!menuOpen)}  >
      <img src='/img/hamburg-menu-2.png'/>
     
        </div>

       <ul className={ menuOpen ? "open" : ""}>
       
        <li className='navitem'  ><Link to='Wedo' 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  >Services</Link></li>
        
        <li className="navitem"><Link to ='Training'   
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >Training</Link></li>
        
        <li className="navitem"><Link to='Certificate'  
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >Certificates</Link>
        </li>
        
        <li className="navitem" > <Link to='Public1' 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  >Advisories</Link></li>
        
        <li className="navitem"  ><Link to='Contact' 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>Contact</Link> </li>
       
    
                        
                        
                       
         <a className="launch" >Launch App </a>  
         </ul>
       
      
    
      
    
  </header>
  )
}

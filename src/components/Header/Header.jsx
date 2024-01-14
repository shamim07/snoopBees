
import  './Header.css'

function header() {
 
  return ( <div className='headd' id='Header'>
   
    <scetion id="up"></scetion>
    <section id="down"> </section> 
       <div className='wrapper'>
  
        <div className='imgtext'>
        <div className="headertext">
      <h5 className='treading'>TREATING SECURITY AS A JOKE</h5>
          <h1 className="why">Why Treating <br /> Security as a <br /> Joke is Risky <br />        Business.</h1>
            <h5 className="joke">Treating security as a joke can have serious <br/>consequences. With the increasing frequency of cyber<br/> attacks and data breaches, it is essential to take security<br/> seriously. Failing to do so can result in financial losses,<br/> damage to reputation, and even legal consequences.</h5>
          <button id='btn-get'>Get Service</button>
          </div>
                  <div className="headerimg">
          <img className='img1' src="../../../public/img/hero-right-img.png "alt='hero' />
        </div>
   </div>
</div>
   
    </div>
  )
}

export default header
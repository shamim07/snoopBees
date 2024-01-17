
import  './Header.css'

function header() {
 
  return ( <div className='headd' id='Header'>
   
    <scetion id="up"></scetion>
    <section id="down"> </section> 
       <div className='wrapper'>
  
        <div className='imgtext'>
        <div className="headertext">
      <h5 className='treading'>TREATING SECURITY AS A JOKE</h5>
          <h1 className="why">Why Treating  Security  as a Joke is Risky  Business.</h1>
            <h5 className="joke">Treating security as a joke can have serious consequences. With the increasing frequency of cyber attacks and data breaches, it is essential to take security seriously. Failing to do so can result in financial losses, damage to reputation, and even legal consequences.</h5>
          <button id='btn-get'>Get Service</button>
          </div>
                  <div className="headerimg">
          <img className='img1' src="/img/hero-right-img.png"alt='hero' />
        </div>
   </div>
</div>
   
    </div>
  )
}

export default header
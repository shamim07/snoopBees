
import Header from'./components/Header/Header'
import Navbar from './components/navbar/Navbar';
import Public1 from './components/Public1/Public1';
import  Wedo from './components/whatwedo/Wedo';
import Training from './components/training/Training'
import  Contact from './components/Contact/Contact';
import Whysnoop from './components/whysnoopbees/Whysnoop';
import Certificate from './components/Certificate/Certificate';

const App = () => {
  return(
  <>
  <Navbar/>
   <Header/>
    <Wedo/>
    <Training/>
     <Whysnoop/>
     <Certificate/>
      <Public1/>
       <Contact/>
    </>  


  
 
 )
}
export default App

import React,{useState} from 'react'
import Navbar from './Compoenents/Navbar/Navbar'
import Hero from './Compoenents/Hero/Hero'
import Programs from './Compoenents/Programs/Programs'
import Tittle from './Compoenents/Tittle/Tittle'
import About from './Compoenents/About/About'
import Campus from './Compoenents/Campus/Campus'
import Testimonals from './Compoenents/Testimonals/Testimonals'
import Contact from './Compoenents/Contact/Contact'
import Footer from './Compoenents/Footer/Footer'
import VideoPlayer from './Compoenents/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState,setPlayState] = useState(false)
  return (
    <div>
   

    <Navbar/>
    <Hero/>
    <div className='container'>
    <Tittle subTittle ='Our Program' tittle ='What We Offer'/>
    <Programs/>
    <About setPlayState ={setPlayState} />
    <Tittle subTittle ='Gallery' tittle ='Campus Photos'/>
    <Campus/>
    <Tittle subTittle ='TESTIMONALS' tittle ='What Student Says'/>

    <Testimonals/>
    <Tittle subTittle ='Contact Us' tittle ='Get in Touch'/>
    <Contact/>
    <Footer/>
    </div>
    <VideoPlayer playState ={playState}  setPlayState={setPlayState}/>


    

      
    </div>
  )
}

export default App



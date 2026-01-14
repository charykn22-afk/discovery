import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
//import Shows from './Components/Shows/Shows'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Species from './Components/Species/Species'
import Schedule from './Components/Schedule/Schedule'
import Footer from './Components/Footer/Footer'
import Episodes from './Components/Episodes/Episodes'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAMS' title='No Stopping Once Started Play' />
        {/*<Shows/> */}
        <Episodes/>
        <About />
         <Title subTitle='Gallery' title='Species' />
         <Species/>
         <Title subTitle='Schedule' title='What Nature Says' />
         <Schedule/>
         <Title subTitle='' title='Follow Us!' />
         <Footer/>
      </div>
    </div>
  )
}

export default App

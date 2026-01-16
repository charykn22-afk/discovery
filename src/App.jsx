import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Added Router imports
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Species from './Components/Species/Species'
import Schedule from './Components/Schedule/Schedule'
import Footer from './Components/Footer/Footer'
import Episodes from './Components/Episodes/Episodes'
import Videoplayer from './Components/Videoplayer/Videoplayer'
import Explore from './Components/Explore/Explore'

const App = () => {
  const [playState, setPlayState] = React.useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <div className="container">
              <Episodes />
              <About setPlayState={setPlayState} />
              <Title subTitle='Gallery' title='Species' />
              <Species />
              <Title subTitle='Schedule' title='What Nature Says' />
              <Schedule />
              <Title subTitle='' title='Follow Us!' />
              <Footer />
            </div>
            {/* The Video Player sits here on the Home Page */}
          {/* <Videoplayer/> */}
          </div>
        } />

        {/* The New Tab Route for 'Explore More' */}
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
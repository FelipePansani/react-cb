import React from 'react'
import './App.css';
import Navbar from './components/upperComponents/Navbar'
import SocialMediaBar from './components/upperComponents/SocialMediaBar'
import Carousel from './components/upperComponents/Carousel'
import SocialMedia from './components/upperComponents/SocialMedia'
import Cotation from './components/Cotation'
import Footer from './components/Footer'
import Services from './components/Services'
import NotasImprensa from './components/NotasImprensa'
import Converter from './components/Converter'
import Panorama from './components/Panorama'
import BottomComponent from './components/BottomComponent'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div>
      {/* upper componentes */}
      <Navbar  />
      <div className="socialmediabar">
        <SocialMediaBar />
      </div>
      <div className="App">
        <Carousel />
        <div className="socialmedia">
          <SocialMedia />
        </div>
        {/* upper componentes */}
        <div className="lowerComponents">
          <div style={{ flex: 1 }}>
            <Cotation />
            <Converter />
          </div>
          <div style={{ flex: 1 }}>
            <Services />
            <NotasImprensa />
          </div>
          <div style={{ flex: 1 }}>
            <Panorama />
            <BottomComponent />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

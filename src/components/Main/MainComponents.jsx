import React from 'react'
import { useState, useEffect } from 'react';
import MainCss from './MainComponents.module.css'
import Cotation from './Cotation/Cotation'
import Panorama from './Panorama/Panorama'
import Services from './Servicos/Services'
import NotasImprensa from './Notas/NotasImprensa'
import Converter from './Converter/Converter'
import BottomComponent from './BottomComponent/BottomComponent'

function MainComponents() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handle = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handle);
  }, [])

  if (width <= 1115) {
    return (
      <div className={MainCss.mainComponent}>
        <div className={MainCss.smallScreenMainFirstRow}>
          <div>
            <Cotation />
            <Converter />
          </div>
          <div>
            <Services />
            <NotasImprensa />
          </div>
        </div>
        <Panorama />
        <BottomComponent />
      </div>
    )
  }

  return (
    <div className={MainCss.mainComponent}>
      <div>
        <Cotation />
        <Converter />
      </div>
      <div>
        <Services />
        <NotasImprensa />
      </div>
      <div>
        <Panorama />
        <BottomComponent />
      </div>
    </div>
  );
}

export default MainComponents;

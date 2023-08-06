import { React, useState } from 'react';
import './App.css';
import Menu from './components/Top/Menu/Menu';
import TopComponents from './components/Top/TopComponents';
import MainComponents from './components/Main/MainComponents';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Transition } from 'react-transition-group';
import MenuCSS from './components/Top/Menu/Menu.module.css'

library.add(fab, faCheckSquare, faCoffee);

function App() {

  const [open, setOpen] = useState(false)

  const defaultStyle = {
    transition: 'transform 400ms ease-in',
    transform: 'translateX(-100%)',
  }

  const transitionStyles = {
    entering: { transform: 'translateX(0%)' },
    entered: { transform: 'translateX(0%)' },
    exiting: { transform: 'translateX(0%)' },
    exited: { transform: 'translateX(-100%)' },
  };

  return (
    <div className='App'>
        <Transition in={open} timeout={100}>
          {state => (
            <div className={MenuCSS.menu} style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <Menu setOpen={setOpen} />
            </div>
          )}
        </Transition>
    
      <TopComponents setOpen={setOpen} />
      {!open && (
        <div>
          <MainComponents />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

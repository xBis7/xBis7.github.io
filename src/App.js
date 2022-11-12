import './App.css';
import React from 'react';
import { useState } from 'react';
import ScrollSpy from 'react-ui-scrollspy';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const ActiveItemContext = React.createContext({
  activeItem: 'home',
  setActiveItem: () => {}
});

function App() {

  const [activeItem, setActiveItem] = useState();

  const value = { activeItem, setActiveItem };

  return (
    <div className="App">
      <ActiveItemContext.Provider value={value}>
        <NavigationBar/>
        <ScrollSpy onUpdateCallback={(id) => setActiveItem(id.charAt(0).toUpperCase() + id.slice(1))} scrollThrottle={100} useBoxMethod={false}>
          <Home/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
        </ScrollSpy>
        <Footer/>
      </ActiveItemContext.Provider>
    </div>
  );
}

export default App;

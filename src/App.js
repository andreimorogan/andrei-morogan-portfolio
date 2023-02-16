import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Body from './containers/Body'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import AboutMe from './components/AboutMe'
import Lorem from './components/Lorem'
import Fade from 'react-reveal/Fade'

function App() {
  return (
    <React.StrictMode>
      <>
        <Body>
          <Navbar />
          <Fade >
            <Greeting />
            <AboutMe />
          </Fade>
          <Footer />
        </Body>
      </>
    </React.StrictMode>
  );
}

export default App;

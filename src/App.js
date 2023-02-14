import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Body from './containers/Body'
import Footer from './components/Footer'
import Greeting from './components/Greeting'

function App() {
  return (
    <React.StrictMode>
      <>
        <Body>
          <Navbar />
          <Greeting />
          <Footer />
        </Body>
      </>
    </React.StrictMode>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Body from './containers/Body'

function App() {
  return (
    <React.StrictMode>
      <>
        <Body>
          <Navbar />
        </Body>
      </>
    </React.StrictMode>
  );
}

export default App;

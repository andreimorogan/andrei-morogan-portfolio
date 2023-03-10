import React from 'react';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import { Routes, Route, HashRouter} from 'react-router-dom'
import Contact from './pages/Contact'

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
          <Routes>
            <Route index element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Projects />} />
          </Routes>
      </HashRouter>
    </React.StrictMode>
  );
} 

export default App;

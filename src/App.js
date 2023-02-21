import React from 'react';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <main>
          <Routes>
            <Route index element={<About />} />
            <Route path='projects' element={<Projects />} />
          </Routes>
        </main>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

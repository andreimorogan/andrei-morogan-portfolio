import React from 'react';
import Navbar from '../components/Navbar';
import Body from '../containers/Body';
import Footer from '../components/Footer';
import { Fade } from "react-awesome-reveal";
import Placeholder from '../components/Placeholder';

function Projects() {
  return (
    <React.StrictMode>
      <>    
        <Body>
          <Navbar />
          <Fade triggerOnce="true" delay="70">
            <Placeholder />
            <Footer />
          </Fade>
        </Body>
      </>
    </React.StrictMode>
  );
}

export default Projects;

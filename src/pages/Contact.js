import React from 'react';
import Navbar from '../components/Navbar';
import Body from '../containers/Body';
import Footer from '../components/Footer';
import { Fade } from "react-awesome-reveal";
import ContactSection from '../components/ContactSection';
import Form from '../components/Form';

function Contact() {
  return (
    <React.StrictMode>
      <>    
        <Body>
          <Navbar />
          <Fade triggerOnce="true" delay="70">
            <ContactSection />
            <Form />
            <Footer />
          </Fade>
        </Body>
      </>
    </React.StrictMode>
  );
}

export default Contact;

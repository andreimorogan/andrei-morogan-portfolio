import React from 'react';
import Navbar from '../components/Navbar';
import Body from '../containers/Body';
import Footer from '../components/Footer';
import { Fade } from "react-awesome-reveal";
import ContactSection from '../components/ContactSection';
import Form from '../components/Form';
import ContactIcons from '../components/ContactIcons';

function Contact() {
  return (
    <React.StrictMode>
      <>    
        <Body>
          <Fade triggerOnce="true" cascade>
            <ContactIcons />
            <Navbar />
            <ContactSection />
            <Form />
          </Fade>
          <ContactIcons />
          <Footer />
        </Body>
      </>
    </React.StrictMode>
  );
}

export default Contact;

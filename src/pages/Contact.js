import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Body from '../containers/Body/Body';
import Footer from '../components/Footer/Footer';
import { Fade } from 'react-awesome-reveal';
import ContactSection from '../components/ContactSection/ContactSection';
import Form from '../components/Form/Form';
import ContactIcons from '../components/ContactIcons/ContactIcons';

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

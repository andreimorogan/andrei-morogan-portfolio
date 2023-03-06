import React from 'react';
import Navbar from '../components/Navbar';
import Body from '../containers/Body';
import Footer from '../components/Footer';
import GreetingCard from '../components/GreetingCard';
import SectionCard from '../components/SectionCard';
import { Fade } from "react-awesome-reveal";
import SkillsCard from '../components/SkillsCard';
import Button from "../components/Button"
import InlineContainer from '../containers/InlineContainer';
import ContactIcons from '../components/ContactIcons';

function About() {
  return (
    <React.StrictMode>
      <>
        <Body>
          <Fade triggerOnce="true" cascade>
            <ContactIcons />
            <Navbar />
            <GreetingCard />
            <SectionCard />
          </Fade>
          <Fade triggerOnce="true">
            <SkillsCard />
            <InlineContainer>
              <Button text={'Contact'} link={'contact'} />
              <Button text={'My Projects'} link={'projects'} /> 
            </InlineContainer>
          </Fade>
          <Footer />
          <ContactIcons />
        </Body>
      </>
    </React.StrictMode>
  );
}

export default About;

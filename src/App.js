import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './containers/Body';
import Footer from './components/Footer';
import GreetingCard from './components/GreetingCard';
import SectionCard from './components/SectionCard';
import { Fade } from "react-awesome-reveal";
import SkillsCard from './components/SkillsCard';
import Button from "./components/Button"
import InlineContainer from './containers/InlineContainer';

function App() {
  return (
    <React.StrictMode>
      <>
        <Body>
          <Navbar />
          <Fade triggerOnce="true">
            <GreetingCard />
            <SectionCard />
            <SkillsCard />
            <InlineContainer>
              <Button text={'Contact'} />
              <Button text={'My Projects'} /> 
            </InlineContainer>
            <Footer />
          </Fade>
        </Body>
      </>
    </React.StrictMode>
  );
}

export default App;

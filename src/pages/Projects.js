import Navbar from '../components/Navbar/Navbar';
import Body from '../containers/Body/Body';
import Footer from '../components/Footer/Footer';
import { Fade } from "react-awesome-reveal";
import ContactIcons from '../components/ContactIcons/ContactIcons';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import logo from '../assets/logo.svg';
import GridContainer from '../containers/GridContainer/GridContainer';
import BootShop from '../assets/boot-shop.svg';
import FaceRecognition from '../assets/face-recognition.png';

function Projects() {
  return (
      <>    
        <Body>
          <Navbar />
          <Fade triggerOnce="true" cascade>
            <ContactIcons />
            <GridContainer>
              <ProjectCard link='https://andreimorogan.github.io/boot-shop/' gitLink={'https://github.com/andreimorogan/boot-shop'}  logo={BootShop} name={'The Boot Shop'} description={'Work-in-progress. A fictional e-commerce with the front-end built using React-Bootstrap.'} />
              <ProjectCard link='#' gitLink={'https://github.com/andreimorogan/face-recognition'}  logo={FaceRecognition} name={'Face recognition app'} description={'Work-in-progress. An app that detects faces from images, with the help of the Clarifai API.'} />
              <ProjectCard link='#' gitLink={'https://github.com/andreimorogan/andrei-morogan-portfolio'}  logo={logo} name={'My Portfolio'} description={'Pretty much done. My personal hub for hosting my projects and other relevant info.'} />
            </GridContainer>
          </Fade>
          <Footer />
          <ContactIcons />
        </Body>
      </> 
  );
}

export default Projects;

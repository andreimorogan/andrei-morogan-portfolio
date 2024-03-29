import styles from './ProjectCard.module.css';
import common from '../../styles/Common.module.css';
import { AiFillGithub} from 'react-icons/ai';
import { IconContext } from 'react-icons';



const ProjectCard = ({logo, name, description, link, gitLink}) => {
    return (
        <div>
            <div className={`${styles.wrapper}`}>
                <IconContext.Provider value={{size: '1.5rem' }}>
                    <a className={styles.github} href={gitLink} target="_blank"><AiFillGithub /></a>
                </IconContext.Provider>
                <a href={link} target="_blank">
                    <img className={styles.logo} src={logo} />
                    <p>{name}</p>
                    <p className={common.gray}>{description}</p>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
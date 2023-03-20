import styles from './GridContainer.module.css';
import common from '../../styles/Common.module.css';


const GridContainer = (props) => {
    return(
        <div>
            <div className={`${styles['grid-container']}`}>
                {props.children}
            </div>
            <p className={`${common.aligned}`} style={{marginTop: "3rem"}}>...and more to come!</p>
        </div>

        
    );
}

export default GridContainer;
import styles from '../styles/GreetingCard.module.css';
import common from "../styles/Common.module.css"

const GreetingCard = () => {
    return (
        <section className={styles['main-greeting']}>
            <h1 className={`${common.purple} ${common.small}`}>
                Hello, I'm
            </h1>
            <h3 className={styles.large}>
                Andrei Morogan. 
            </h3>
            <p className={`${styles.large} ${common.gray}`}>I'm a web developer.</p>
        </section>
    );
}

export default GreetingCard;

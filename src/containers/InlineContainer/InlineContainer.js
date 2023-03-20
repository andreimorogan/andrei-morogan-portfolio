import styles from './InlineContainer.module.css';

const InlineContainer = (props) => {
    return(
        <div className={styles['inline-container']}>
            {props.children}
        </div>
    );
}

export default InlineContainer
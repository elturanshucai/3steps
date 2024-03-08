import styles from "./bottom.module.css"

const Bottom = () => {
    return (
        <div className={styles.bottom}>
            <p className={styles.left}>Copyright 2023. All rights reserved to Three Steps</p>
            <div className={styles.right}>
                <a href="#terms">Terms & Conditions</a>
                <a href="#services">Services</a>
                <a href="#careers">Careers</a>
            </div>
        </div>
    )
}

export default Bottom
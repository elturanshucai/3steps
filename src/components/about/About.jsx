import Image from 'next/image'
import styles from './about.module.css'

const About = () => {
    return (
        <section id='about' className={styles.about}>
            <div className={styles.imageDiv}>
                <Image fill alt='about' src="/about.png" />
            </div>
            <div className={styles.aboutContent}>
                <h1 className={styles.title}>Haqqımızda</h1>
                <div className={styles.contentText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
                </div>
                <div className={styles.buttonDiv}>
                    <button className={styles.button}>Ətraflı</button>
                </div>
            </div>
        </section>
    )
}

export default About
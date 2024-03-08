import Image from 'next/image'
import styles from './contact.module.css'
import Form from './Form'

const Contact = () => {
    return (
        <section id='contact' className={styles.contact}>
            <div className={styles.left}>
                <h1 className={styles.title}>Bizimlə əlaqə</h1>
                <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <div className={styles.info}>
                    <p>
                        <Image
                            width={20}
                            height={20}
                            src="/location.svg"
                            alt='location'
                            className={styles.infoIcon}
                        />
                        <span>Ünvan, Adress</span>
                    </p>
                    <p>
                        <Image
                            width={20}
                            height={20}
                            src="/phone.svg"
                            alt='phone'
                            className={styles.infoIcon}
                        />
                        <span>(+994) 00 000 00 00</span>
                    </p>
                    <p>
                        <Image
                            width={20}
                            height={20}
                            src="/mail.svg"
                            alt='mail'
                            className={styles.infoIcon}
                        />
                        <span>email@gmail.com</span>
                    </p>
                </div>
            </div>
            <div className={styles.right}>
                <Form />
            </div>
        </section>
    )
}

export default Contact
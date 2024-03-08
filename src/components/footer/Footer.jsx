import Image from 'next/image'
import Bottom from './Bottom'
import styles from './footer.module.css'

const socials = [
    { url: "/", icon: "/ig.svg" },
    { url: "/", icon: "/fb.svg" },
    { url: "/", icon: "/linkedin.svg" },
    { url: "/", icon: "/twitter.svg" }
]

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.links}>
                    <h2 className={styles.title}>Xüsusi linklər</h2>
                    <div className={styles.linkContent}>
                        <a href="#about">Haqqımızda</a>
                        <a href="#services">Xidmətlər</a>
                    </div>
                    <div className={styles.social}>
                        {socials.map((social, index) => (
                            <a href={social.url} key={index} className={styles.socialIcon}>
                                <Image
                                    width={20}
                                    height={20}
                                    alt='icon'
                                    src={social.icon}
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className={styles.contact}>
                    <h2 className={styles.title}>Əlaqə</h2>
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
                <div className={styles.subscribe}>
                    <h2 className={styles.title}>Abunə ol</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad .</p>
                    <div className={styles.inputDiv}>
                        <input
                            type="email"
                            placeholder='Email  ünvanı daxil edin'
                            className={styles.input}
                        />
                        <button className={styles.button}>
                            <Image
                                alt='icon'
                                src="/mail.svg"
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <Bottom />
        </footer>
    )
}

export default Footer
import Image from 'next/image'
import styles from './form.module.css'

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.inputs}>
                <div className={styles.inputDiv}>
                    <Image
                        width={20}
                        height={20}
                        alt='user'
                        src="/user.svg"
                    />
                    <input
                        type="text"
                        placeholder='Ad, Soyad'
                        name='username'
                        autoComplete='off'
                    />
                </div>
                <div className={styles.inputDiv}>
                    <Image
                        width={20}
                        height={20}
                        alt='mail'
                        src="/mail.svg"
                    />
                    <input
                        type="email"
                        placeholder='E Mail'
                        name='email'
                        autoComplete='off'
                    />
                </div>
                <div className={styles.inputDiv}>
                    <Image
                        width={20}
                        height={20}
                        alt='phone'
                        src="/phone.svg"
                    />
                    <input
                        type="tel"
                        placeholder='Telefon'
                        name='phone'
                        autoComplete='off'
                    />
                </div>
                <div className={styles.inputDiv}>
                    <Image
                        width={20}
                        height={20}
                        alt='info'
                        src="/info.svg"
                    />
                    <input
                        type="text"
                        placeholder='Mövzu'
                        name='content'
                        autoComplete='off'
                    />
                </div>
            </div>
            <div className={styles.inputDivFull}>
                <Image
                    width={20}
                    height={20}
                    alt='pen'
                    src="/pen.svg"
                />
                <input
                    type="text"
                    placeholder='Sizə nece kömək edə bilərik?'
                    name='message'
                    autoComplete='off'
                />
            </div>
            <button className={styles.button}>Göndər</button>
        </form>
    )
}

export default Form
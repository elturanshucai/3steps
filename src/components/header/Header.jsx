"use client"
import Image from 'next/image'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Image
                alt='logo'
                src="/logo.png"
                width={277}
                height={60}
            />
            <nav className={styles.links}>
                <a href="#">Əsas səhifə</a>
                <a href="#about">Haqqımızda</a>
                <a href="#products">Məhsullar</a>
                <a href="#services">Xidmətlərimiz</a>
                <a href="#contact">Əlaqə</a>
            </nav>
        </header>
    )
}

export default Header
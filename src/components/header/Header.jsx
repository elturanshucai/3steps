"use client"
import Image from 'next/image'
import styles from './header.module.css'
import { useEffect, useState } from 'react'

const Header = () => {
    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 0 ? setScrolling(true) : setScrolling(false)
        }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])
    return (
        <header className={`${scrolling ? styles.scrollHeader : styles.header}`}>
            <Image
                alt='logo'
                src="/logo.png"
                width={277}
                height={60}
                className={styles.logo1}
            />
            <Image
                alt='logo'
                src="/logo2.png"
                width={277}
                height={60}
                className={styles.logo2}
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
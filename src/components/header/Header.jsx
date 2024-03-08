"use client"
import Image from 'next/image'
import styles from './header.module.css'
import { useEffect, useState } from 'react'
import MenuIcon from '../menuIcon/MenuIcon'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const [scrolling, setScrolling] = useState(() => {
        if (window.scrollY > 0) return true
        return false
    })

    const clickLink = () => {
        setMenu(prev => !prev)
    }

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
            <nav className={`${styles.links} ${menu && styles.mobileLinks}`}>
                <a href="#" onClick={clickLink}>Əsas səhifə</a>
                <a href="#about" onClick={clickLink}>Haqqımızda</a>
                <a href="#products" onClick={clickLink}>Məhsullar</a>
                <a href="#services" onClick={clickLink}>Xidmətlərimiz</a>
                <a href="#contact" onClick={clickLink}>Əlaqə</a>
            </nav>
            <MenuIcon setMenu={setMenu} scroll={scrolling} />
        </header>
    )
}

export default Header
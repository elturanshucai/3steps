import Header from "../header/Header"
import styles from './home.module.css'

const HomePage = () => {

    return (
        <section id="#" className={styles.homepage}>
            <Header />
            <div className={styles.text}>
                <h1>İT Həllər mərkəzinə <br /> Xoş gəlmisiniz!</h1>
                <p>Uğura üç addım Şüarımızla əhatə olunmuş və asanlaşdırılmış yanaşmamızla innivasiyaları kəşf edin. Rəqəmsal uğurunuzu üç  səmərəli addımda təmin edərək, sizə qabaqcıl həllər vasitəsilə bələdçilik etdiyimiz strateji və sadələşdirilmiş səhayətdən zövq alın.</p>
            </div>
        </section>
    )
}

export default HomePage
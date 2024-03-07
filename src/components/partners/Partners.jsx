import styles from './partners.module.css'

const partners = [
    { title: 'Proyekt', count: 90 },
    { title: 'Proyekt', count: 90 },
    { title: 'Partnyor', count: 26 },
    { title: 'Müştəri', count: 75 }
]

const Partners = () => {
    return (
        <section id='partners' className={styles.partners}>
            {partners.map((partner, index) => (
                <div className={styles.partnerItem} key={index}>
                    <div className={styles.count}>{partner.count}</div>
                    <div className={styles.title}>{partner.title}</div>
                </div>
            ))}
        </section>
    )
}

export default Partners
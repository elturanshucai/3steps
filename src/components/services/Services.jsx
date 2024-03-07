import ServiceItem from './ServiceItem'
import styles from './services.module.css'

const services = [
    { title: 'Development', icon: '/development.svg' },
    {title: 'Graphic &UI/UX design', icon:'/design.svg'},
    {title: 'Restaurant POS Systems', icon:'/posss.svg'},
    {title: 'CCTV systems', icon:'/cctv.png'},
    {title: 'Smart residence', icon:'/smart.svg'},
    {title: 'Hosting', icon:'/security.svg'}
]

const Services = () => {
    return (
        <section id='services' className={styles.container}>
            <h1 className={styles.title}>Xidmətlərimiz</h1>
            <div className={styles.services}>
                {services.map((service, index) => (
                    <ServiceItem service={service} key={index} />
                ))}
            </div>
        </section>
    )
}

export default Services
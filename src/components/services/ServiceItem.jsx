import Image from 'next/image'
import styles from './services.module.css'

const ServiceItem = ({ service }) => {
    return (
        <div className={styles.serviceItem}>
            <Image
                alt='icon'
                src={service.icon}
                width={100}
                height={100}
            />
            <p>{service.title}</p>
        </div>
    )
}

export default ServiceItem
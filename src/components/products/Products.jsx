import Image from 'next/image'
import styles from './products.module.css'

const products = [
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', icon: '/product1.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', icon: '/product2.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', icon: '/product3.png' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', iconText: 'MEDBOOKİNG' }
]

const Products = () => {
    return (
        <section id='products' className={styles.products}>
            <h1 className={styles.title}>Məhsullarımız</h1>
            <div className={styles.productsContent}>
                {products.map((product, index) => (
                    <div key={index} className={styles.product}>
                        {product.icon ?
                            <div className={styles.imageDiv}>
                                <Image fill src={product.icon} alt='icon' />
                            </div>
                            :
                            <p className={styles.iconText}>{product.iconText}</p>
                        }
                        <p className={styles.productTitle}>{product.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products
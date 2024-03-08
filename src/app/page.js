import About from "@/components/about/About";
import HomePage from "@/components/home/HomePage";
import Services from "@/components/services/Services";
import styles from './page.module.css'
import Header from "@/components/header/Header";
import Partners from "@/components/partners/Partners";
import Products from "@/components/products/Products";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <HomePage />
      <Services />
      <About />
      <Partners />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
import About from "@/components/about/About";
import HomePage from "@/components/home/HomePage";
import Services from "@/components/services/Services";
import styles from './page.module.css'
import Header from "@/components/header/Header";

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <HomePage />
      <Services />
      <About />
    </main>
  );
}
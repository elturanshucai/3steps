import About from "@/components/about/About";
import HomePage from "@/components/home/HomePage";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main>
      <HomePage />
      <Services/>
      <About/>
    </main>
  );
}
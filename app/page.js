import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Companies from "@/components/Companies/Companies";
import Services from "@/components/Services/Services";
import Dashboard from "@/components/Dashboard/Dashboard";
import Features from "@/components/Features/Features";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Companies />
      <Services />
    </main>
  );
}
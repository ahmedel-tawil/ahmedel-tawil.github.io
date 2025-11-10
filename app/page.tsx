import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Certifications from "@/components/Certifications/Certifications";
import Contact from "@/components/Contact/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navigation/>
            <Hero/>
            <About/>
            <Projects/>
            <Experience/>
            <Skills/>
            <Certifications/>
            <Contact/>
        </main>
    );
}

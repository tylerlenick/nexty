import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Link from 'next/link';
import Date from '../components/date';

export default function Home() {
  return (
    <div className="h-screen bg-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Tyler Dev</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      {/*<section id="about" className="snap-center">
        <About />
      </section>*/}

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact */}
    </div>
  );
}
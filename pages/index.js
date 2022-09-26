import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Hero from '../components/Hero';
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

      <section id="aboutSection" className="snap-start">
        <About />
      </section>
      {/* Experience */}

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact */}
    </div>
  );
}
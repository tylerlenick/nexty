import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Link from 'next/link';
import Date from '../components/date';

export default function Home() {
  return (
    <div className="bg-blue-500 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Tyler Dev</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="here" className="snap-center">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Projects */}

      {/* Contact */}
    </div>
  );
}
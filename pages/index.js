import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Link from 'next/link';
import Date from '../components/date';
import fsPromises from 'fs/promises'
import path from 'path'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default function Home(props) {
  const jobs = props.jobs;
  const skills = props.skills;
  
  return (
    <div className="h-screen bg-white snap-y snap-mandatory overflow-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-slate-900">
      <Head>
        <title>Tyler Dev</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="skills" className="snap-start">
        <Skills props={skills}/>
      </section>

      <section id="experience" className="snap-center">
        <Experience props={jobs}/>
      </section>

      {/* Projects */}

      {/* Contact */}
    </div>
  );
}
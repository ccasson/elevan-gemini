import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import WhyElevan from '../components/sections/WhyElevan';
import Services from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials'; // Already imported
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Elevan - OnlyFans Agency</title>
        <meta name="description" content="Elevate Your OnlyFans. Maximize Your Earnings. Partner with Elevan, the premier OnlyFans agency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <WhyElevan />
          <Services />
          <Pricing />
          <Testimonials /> {/* Already rendered */}
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

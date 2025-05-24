import Head from 'next/head';
import Hero from '../components/sections/Hero';
import WhyElevan from '../components/sections/WhyElevan';
import Services from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import About from '../components/sections/About';
import ApplyForm from '../components/sections/ApplyForm';
import { useEffect } from 'react';

export default function HomePage() {
  // For Intersection Observer based animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: unobserve after animation
            // observer.unobserve(entry.target); 
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);


  return (
    <>
      <Head>
        <title>Elevan | Premier OnlyFans Management & Growth Agency</title>
        <meta name="description" content="Elevan helps OnlyFans creators maximize earnings and streamline management. Partner with us for expert growth strategies. You keep 100% of subscription revenue." />
        <meta property="og:title" content="Elevan | Premier OnlyFans Management & Growth Agency" />
        <meta property="og:description" content="Elevan helps OnlyFans creators maximize earnings and streamline management. Partner with us for expert growth strategies. You keep 100% of subscription revenue." />
        <meta property="og:image" content="https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop&crop=focalpoint&dpr=1" /> {/* Replace with your actual OG image URL */}
        <meta property="og:url" content="https://your-elevan-website.com" /> {/* Replace with your actual domain */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Hero />
      <WhyElevan />
      <Services />
      <Pricing />
      <Testimonials />
      <About />
      <ApplyForm />
    </>
  );
}

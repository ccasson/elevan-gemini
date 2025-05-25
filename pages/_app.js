// pages/_app.js
import React from 'react';
import '../styles/globals.css';
import GlobalParticles from '../components/common/Particles';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative overflow-hidden min-h-screen bg-brand-dark font-sans">
      <GlobalParticles className="fixed inset-0 z-0" />
      <Navbar />
      <main className="relative z-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

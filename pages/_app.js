// pages/_app.js
import '../styles/globals.css';
import GlobalParticles from '../components/common/Particles';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen bg-brand-dark font-sans overflow-x-hidden">
      {/* Background particles rendered globally */}
      <GlobalParticles className="fixed top-0 left-0 w-full h-full z-0" />

      {/* Site layout */}
      <Navbar />
      <main className="relative z-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

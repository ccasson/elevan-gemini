import '../styles/globals.css';
import GlobalParticles from '../components/common/Particles';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen bg-brand-dark font-sans overflow-x-hidden">
      {/* fixed, full-screen particles behind everything */}
      <GlobalParticles className="fixed inset-0 z-[-1]" />

      {/* sticky header */}
      <Navbar />

      {/* page content */}
      <main className="relative z-10">
        <Component {...pageProps} />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default MyApp;

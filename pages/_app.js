import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { MotionConfig } from 'framer-motion';

// Import react-slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  );
}

export default MyApp;

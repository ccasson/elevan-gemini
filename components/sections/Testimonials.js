// components/sections/Testimonials.js
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Image from 'next/image';
import { LuQuote } from 'react-icons/lu';

// Make sure these imports are in _app.js or globals.css:
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    quote: "Partnering with Elevan was the best decision for my OnlyFans career. My earnings tripled in just three months, and I finally have time to focus on creating amazing content!",
    name: 'Jessica M.',
    handle: '@JessDreamsOF',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    quote: "The team at Elevan is incredibly professional and supportive. They handle everything seamlessly, from chatting to promotion. I feel so much less stressed and more successful.",
    name: 'Chloe B.',
    handle: '@SweetChloeB',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    quote: "I was hesitant about agencies, but Elevan proved me wrong. They're transparent, results-driven, and genuinely care about their creators. My growth has been explosive!",
    name: 'Sophia R.',
    handle: '@SophiaRoseVIP',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section id="testimonials" className="section-padding"> {/* transparent to show global bg */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headings text-center text-white mb-2">
            Success <span className="text-brand-accent">Stories</span>
          </h2>
          <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from creators who have transformed their careers with Elevan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="px-2 md:px-0"> {/* ensure full-width on mobile */}
            <Slider {...settings}>
              {testimonialsData.map((t, i) => (
                <div key={i} className="px-2 md:px-4">
                  <Card className="bg-brand-dark text-center" hoverEffect={false}>
                    <LuQuote className="text-brand-accent text-5xl mx-auto mb-6 opacity-50" />
                    <p className="text-lg md:text-xl italic text-gray-200 mb-8 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-brand-accent">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={64}
                          height={64}
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold font-headings text-white">
                          {t.name}
                        </h4>
                        <p className="text-sm text-brand-accent">{t.handle}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

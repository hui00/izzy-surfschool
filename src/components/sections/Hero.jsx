import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Clock, MapPin, MessageCircle, Star } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';
import { whatsappUrl } from "@/lib/contact";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSurf = () => {
    const surfSection = document.getElementById('surf');
    if (surfSection) {
      surfSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroStats = [
    { icon: <Star className="h-4 w-4 text-yellow-300 fill-current" />, label: t('hero.statRating') },
    { icon: <MapPin className="h-4 w-4 text-blue-100" />, label: t('hero.statLocation') },
    { icon: <Clock className="h-4 w-4 text-blue-100" />, label: t('hero.statDuration') },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500"
    >
      <div className="absolute inset-0 z-0">
        <img 
          alt={t('hero.altImage')}
          className="w-full h-full object-cover opacity-60"
         src="Logo_and_background/Izzy_surf_school5.jpg" />  
        <div className="absolute inset-0 bg-blue-950/45" />
      </div>

      <div className="container-custom relative z-10 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-100 mb-4">
            {t('hero.eyebrow')}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <Trans i18nKey="hero.title">
              Surf lessons in <span className="text-yellow-300">Senggigi</span>
            </Trans>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-500 text-white hover:bg-green-600 text-lg px-8 py-3"
            >
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('hero.bookWhatsApp')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/70 bg-white/10 text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3"
              onClick={scrollToSurf}
            >
              {t('hero.seeLesson')}
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-center gap-2 rounded-md bg-white/12 px-4 py-3 text-sm font-medium backdrop-blur-sm">
                {stat.icon}
                {stat.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#surf" className="text-white">
          <ChevronDown className="h-8 w-8" />
        </a>
      </motion.div>

      <div className="hero-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
    
  );
};

export default Hero;

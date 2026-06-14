import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, ThumbsUp, Award } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      titleKey: "aboutSection.idealLocation",
      descriptionKey: "aboutSection.idealLocationDesc"
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      titleKey: "aboutSection.passionateTeam",
      descriptionKey: "aboutSection.passionateTeamDesc"
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary" />,
      titleKey: "aboutSection.authenticExperience",
      descriptionKey: "aboutSection.authenticExperienceDesc"
    }
  ];

  const lombokFeatures = [
    "aboutSection.lombokFeature1",
    "aboutSection.lombokFeature2",
    "aboutSection.lombokFeature3",
    "aboutSection.lombokFeature4",
    "aboutSection.lombokFeature5",
    "aboutSection.lombokFeature6",
  ];

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <Trans i18nKey="aboutSection.title">
              À Propos de <span className="text-gradient">Nous</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('aboutSection.intro')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img  
                  alt={t('aboutSection.altTeam')} 
                  className="w-full h-auto"
                 src="img/yuska_surfing.jpg" />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-3 right-3 md:-bottom-6 md:-right-6 bg-gradient-to-r from-primary to-blue-400 text-white p-4 rounded-lg shadow-lg flex items-center gap-2"
              >
                <Award className="h-6 w-6"/>
                <p className="font-bold text-lg">{t('aboutSection.experienceYears')}</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">{t('aboutSection.ourStoryTitle')}</h3>
            <p className="text-gray-600 mb-4">
              {t('aboutSection.ourStoryP1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('aboutSection.ourStoryP2')}
            </p>
            <p className="text-gray-600 mb-8">
              {t('aboutSection.ourStoryP3')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 bg-blue-50/50 rounded-lg"
                >
                  <div className="flex justify-center mb-3">{feature.icon}</div>
                  <h4 className="font-semibold mb-1">{t(feature.titleKey)}</h4>
                  <p className="text-sm text-gray-600">{t(feature.descriptionKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-cyan-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('aboutSection.discoverLombokTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img  
                    alt={t('aboutSection.altLombokView')} 
                    className="w-full h-72 object-cover"
                   src="img/lombok-island.png" />
                </div>
                <p className="text-gray-700 mt-4">
                  {t('aboutSection.lombokDescription')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-4 text-primary">{t('aboutSection.whyLombokTitle')}</h4>
                <ul className="space-y-3 text-gray-700">
                  {lombokFeatures.map((featureKey) => (
                    <li key={featureKey} className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

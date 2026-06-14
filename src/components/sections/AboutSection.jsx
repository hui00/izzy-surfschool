import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, ThumbsUp, Award } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const features = [
    { icon: MapPin, titleKey: "aboutSection.idealLocation", descriptionKey: "aboutSection.idealLocationDesc" },
    { icon: Users, titleKey: "aboutSection.passionateTeam", descriptionKey: "aboutSection.passionateTeamDesc" },
    { icon: ThumbsUp, titleKey: "aboutSection.authenticExperience", descriptionKey: "aboutSection.authenticExperienceDesc" },
  ];

  return (
    <section id="about" className="section-padding overflow-hidden bg-muted/40">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow mb-4">Izzy Surf School</span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            <Trans i18nKey="aboutSection.title">
              Meet <span className="text-gradient">Yus</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            {t('aboutSection.intro')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                alt={t('aboutSection.altTeam')}
                className="h-full w-full object-cover"
                src="img/yuska_surfing.jpg"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl bg-gradient-ocean px-5 py-3 shadow-lg sm:-right-5"
            >
              <Award className="h-6 w-6" />
              <p className="text-lg font-bold">{t('aboutSection.experienceYears')}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-2xl font-bold">{t('aboutSection.ourStoryTitle')}</h3>
            <p className="mb-4 text-muted-foreground">{t('aboutSection.ourStoryP1')}</p>
            <p className="mb-4 text-muted-foreground">{t('aboutSection.ourStoryP2')}</p>
            <p className="mb-8 text-muted-foreground">{t('aboutSection.ourStoryP3')}</p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {features.map(({ icon: Icon, titleKey, descriptionKey }, index) => (
                <motion.div
                  key={titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-border/60 bg-white p-5 text-center"
                >
                  <div className="mb-3 flex justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <h4 className="mb-1 font-semibold">{t(titleKey)}</h4>
                  <p className="text-sm text-muted-foreground">{t(descriptionKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

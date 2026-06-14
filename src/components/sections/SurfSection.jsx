import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle2, Clock, Send, Users, Waves } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';
import surfActionImage from "@/media_carousel/surf_action_2.jpg";
import surfSessionVideo from "@/media_carousel/surf_session_1.mp4";
import { whatsappUrl } from "@/lib/contact";

const SurfSection = () => {
  const { t } = useTranslation();

  const lessonHighlights = [
    {
      icon: <Waves className="h-5 w-5 text-primary" />,
      titleKey: "surfSection.waveChoiceTitle",
      descriptionKey: "surfSection.waveChoiceDesc",
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      titleKey: "surfSection.coachingTitle",
      descriptionKey: "surfSection.coachingDesc",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      titleKey: "surfSection.sessionTitle",
      descriptionKey: "surfSection.sessionDesc",
    },
  ];

  const levels = [
    "surfSection.levelBeginner",
    "surfSection.levelIntermediate",
    "surfSection.levelAdvanced",
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="surf" className="section-padding bg-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <Trans i18nKey="surfSection.title">
              Cours de <span className="text-gradient">Surf</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('surfSection.intro')}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-6 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-primary mb-5">
                <Award className="h-4 w-4" />
                {t('surfSection.singleFocus')}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('surfSection.lessonTitle')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('surfSection.lessonIntro')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {levels.map((levelKey) => (
                  <div key={levelKey} className="flex items-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                    {t(levelKey)}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {lessonHighlights.map((item, index) => (
                  <motion.div
                    key={item.titleKey}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="rounded-md border border-blue-100 bg-white p-4"
                  >
                    <div className="mb-3">{item.icon}</div>
                    <p className="font-semibold mb-1">{t(item.titleKey)}</p>
                    <p className="text-sm text-gray-600">{t(item.descriptionKey)}</p>
                  </motion.div>
                ))}
              </div>

              <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-4 w-4" />
                  {t('surfSection.bookLesson')}
                </a>
              </Button>
            </div>

            <div className="bg-blue-950 p-3 md:p-4 grid grid-rows-[1fr_auto] gap-3 min-h-[520px]">
              <img
                alt={t('surfSection.altActionCourse')}
                src={surfActionImage}
                className="h-full min-h-[260px] w-full object-cover rounded-md"
              />
              <div className="grid grid-cols-[0.9fr_1fr] gap-3">
                <video controls playsInline preload="metadata" className="h-44 md:h-52 w-full object-cover rounded-md bg-black">
                  <source src={surfSessionVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="rounded-md bg-white/10 p-4 text-white flex flex-col justify-center">
                  <p className="text-sm uppercase tracking-wide text-blue-100 mb-2">{t('surfSection.mediaLabel')}</p>
                  <p className="text-lg font-semibold">{t('surfSection.mediaTitle')}</p>
                  <p className="text-sm text-blue-100 mt-2">{t('surfSection.mediaDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurfSection;

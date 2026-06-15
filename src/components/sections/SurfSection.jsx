import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle2, MapPin, Send, User, Users, Waves } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';
import { whatsappUrl } from "@/lib/contact";

const SurfSection = () => {
  const { t } = useTranslation();

  const lessonTypes = [
    {
      icon: User,
      titleKey: "surfSection.privateTitle",
      descriptionKey: "surfSection.privateDesc",
    },
    {
      icon: Users,
      titleKey: "surfSection.groupTitle",
      descriptionKey: "surfSection.groupDesc",
    },
  ];

  const levels = [
    "surfSection.levelBeginner",
    "surfSection.levelIntermediate",
    "surfSection.levelAdvanced",
  ];

  const areaNotes = [
    { icon: MapPin, titleKey: "surfSection.areaAlangTitle", descriptionKey: "surfSection.areaAlangDesc" },
    { icon: Waves, titleKey: "surfSection.areaWavesTitle", descriptionKey: "surfSection.areaWavesDesc" },
    { icon: Users, titleKey: "surfSection.areaCrowdsTitle", descriptionKey: "surfSection.areaCrowdsDesc" },
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="surf" className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow mb-4">Lessons</span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
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
            className="mt-4 text-lg text-muted-foreground"
          >
            {t('surfSection.intro')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl bg-white shadow-xl"
        >
          <div>
            <div className="p-8 md:p-12">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                <Award className="h-4 w-4" />
                {t('surfSection.singleFocus')}
              </span>

              <h3 className="mb-4 text-2xl font-bold md:text-3xl">{t('surfSection.lessonTitle')}</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">{t('surfSection.lessonIntro')}</p>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {levels.map((levelKey) => (
                  <div key={levelKey} className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                    {t(levelKey)}
                  </div>
                ))}
              </div>

              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {lessonTypes.map(({ icon: Icon, titleKey, descriptionKey }, index) => (
                  <motion.div
                    key={titleKey}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex flex-col rounded-2xl border border-border/60 bg-white p-5"
                  >
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="font-semibold">{t(titleKey)}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t(descriptionKey)}</p>
                  </motion.div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-green-500 text-white hover:bg-green-600">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-4 w-4" />
                  {t('surfSection.bookLesson')}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-3xl border border-border/60 bg-white p-8 shadow-sm md:p-10"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="eyebrow mb-3">{t('surfSection.areaLabel')}</span>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">{t('surfSection.areaTitle')}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{t('surfSection.areaIntro')}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {areaNotes.map(({ icon: Icon, titleKey, descriptionKey }) => (
                <div key={titleKey} className="rounded-2xl border border-border/60 bg-muted/40 p-5">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mb-1 font-semibold">{t(titleKey)}</p>
                  <p className="text-sm text-muted-foreground">{t(descriptionKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurfSection;

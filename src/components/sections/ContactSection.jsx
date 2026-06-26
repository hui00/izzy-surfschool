import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';
import { PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const MAP_ADDRESS = "G2CQ+247, Senggigi, Batu Layar, West Lombok Regency, West Nusa Tenggara 83355, Indonesia";
const MAP_QUERY = encodeURIComponent(MAP_ADDRESS);
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;
const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

const ContactSection = () => {
  const { t } = useTranslation();

  const contactItems = [
    { icon: MapPin, label: t('contactSection.address'), value: t('contactSection.addressValue') },
    { icon: Phone, label: t('contactSection.phone'), value: PHONE_DISPLAY },
    { icon: Clock, label: t('contactSection.hours'), value: t('contactSection.hoursValue') },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/40">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow mb-4">Contact</span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            <Trans i18nKey="contactSection.title">
              Book your <span className="text-gradient">surf lesson</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            {t('contactSection.intro')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-white md:p-10"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">{t('contactSection.fastestWay')}</p>
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">{t('contactSection.whatsappTitle')}</h3>
            <p className="mb-6 text-white/90">{t('contactSection.whatsappDesc')}</p>

            <Button asChild size="lg" className="w-full bg-green-500 text-white hover:bg-green-600 sm:w-auto">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('contactSection.whatsappButton')}
              </a>
            </Button>

            <div className="mt-8 space-y-5">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p className="text-sm text-white/85">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <p className="mb-4 font-semibold">{t('contactSection.followUs')}</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/yuskaneil3/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white transition-opacity hover:opacity-90">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/yuz.oyozdirty" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-white shadow-sm"
          >
            <div className="p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t('contactSection.meetingPoint')}</p>
              <h3 className="mt-2 text-2xl font-bold">{t('contactSection.mapCardTitle')}</h3>
              <p className="mt-3 text-muted-foreground">{t('contactSection.mapCardDesc')}</p>
            </div>
            <iframe
              src={MAP_EMBED_URL}
              title={t('contactSection.meetingPoint')}
              className="min-h-[320px] w-full flex-grow border-0"
              style={{ display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-border/60 p-4">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t('contactSection.openInMaps')}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

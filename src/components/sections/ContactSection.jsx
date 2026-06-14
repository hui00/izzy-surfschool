import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';
import { PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const ContactSection = () => {
  const { t } = useTranslation();
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Mangsit%2C%20Senggigi%2C%20Lombok%2C%20Indonesia";

  const contactItems = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t('contactSection.address'),
      value: t('contactSection.addressValue'),
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t('contactSection.phone'),
      value: PHONE_DISPLAY,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: t('contactSection.hours'),
      value: t('contactSection.hoursValue'),
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
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
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('contactSection.intro')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-950 text-white rounded-lg p-6 md:p-8"
          >
            <p className="text-sm uppercase tracking-wide text-blue-200 mb-3">{t('contactSection.fastestWay')}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('contactSection.whatsappTitle')}</h3>
            <p className="text-blue-100 mb-6">{t('contactSection.whatsappDesc')}</p>

            <Button asChild size="lg" className="bg-green-500 text-white hover:bg-green-600 w-full sm:w-auto">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('contactSection.whatsappButton')}
              </a>
            </Button>

            <div className="mt-8 space-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-blue-100">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-blue-100">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-semibold mb-3">{t('contactSection.followUs')}</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/yuskaneil3/" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/yuz.oyozdirty" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[420px] overflow-hidden rounded-lg bg-gradient-to-br from-cyan-100 via-blue-100 to-blue-900 p-6 shadow-lg"
          >
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[url('/img/lombok-island.png')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/30 to-blue-950/80" />

            <div className="relative z-10 flex min-h-[372px] flex-col justify-between">
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-md">
                  <MapPin className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                  {t('contactSection.meetingPoint')}
                </p>
                <h3 className="mt-3 max-w-md text-3xl font-bold text-blue-950">
                  {t('contactSection.mapCardTitle')}
                </h3>
                <p className="mt-4 max-w-md text-blue-900">
                  {t('contactSection.mapCardDesc')}
                </p>
              </div>

              <div className="rounded-lg bg-white/90 p-4 shadow-md backdrop-blur-sm">
                <p className="font-semibold text-blue-950">{t('contactSection.addressValue')}</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t('contactSection.openInMaps')}
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {t('contactSection.whatsappButton')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

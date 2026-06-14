import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';
import { whatsappUrl } from "@/lib/contact";

const PricingSection = () => {
  const { t } = useTranslation();

  const includedFeatures = [
    "pricingSection.featureEquipmentSurf",
    "pricingSection.featureInstructors",
    "pricingSection.featureCourseDuration2h",
    "pricingSection.featureDrink",
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <Trans i18nKey="pricingSection.title">
              Nos <span className="text-gradient">Tarifs</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('pricingSection.intro')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-900 text-white rounded-lg p-6 md:p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr_auto] gap-6 items-center">
            <div>
              <p className="text-blue-200 text-sm font-medium mb-1">{t('pricingSection.startingFrom')}</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl md:text-5xl font-bold">350,000</span>
                <span className="text-blue-200 mb-1">IDR {t('pricingSection.priceUnitCourse')}</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">{t('pricingSection.surfCourse')}</h3>
              <p className="text-blue-200">
                {t('pricingSection.surfCourseDesc')}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {includedFeatures.map((featureKey) => (
                  <li key={featureKey} className="flex items-center gap-2 text-sm text-blue-100">
                    <Check className="h-4 w-4 text-green-300 shrink-0" />
                    {t(featureKey)}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              size="lg" 
              className="bg-green-500 text-white hover:bg-green-600"
            >
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t('pricingSection.requestQuote')}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Send } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';

const PricingSection = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const pricingPlans = [
    {
      titleKey: "pricingSection.surfCourse",
      descriptionKey: "pricingSection.surfCourseDesc",
      price: "350,000",
      currency: "IDR",
      durationKey: "pricingSection.priceUnitCourse",
      featuresKeys: [
        "pricingSection.featureEquipmentSurf",
        "pricingSection.featureInstructors",
        "pricingSection.featureCourseDuration2h",
        "pricingSection.featureDrink",
        "pricingSection.featureAnalisys",
        "pricingSection.featureHappyMood",
      ],
      popular: true,
      color: "from-blue-500 to-cyan-400"
    }
  ];

  return (
    <section id="tarifs" className="section-padding bg-gradient-to-b from-blue-50 to-white">
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

        <div className="grid grid-cols-1 max-w-md mx-auto gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className={`h-full overflow-hidden flex flex-col ${plan.popular ? 'border-2 border-primary shadow-lg' : ''} card-hover`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-primary to-blue-400 text-white text-center py-1 text-sm font-medium">
                    {t('pricingSection.popular')}
                  </div>
                )}
                <CardHeader className={`bg-gradient-to-r ${plan.color} text-white`}>
                  <CardTitle className="text-xl">{t(plan.titleKey)}</CardTitle>
                  <CardDescription className="text-white/80">{t(plan.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-3">
                    {plan.featuresKeys.map((featureKey, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                   <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-blue-400 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={scrollToContact}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {t('pricingSection.requestQuote')}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-blue-900 text-white rounded-lg p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">{t('pricingSection.groupOfferTitle')}</h3>
              <p className="text-blue-200">
                {t('pricingSection.groupOfferDesc')}
              </p>
            </div>
             <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50"
              onClick={scrollToContact}
            >
              <Send className="mr-2 h-4 w-4" />
              {t('pricingSection.requestQuote')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';
import { MediaCarousel } from "@/components/ui/media-carousel";
import googleReviewData from "@/data/google-reviews.json";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const googleReviewsUrl = googleReviewData.googleMapsUri;
  const reviews = googleReviewData.reviews;
  const rating = Number(googleReviewData.rating).toFixed(1);
  const reviewCount = t("testimonialsSection.reviewCount", {
    count: googleReviewData.reviewCount,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50 flex justify-center p-4">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <Trans i18nKey="testimonialsSection.title">
              Ce que disent nos <span className="text-gradient">Clients</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t("testimonialsSection.intro")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <Card className="lg:w-80 border-blue-100 bg-white shadow-md">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-11 w-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center font-bold text-lg">
                      G
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{t("testimonialsSection.googleReviews")}</p>
                      <p className="text-sm text-gray-500">{t("testimonialsSection.googleMapsAttribution")}</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-3 mb-3">
                    <p className="text-5xl font-bold text-gray-900">{rating}</p>
                    <div className="pb-1">
                      <div className="flex gap-1 text-yellow-400 mb-1" aria-label={t("testimonialsSection.fiveStarRating")}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{reviewCount}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {t("testimonialsSection.reviewSummary")}
                  </p>
                </div>
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                >
                  {t("testimonialsSection.readOnGoogle")}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-1">
              {reviews.map((review, index) => (
                <motion.div
                  key={`${review.author}-${index}`}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full border-blue-100 bg-white/95 shadow-sm card-hover">
                    <CardContent className="p-5 h-full flex flex-col">
                      <div className="flex gap-1 text-yellow-400 mb-3" aria-hidden="true">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-grow">"{review.text}"</p>
                      <div className="mt-5 pt-4 border-t border-gray-100">
                        <p className="font-semibold text-gray-900">{review.author}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="gap-8 flex justify-center p-4"
        >
          <MediaCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

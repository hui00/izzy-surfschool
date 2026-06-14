import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const quickLinks = [
    { key: "footer.home", href: "#accueil" },
    { key: "footer.surfCourses", href: "#surf" },
    { key: "footer.pricing", href: "#tarifs" },
    { key: "footer.about", href: "#a-propos" },
    { key: "footer.contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
              src="Logo_and_background/logo4.png"
              alt="Logo"
              className="w-16 h-16"
              />
              <span className="text-xl font-bold">Izzy Surf School</span>
            </div>
            <p className="text-blue-100 mb-4">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</p>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.key}>
                  <a href={link.href} className="text-blue-100 hover:text-white transition-colors">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4">{t('footer.contactInfo')}</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5" />
                <span className="text-blue-100">
                  {t('footer.address')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">+62 81917018103</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>{t('footer.copyright', { year: year })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

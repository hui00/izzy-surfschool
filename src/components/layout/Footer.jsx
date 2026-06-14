import React from "react";
import { MapPin, Phone, Instagram } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const quickLinks = [
    { key: "footer.home", href: "#home" },
    { key: "footer.surfCourses", href: "#surf" },
    { key: "footer.reviews", href: "#reviews" },
    { key: "footer.gallery", href: "#gallery" },
    { key: "footer.about", href: "#about" },
    { key: "footer.contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="Logo_and_background/logo4.png" alt="Izzy Surf School logo" className="h-12 w-12 object-contain" />
              <span className="font-display text-xl font-bold text-white">Izzy Surf School</span>
            </div>
            <p className="mb-5 max-w-xs text-sm text-slate-400">{t('footer.tagline')}</p>
            <div className="flex gap-3">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-green-500">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.817 11.817 0 0012.04 0C5.4 0 .04 5.36.04 12a11.9 11.9 0 001.6 5.9L0 24l6.28-1.64a11.928 11.928 0 005.76 1.46c6.64 0 12-5.36 12-12 0-3.2-1.24-6.2-3.52-8.52zm-8.48 18a9.92 9.92 0 01-5.12-1.44l-.36-.2-3.72.96.98-3.62-.24-.38A9.913 9.913 0 012.04 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.44-7.56c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.36.23-.66.08a8.28 8.28 0 01-2.42-1.5 9.12 9.12 0 01-1.68-2.1c-.18-.3 0-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.52-.08-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.08-.8.38s-1.05 1.03-1.05 2.52 1.08 2.92 1.24 3.12c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.08 1.78-.73 2.04-1.43.25-.7.25-1.3.18-1.42-.07-.13-.26-.2-.56-.35z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/yuskaneil3/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-pink-600">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/yuz.oyozdirty" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue-600">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 font-display text-lg font-semibold text-white">{t('footer.quickLinks')}</p>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.key}>
                  <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-lg font-semibold text-white">{t('footer.contactInfo')}</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-slate-400">{t('footer.address')}</span>
              </div>
              <a href="tel:+6281917018103" className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          <p>{t('footer.copyright', { year: year })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

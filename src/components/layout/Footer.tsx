import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medical-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-medical-teal flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">Santé Plus</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/doctor"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  {t.nav.doctor}
                </Link>
              </li>
              <li>
                <Link
                  to="/hours"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  {t.nav.hours}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{t.contact.info.addressValue}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 shrink-0" />
                <span dir="ltr">{t.contact.info.phoneValue}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>{t.contact.info.emailValue}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.hours}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{t.hours.days.monday} - {t.hours.days.friday}</span>
              </li>
              <li className={`${isRTL ? 'mr-6' : 'ml-6'}`}>08:30 - 12:30</li>
              <li className={`${isRTL ? 'mr-6' : 'ml-6'}`}>14:00 - 18:00</li>
              <li className="flex items-center gap-2 mt-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{t.hours.days.saturday}</span>
              </li>
              <li className={`${isRTL ? 'mr-6' : 'ml-6'}`}>09:00 - 12:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/60">
            {t.footer.copyright.replace('2024', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

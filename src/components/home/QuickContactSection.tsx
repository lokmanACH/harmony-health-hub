import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const QuickContactSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-medical-teal p-8 md:p-12"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-medical-teal/30 rounded-full blur-2xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className={`text-center md:${isRTL ? 'text-right' : 'text-left'}`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                {t.quickContact.title}
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-6">
                {t.quickContact.description}
              </p>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  {t.hero.cta}
                  <ArrowIcon className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <a
                href="tel:+33123456789"
                className="flex items-center gap-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-xl p-4 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/70">
                    {t.quickContact.phone}
                  </div>
                  <div className="text-lg font-semibold text-primary-foreground" dir="ltr">
                    +33 1 23 45 67 89
                  </div>
                </div>
              </a>

              <a
                href="mailto:contact@cliniquesanteplus.fr"
                className="flex items-center gap-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-xl p-4 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/70">
                    {t.quickContact.email}
                  </div>
                  <div className="text-lg font-semibold text-primary-foreground">
                    contact@cliniquesanteplus.fr
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickContactSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Shield, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const stats = [
    { icon: Users, value: '10,000+', labelFr: 'Patients satisfaits', labelAr: 'مريض راضٍ' },
    { icon: Clock, value: '20+', labelFr: 'Années d\'expérience', labelAr: 'سنة من الخبرة' },
    { icon: Shield, value: '24/7', labelFr: 'Disponibilité', labelAr: 'متاحون دائماً' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-medical-teal-light to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-medical-teal/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      
      {/* Floating Medical Icons */}
      <motion.div
        className="absolute top-32 right-[15%] hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 rounded-2xl bg-card shadow-lg flex items-center justify-center">
          <Shield className="w-8 h-8 text-primary" />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 right-[25%] hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-14 h-14 rounded-xl bg-card shadow-lg flex items-center justify-center">
          <Clock className="w-7 h-7 text-medical-teal" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-center lg:${isRTL ? 'text-right' : 'text-left'}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-medical-green rounded-full animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                {isRTL ? 'مرحباً بكم في عيادتنا' : 'Bienvenue à notre clinique'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-medium gradient-text mb-6"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-${isRTL ? 'end' : 'start'}`}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  {t.hero.cta}
                  <ArrowIcon className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-primary" size="xl" asChild>
                <Link to="/about">{t.hero.learnMore}</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {isRTL ? stat.labelAr : stat.labelFr}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary to-medical-teal p-1 shadow-2xl">
                <div className="w-full h-full rounded-[calc(1.5rem-4px)] bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                      <Users className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {isRTL ? 'رعاية طبية متميزة' : 'Soins Médicaux Excellence'}
                    </h3>
                    <p className="text-muted-foreground">
                      {isRTL ? 'لصحتكم وصحة عائلتكم' : 'Pour vous et votre famille'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-medical-green/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-medical-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">
                      {isRTL ? 'موثوق' : 'Confiance'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

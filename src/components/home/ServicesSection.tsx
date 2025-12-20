import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Baby, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      title: t.services.items.general.title,
      description: t.services.items.general.description,
      color: 'from-primary to-medical-blue-light',
    },
    {
      icon: Baby,
      title: t.services.items.pediatric.title,
      description: t.services.items.pediatric.description,
      color: 'from-medical-teal to-medical-green',
    },
    {
      icon: Heart,
      title: t.services.items.cardio.title,
      description: t.services.items.cardio.description,
      color: 'from-medical-coral to-accent',
    },
    {
      icon: Sparkles,
      title: t.services.items.derma.title,
      description: t.services.items.derma.description,
      color: 'from-primary to-medical-teal',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

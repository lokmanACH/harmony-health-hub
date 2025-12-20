import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Lightbulb, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';

const AboutPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t.about.values.compassion.title,
      description: t.about.values.compassion.description,
      color: 'from-medical-coral to-accent',
    },
    {
      icon: Award,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description,
      color: 'from-primary to-medical-blue-light',
    },
    {
      icon: Lightbulb,
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
      color: 'from-medical-teal to-medical-green',
    },
    {
      icon: Shield,
      title: t.about.values.integrity.title,
      description: t.about.values.integrity.description,
      color: 'from-medical-navy to-primary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-medical-teal-light to-background overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-medical-teal/10 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-3xl mx-auto text-center`}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t.about.title}
            </h1>
            <p className="text-xl text-primary font-medium mb-6">
              {t.about.subtitle}
            </p>
            <p className="text-lg text-muted-foreground">
              {t.about.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-medical-teal/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-medical-teal flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {t.about.mission.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.mission.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t.about.values.title}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
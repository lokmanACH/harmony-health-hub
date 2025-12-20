import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Stethoscope, GraduationCap, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';

const DoctorPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: isRTL ? 20 : -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
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
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t.doctor.title}
            </h1>
            <p className="text-xl text-primary font-medium">
              {t.doctor.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sticky top-28"
            >
              <div className="bg-card rounded-3xl p-8 shadow-xl border border-border relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-medical-teal/10 rounded-full blur-2xl" />
                
                <div className="relative z-10 text-center">
                  {/* Avatar */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-medical-teal p-1">
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <Stethoscope className="w-12 h-12 text-primary" />
                    </div>
                  </div>

                  {/* Info */}
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {t.doctor.name}
                  </h2>
                  <p className="text-primary font-medium mb-2">
                    {t.doctor.specialty}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-secondary-foreground">
                      {t.doctor.experience}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="mt-6 flex items-center justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-medical-coral fill-medical-coral"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Bio */}
              <motion.div variants={itemVariants}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.doctor.bio}
                </p>
              </motion.div>

              {/* Certifications */}
              <motion.div
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-medical-teal flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {t.doctor.certifications.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {t.doctor.certifications.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Expertise */}
              <motion.div
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-medical-teal to-medical-green flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {t.doctor.expertise.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.doctor.expertise.items.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DoctorPage;
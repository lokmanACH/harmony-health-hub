import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';

const HoursPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const schedule = [
    { day: t.hours.days.monday, morning: '08:30 - 12:30', afternoon: '14:00 - 18:00', open: true },
    { day: t.hours.days.tuesday, morning: '08:30 - 12:30', afternoon: '14:00 - 18:00', open: true },
    { day: t.hours.days.wednesday, morning: '08:30 - 12:30', afternoon: '14:00 - 18:00', open: true },
    { day: t.hours.days.thursday, morning: '08:30 - 12:30', afternoon: '14:00 - 18:00', open: true },
    { day: t.hours.days.friday, morning: '08:30 - 12:30', afternoon: '14:00 - 18:00', open: true },
    { day: t.hours.days.saturday, morning: '09:00 - 12:00', afternoon: t.hours.closed, open: true },
    { day: t.hours.days.sunday, morning: t.hours.closed, afternoon: t.hours.closed, open: false },
  ];

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
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-medical-teal flex items-center justify-center">
              <Clock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t.hours.title}
            </h1>
            <p className="text-xl text-primary font-medium">
              {t.hours.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-medical-teal p-6">
                <div className="grid grid-cols-3 gap-4 text-primary-foreground font-semibold">
                  <div></div>
                  <div className="text-center">{t.hours.morning}</div>
                  <div className="text-center">{t.hours.afternoon}</div>
                </div>
              </div>

              {/* Body */}
              <div className="divide-y divide-border">
                {schedule.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`grid grid-cols-3 gap-4 p-5 ${
                      !item.open ? 'bg-muted/50' : 'hover:bg-muted/30 transition-colors'
                    }`}
                  >
                    <div className={`font-medium ${item.open ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {item.day}
                    </div>
                    <div className={`text-center ${
                      item.morning === t.hours.closed
                        ? 'text-destructive font-medium'
                        : 'text-muted-foreground'
                    }`}>
                      {item.morning}
                    </div>
                    <div className={`text-center ${
                      item.afternoon === t.hours.closed
                        ? 'text-destructive font-medium'
                        : 'text-muted-foreground'
                    }`}>
                      {item.afternoon}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 flex items-start gap-3 bg-secondary rounded-xl p-4"
            >
              <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-secondary-foreground">
                {t.hours.note}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HoursPage;
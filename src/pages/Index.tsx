import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import QuickContactSection from '@/components/home/QuickContactSection';

const Index: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Layout>
      <Helmet>
        <title>Clinique Santé Plus | {language === 'fr' ? 'Votre santé, notre priorité' : 'صحتكم أولويتنا'}</title>
        <meta 
          name="description" 
          content={language === 'fr' 
            ? 'Clinique Santé Plus - Des soins médicaux de qualité dans un environnement moderne. Consultations, pédiatrie, cardiologie et dermatologie.'
            : 'عيادة الصحة بلس - رعاية طبية عالية الجودة في بيئة حديثة. استشارات، طب الأطفال، أمراض القلب والجلدية.'
          } 
        />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <QuickContactSection />
    </Layout>
  );
};

export default Index;
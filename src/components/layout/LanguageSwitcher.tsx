import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-muted rounded-lg p-1">
      <button
        onClick={() => setLanguage('fr')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200',
          language === 'fr'
            ? 'bg-card text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200',
          language === 'ar'
            ? 'bg-card text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        عر
      </button>
    </div>
  );
};

export default LanguageSwitcher;

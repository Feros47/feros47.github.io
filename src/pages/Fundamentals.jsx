// src/pages/Fundamentals.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Fundamentals = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen bg-gray-800 text-white py-12'>
      <div className='max-w-4xl mx-auto px-5'>
        <h1 className='text-4xl font-bold text-center text-orange-500 mb-8'>
          {t('fundamentals.title')}
        </h1>
        <p className='text-lg mb-4'>
          {t('fundamentals.intro')}
        </p>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>{t('fundamentals.serving')}</h2>
          <p>{t('fundamentals.servingDesc')}</p>
        </section>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>{t('fundamentals.passing')}</h2>
          <p>{t('fundamentals.passingDesc')}</p>
        </section>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default Fundamentals;

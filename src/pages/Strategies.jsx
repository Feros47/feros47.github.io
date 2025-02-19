// src/pages/Strategies.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Strategies = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen bg-gray-800 text-white py-12'>
      <div className='max-w-4xl mx-auto px-5'>
        <h1 className='text-4xl font-bold text-center text-orange-500 mb-8'>
          {t('strategies.title')}
        </h1>
        <p className='text-lg mb-4'>
          {t('strategies.intro')}
        </p>
        <h2 className='text-2xl font-semibold mb-4'>{t('strategies.offensive')}</h2>
        <ul className='list-disc list-inside mb-8'>
          <li>{t('strategies.offensiveList.item1')}</li>
          <li>{t('strategies.offensiveList.item2')}</li>
          <li>{t('strategies.offensiveList.item3')}</li>
          {/* Add more items as needed */}
        </ul>
        <h2 className='text-2xl font-semibold mb-4'>{t('strategies.defensive')}</h2>
        <ul className='list-disc list-inside'>
          <li>{t('strategies.defensiveList.item1')}</li>
          <li>{t('strategies.defensiveList.item2')}</li>
          <li>{t('strategies.defensiveList.item3')}</li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Strategies;

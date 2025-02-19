// src/pages/Handbook.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Handbook = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen bg-gray-800 text-white py-12'>
      <div className='max-w-4xl mx-auto px-5'>
        <h1 className='text-4xl font-bold text-center text-orange-500 mb-8'>
          {t('handbook.title')}
        </h1>
        <p className='text-lg mb-4'>
          {t('handbook.intro')}
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default Handbook;

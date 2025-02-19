// src/pages/Volleyball.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Volleyball = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-orange-500 mb-8'>
        {t('volleyball.title')}
      </h1>
      <div className='flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6'>
        <Link
          to='/Volleyball/Coach'
          className='px-8 py-4 bg-orange-600 rounded-lg text-xl font-semibold hover:bg-orange-500 transition duration-200'
        >
          {t('volleyball.coach')}
        </Link>
        <Link
          to='/Volleyball/Player'
          className='px-8 py-4 bg-orange-600 rounded-lg text-xl font-semibold hover:bg-orange-500 transition duration-200'
        >
          {t('volleyball.player')}
        </Link>
      </div>
    </div>
  );
};

export default Volleyball;

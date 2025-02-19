// src/pages/Expectations.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Expectations = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen bg-gray-800 text-white py-12'>
      <div className='max-w-4xl mx-auto px-5'>
        <h1 className='text-4xl font-bold text-center text-orange-500 mb-8'>
          {t('expectations.title')}
        </h1>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>{t('expectations.players')}</h2>
          <ul className='list-disc list-inside'>
            <li>{t('expectations.playersList.item1')}</li>
            <li>{t('expectations.playersList.item2')}</li>
            <li>{t('expectations.playersList.item3')}</li>
            {/* Add more items as needed */}
          </ul>
        </section>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>{t('expectations.parents')}</h2>
          <ul className='list-disc list-inside'>
            <li>{t('expectations.parentsList.item1')}</li>
            <li>{t('expectations.parentsList.item2')}</li>
            <li>{t('expectations.parentsList.item3')}</li>
            {/* Add more items as needed */}
          </ul>
        </section>
        <section>
          <h2 className='text-2xl font-semibold mb-4'>{t('expectations.coach')}</h2>
          <ul className='list-disc list-inside'>
            <li>{t('expectations.coachList.item1')}</li>
            <li>{t('expectations.coachList.item2')}</li>
            <li>{t('expectations.coachList.item3')}</li>
            {/* Add more items as needed */}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Expectations;

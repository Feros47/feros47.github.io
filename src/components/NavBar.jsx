// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-orange-600 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          {t('nav.home')}
        </Link>
        <div className="space-x-4">
          <Link to="/Handbook" className="hover:underline">
            {t('nav.handbook')}
          </Link>
          <Link to="/Expectations" className="hover:underline">
            {t('nav.expectations')}
          </Link>
          <Link to="/Strategies" className="hover:underline">
            {t('nav.strategies')}
          </Link>
          <Link to="/Fundamentals" className="hover:underline">
            {t('nav.fundamentals')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

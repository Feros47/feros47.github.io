import React from 'react';
import { useTranslation } from 'react-i18next';

const MyProjects = () => {
  const { t } = useTranslation();
  return (
  <><section className='bg-gray-900 overflow-hidden'>
      <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12'>
        <div className='max-w-xl mx-auto px-5'>
          <div className='mb-4'>
            <div className='flex justify-center items-center'>
              <span
                className='text-sm font-black uppercase text-center text-gray-500 dark:text-gray-400'
                style={{ letterSpacing: '0.35em' }}
              >
                🖥 {t("projects.header")} ⌨️
              </span>
            </div>
          </div>
          <h1 className='text-center text-[48px] font-black mb-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
            {t("projects.title")}
          </h1>
        </div>
        <h2 className='text-center text-[32px] font-black pb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
          {t("projects.information")}
        </h2>
      </div>
    </section><section className='bg-gray-900 overflow-hidden'>
        <div className='relative mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-8 lg:py-12 items-start border-b-2 border-gray-600 lg:pb-20'>
          <div className='flex flex-wrap lg:flex-nowrap'>
            <div className='relative group w-full lg:w-1/2'>
              <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
              <button className='relative px-7 py-4 bg-black rounded-lg leading-none flex flex-col justify-center h-full min-h-[100px]'>
                <span className='divide-x-2 divide-gray-600 flex items-center'>
                  <span className='flex items-center md:space-x-5'>
                    <span className='text-gray-100 pr-6 group-hover:scale-105 transition duration-200'>
                      {t("projects.project1.name")}
                    </span>
                  </span>
                  <span className='text-indigo-400 pl-6 group-hover:text-gray-100 group-hover:scale-105 transition duration-200 leading-5 text-sm text-left'>
                    {t("projects.project1.description")}
                    <div className='flex items-center justify-center'>
                      <a
                        href='https://github.com/Feros47/FastPost'
                        className='border-2 border-indigo-500 rounded-lg p-3 text-white h-8 px-4 m-2 text-sm inline-flex items-center'
                      > {t("projects.buttonTextUploaded")} </a>
                    </div>
                  </span>
                </span>
              </button>
            </div>
            <div className='relative group w-full lg:w-1/2 mt-5 lg:mt-0 lg:ml-5'>
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
              <button className='relative px-7 py-4 bg-black rounded-lg leading-none flex flex-col justify-center h-full min-h-[100px]'>
                <span className='divide-x-2 divide-gray-600 flex items-center'>
                  <span className='flex items-center md:space-x-5'>
                    <span className='text-gray-100 pr-6 group-hover:scale-105 transition duration-200'>
                      {t("projects.project2.name")}
                    </span>
                  </span>
                  <span className='text-indigo-400 pl-6 group-hover:text-gray-100 group-hover:scale-105 transition duration-200 leading-5 text-sm text-left'>
                    {t("projects.project2.description")}
                    <div className='flex items-center justify-center'>
                      <a
                        href='//'
                        className='border-2 border-indigo-500 rounded-lg p-3 text-white h-8 px-4 m-2 text-sm inline-flex items-center'
                      > {t("projects.buttonTextComingSoon")} </a>
                    </div>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 xl:py-20'>
          <div className='max-w-xl mx-auto px-5'>
            <div className='mb-4'>
            </div>
            <h1 className='text-center text-[32px] font-black mb-4 pb-1 text-transparent bg-clip-text bg-gray-300'>
              {t("projects.moreProjectsHeader")}
            </h1>
          </div>
          <a
            href='https://github.com/feros47'
            className='border-2 border-indigo-500 rounded-lg p-3 text-white mt-10 flex justify-center items-center mx-20 mx-20 px-4 m-2 items-center'
          >
            {t("projects.moreProjectsButtonText")}
          </a>
        </div>

      </section></>
);};

export default MyProjects;

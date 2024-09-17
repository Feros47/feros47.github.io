import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const MyProjects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Feros47/repos');
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Helper function to group projects into rows of two
  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += 2) {
    groupedProjects.push(projects.slice(i, i + 2));
  }

  return (
    <>
      <section className='bg-gray-900 overflow-hidden'>
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
      </section>
      <section className='bg-gray-900 overflow-hidden'>
        <div className='relative mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-8 lg:py-12 items-start border-b-2 border-gray-600 lg:pb-20'>
          <div className='flex flex-wrap'>
            {groupedProjects.map((row, rowIndex) => (
              <div key={rowIndex} className='flex w-full mb-5'>
                {row.map((project, index) => (
                  <div key={project.id} className={`relative group w-full lg:w-1/2 ${index === 1 ? 'lg:ml-5' : ''}`}>
                    <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
                    <button className='relative px-7 py-4 bg-black rounded-lg leading-none flex flex-col justify-between h-1 min-h-[120px] w-full min-w-[200px]'>
                      <div className='flex flex-col justify-center flex-grow'>
                        <span className='divide-x-2 divide-gray-600 flex items-center'>
                          <span className='flex items-center md:space-x-5'>
                            <span className='text-gray-100 pr-6 group-hover:scale-105 transition duration-200'>
                              {project.name.slice(0, 7) + '...'}
                            </span>
                          </span>
                          <span className='text-indigo-400 pl-6 group-hover:text-gray-100 group-hover:scale-105 transition duration-200 leading-5 text-sm text-left'>
                            {project.description || 'No description available'}
                          </span>
                        </span>
                      </div>
                      <div className='flex pl-10'>
                              <a
                                href={project.html_url}
                                className='border-2 border-indigo-500 rounded-lg ml-20 p-3 text-white h-8 px-5 mt-1 text-sm inline-flex items-center'
                              > {t("projects.buttonTextUploaded")} </a>
                            </div>
                    </button>
                  </div>
                ))}
              </div>
            ))}
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
      </section>
    </>
  );
};

export default MyProjects;

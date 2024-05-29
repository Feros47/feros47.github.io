import React from 'react';
import { AcademicCapIcon, BookmarkAltIcon } from '@heroicons/react/solid';

const Wave = () => (
  <svg
    width='100%'
    height='100%'
    id='svg'
    viewBox='0 0 1440 600'
    xmlns='http://www.w3.org/2000/svg'
    className='transition duration-300 ease-in-out delay-150 rotate-180'
  >
    <defs>
      <linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
        <stop offset='5%' stop-color='#2E1E62'></stop>
        <stop offset='95%' stop-color='#2E1E62'></stop>
      </linearGradient>
    </defs>
    <path
      d='M 0,600 C 0,600 0,120 0,120 C 41.10327687776142,111.02466863033874 82.20655375552283,102.04933726067748 152,95 C 221.79344624447717,87.95066273932252 320.27706185567007,82.82731958762886 382,103 C 443.72293814432993,123.17268041237114 468.6851988217968,168.64138438880707 512,159 C 555.3148011782032,149.35861561119293 616.9821428571429,84.60714285714286 688,79 C 759.0178571428571,73.39285714285714 839.3862297496318,126.93004418262151 909,155 C 978.6137702503682,183.06995581737849 1037.4729381443299,185.6726804123711 1098,164 C 1158.5270618556701,142.3273195876289 1220.7220176730486,96.37923416789397 1278,85 C 1335.2779823269514,73.62076583210603 1387.6389911634756,96.81038291605302 1440,120 C 1440,120 1440,600 1440,600 Z'
      stroke='none'
      stroke-width='0'
      fill='#FF8C00'
      className='transition-all duration-300 ease-in-out delay-150 path-0'
    ></path>
    <defs>
      <linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
        <stop offset='5%' stop-color='#2E1E62'></stop>
        <stop offset='95%' stop-color='#2E1E62'></stop>
      </linearGradient>
    </defs>
    <path
      d='M 0,600 C 0,600 0,240 0,240 C 48.64874815905743,262.0169366715759 97.29749631811487,284.0338733431517 166,278 C 234.70250368188513,271.9661266568483 323.458762886598,237.8814432989691 392,229 C 460.541237113402,220.1185567010309 508.8674521354934,236.44035346097203 560,241 C 611.1325478645066,245.55964653902797 665.0714285714286,238.35714285714286 722,238 C 778.9285714285714,237.64285714285714 838.8468335787926,244.1310751104566 908,258 C 977.1531664212074,271.8689248895434 1055.5412371134018,293.1185567010309 1106,277 C 1156.4587628865982,260.8814432989691 1178.9882179675994,207.39469808541972 1230,195 C 1281.0117820324006,182.60530191458028 1360.5058910162002,211.30265095729015 1440,240 C 1440,240 1440,600 1440,600 Z'
      stroke='none'
      stroke-width='0'
      fill='#FF8C00'
      className='transition-all duration-300 ease-in-out delay-150 path-1'
    ></path>
    <defs>
      <linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
        <stop offset='5%' stop-color='#FFE5B4'></stop>
        <stop offset='95%' stop-color='#FFD700'></stop>
      </linearGradient>
    </defs>
  </svg>
);

const MyHistory = () => {
  return (
    <div className='relative h-fit'>
      <div>
        <svg
          width='100%'
          height='100%'
          id='svg'
          viewBox='0 0 1440 250'
          xmlns='http://www.w3.org/2000/svg'
          className='transition duration-300 ease-in-out delay-150'
        >
          <path
            d='M 0,400 C 0,400 0,200 0,200 C 113.56937799043064,243.3684210526316 227.13875598086128,286.7368421052632 318,272 C 408.8612440191387,257.2631578947368 477.01435406698556,184.42105263157893 568,166 C 658.9856459330144,147.57894736842107 772.8038277511963,183.57894736842104 869,213 C 965.1961722488037,242.42105263157896 1043.7703349282297,265.2631578947368 1136,262 C 1228.2296650717703,258.7368421052632 1334.1148325358852,229.3684210526316 1440,200 C 1440,200 1440,400 1440,400 Z'
            stroke='none'
            stroke-width='0'
            fill='#1F2937'
            className='transition-all duration-300 ease-in-out delay-150 path-0 '
            transform='rotate(-180 720 200)'
          ></path>
        </svg>
      </div>
      <div className='absolute top-0 w-full opacity-70 -z-10'>
        <Wave />
      </div>
      <div className='absolute w-full h-full bg-white -z-20' />
      <section className='overflow-hidden'>
        <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 pt-12'>
          <div className='max-w-xl mx-auto px-5'>
            <div className='mb-4'>
              <div className='flex justify-center items-center'>
                <span
                  className='text-sm font-black uppercase text-center text-gray-900'
                  style={{ letterSpacing: '0.35em' }}
                >
                  🖥 min historie ⌨️
                </span>
              </div>
            </div>
            <h1 className='text-center text-[48px] font-black mb-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 '>
              Historie og erfaring
            </h1>
          </div>
        </div>
      </section>
      <div className='relative mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 lg:py-20 flex flex-col space-y-14 md:space-y-10 flex-no-wrap items-start border-b-2 border-gray-600'>
        <div className='relative group ml-auto w-full lg:w-1/2'>
          <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
          <button className='relative px-7 py-4 bg-black rounded-lg leading-none flex flex-col justify-center'>
            <AcademicCapIcon className='mx-auto h-7 w-7 mb-5 text-pink-600 md:hidden -rotate-6' />
            <span className='divide-x-2 divide-gray-600 flex items-center'>
              <span className='flex items-center md:space-x-5'>
                <AcademicCapIcon className='min-w-max h-6 w-6 text-pink-600 hidden md:flex -rotate-6' />
                <span className='text-gray-100 pr-6 group-hover:scale-105 transition duration-200'>
                  BS.c. Computer Science
                </span>
              </span>
              <span className='text-indigo-400 pl-6 group-hover:text-gray-100 group-hover:scale-105 transition duration-200 leading-5 text-sm text-left'>
                Nuværende studerende på Datalogi uddannelsen på København
                Universitet. Og udlever min drøm om at blive softwareudvikler.
              </span>
            </span>
            <h1 className='mx-auto mt-5 md:ml-0 font-lg italic font-bold text-indigo-400'>
              23 ~
            </h1>
          </button>
        </div>
        <div className='relative group mx-auto w-full lg:w-1/2'>
          <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
          <button className='relative px-7 py-4 bg-black rounded-lg leading-none flex flex-col justify-center'>
            <AcademicCapIcon className='mx-auto h-7 w-7 mb-5 text-pink-600 md:hidden -rotate-6' />
            <span className='divide-x-2 divide-gray-600 flex items-center'>
              <span className='flex items-center md:space-x-5'>
                <AcademicCapIcon className='min-w-max h-6 w-6 text-pink-600 hidden md:flex -rotate-6' />
                <span className='text-gray-100 pr-6 group-hover:scale-105 transition duration-200'>
                  Gymnasiet
                </span>
              </span>
              <span className='text-indigo-400 pl-6 group-hover:text-gray-100 group-hover:scale-105 transition duration-200 leading-5 text-sm text-left'>
                I 2023 blev jeg student og var nu færdig med gymnasiet. Herefter
                var jeg helt klar på at starte direkte på universitet, og virkeligt få
                erfaring inden for softwareudvikling.
              </span>
            </span>
            <h1 className='mx-auto mt-5 md:ml-0 font-lg italic font-bold text-indigo-400'>
              20 - 23
            </h1>
          </button>
        </div>
        <div className='relative group mr-auto w-full lg:w-1/2'>
          <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
          <button className='relative px-7 py-4 bg-black rounded-lg leading-none flex flex-col justify-center'>
            <AcademicCapIcon className='mx-auto h-7 w-7 mb-5 text-pink-600 md:hidden -rotate-6' />
            <span className='divide-x-2 divide-gray-600 flex items-center'>
              <span className='flex items-center md:space-x-5'>
                <BookmarkAltIcon className='min-w-max h-6 w-6 text-pink-600 hidden md:flex -rotate-6' />
                <span className='text-gray-100 pr-6 group-hover:scale-105 transition duration-200'>
                  Autodidakt
                </span>
              </span>
              <span className='text-indigo-400 pl-6 group-hover:text-gray-100 group-hover:scale-105 transition duration-200 leading-5 text-sm text-left'>
                Begyndte at udvikle små Unity spil, og lærte mig selv at kode i
                C#. Dette var starten på min interesse for softwareudvikling.
              </span>
            </span>
            <h1 className='mx-auto mt-5 md:ml-0 font-lg italic font-bold text-indigo-400'>
              22 - 23
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyHistory;
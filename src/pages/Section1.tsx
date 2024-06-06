/* React */
import React, { forwardRef, ReactNode } from 'react';

const Section1 = forwardRef<HTMLDivElement>((props, ref) => {
  // Here goes the content of our component
  return (
    <div className='relative h-screen w-full'>
      <div className='absolute w-full h-full bg-white inset-0 -z-20 ' />
      <img
        src={require('../assets/giphy.gif')}
        className='absolute inset-0 w-full h-full object-cover -z-10'
      />
      <section className='h-full overflow-hidden flex justify-center items-center'>
        <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 xl:py-20'>
          <div className='max-w-xl mx-auto px-5'>
            <div className='flex justify-center items-center'>
              <span
                className='text-sm font-black uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-600 '
                style={{ letterSpacing: '0.35em' }}
              >
                Velkommen, mit navn er
              </span>
            </div>

            <h1 className='text-center text-[48px] font-black mb-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 '>
              Niklas Marcussen
            </h1>
            <p className='text-lg sm:text-xl text-center leading-7 sm:leading-8 text-gray-700'>
              Datalogi-studerende på København Universitet
            </p>
            <div className='flex justify-center items-center flex-col sm:flex-row mt-6'>
              <a
                href='https://www.linkedin.com/in/niklas-marcussen-232391299/'
                className='py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5 bg-orange-600 text-white hover:bg-red-600 hover:text-white'
              >
                Kontakt Mig
              </a>
            </div>
            <div className='flex justify-center items-center m-5'>
              <div
                className='m-5 flex flex-col justify-center items-center hover:cursor-pointer space-y-8 font-mono text-md bg-orange-500 p-7 rounded-2xl shadow-lg'
                onClick={() => {
                  if (ref && 'current' in ref && ref.current) {
                    window.scrollTo({
                      top: ref?.current?.offsetTop,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                <div>
                  <h1 className='text-black text-2xl'>Rul ned</h1>
                </div>
                <img
                  src={require('../assets/scroll_down.png')}
                  className='m-2 animate-pulse animate-bounce w-10 h-10'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Section1;
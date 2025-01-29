'use client';
import Image from 'next/image';
import { content } from './test';

export default function ShowCaseSections() {
  return (
    <section>
      <div className='layout flex'>
        <div className='w-1/2'>
          <h1 className='text-8xl font-black text-white font-plus-jakarta-sans mb-8'>
            dispersia
          </h1>
          <p className='text-2xl mb-8'>
            the all that you need to know; the showcases
          </p>
          <div className='flex overflow-x-auto w-full border space-x-2 items-center'>
            {content.map((card) => {
              return (
                <Image
                  key={card.id}
                  src={card.url}
                  width={300}
                  height={300}
                  className='h-full w-full object-cover hover:scale-105 transition-transform duration-300'
                  alt={card.title}
                />
              );
            })}
          </div>
        </div>

        <div className='w-1/2'></div>
      </div>
    </section>
  );
}

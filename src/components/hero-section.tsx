'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1,
        ease: 'easeIn',
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: 'easeIn' } },
  };
  return (
    <section className='hero-background'>
      <div className='layout min-h-screen flex snap-center'>
        <div className='flex justify-center flex-row h-full md:w-[80%] w-full m-auto'>
          <div className='grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 3,
                ease: 'easeIn',
                type: 'spring',
                bounce: 0.25,
              }}
              className='flex justify-center md:justify-start mr-8 '
            >
              <Image
                src='/svg-hero.svg'
                alt='Hero'
                width={360}
                height={360}
                className='object-cover w-1/2 md:w-full'
              />
            </motion.div>
            <motion.div
              variants={container}
              initial='hidden'
              animate='show'
              className='flex flex-col justify-center z-50'
            >
              <motion.h1
                variants={item}
                className='text-4xl md:text-8xl font-bold pb-2 font-plus-jakarta-sans text-center md:text-left'
              >
                dispersia
              </motion.h1>
              <motion.h3
                variants={item}
                className='text-xl md:text-3xl pb-2 font-gabarito text-center md:text-left'
              >
                your event deserves a website that wows! — la dispersia
              </motion.h3>
              <motion.div
                variants={item}
                className='flex justify-center md:justify-start z-50'
              >
                <Button>i want it! 😲</Button>
                <Button className='bg-yellow-300 hover:bg-yellow-500 text-secondary-foreground font-bold'>
                  Quick Start Here
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

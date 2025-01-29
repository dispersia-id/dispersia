'use client';
import { motion } from 'framer-motion';
import EventCard from './event-card';

export default function PassEventSection() {
  return (
    <section className='layout min-h-screen flex snap-center'>
      <div className='flex justify-center space-y-4 flex-col items-center h-full m-auto'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <h1 className='text-4xl font-bold text-center'>
            Our Past Event Pals
          </h1>
          <h3 className='text-lg text-center'>
            {' '}
            Trusted by events and concerts, Dispersia creates engaging digital
            experiences.
          </h3>
        </motion.div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-6 w-full gap-5'>
            <EventCard src='/images/events/iniits.svg' />
            <EventCard src='/images/events/sch.svg' />
            <EventCard src='/images/events/parking.svg' />
          </div>
        </div>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-6 justify-center w-full gap-5'>
            <EventCard src='/images/events/cyberdas.svg' variant='default' />
            <EventCard src='/images/events/astec.svg' variant='default' />
            <EventCard src='/images/events/icts.svg' variant='default' />
          </div>
        </div>
      </div>
    </section>
  );
}

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
          <div className='grid grid-cols-6 justify-center align-baseline w-full gap-5'>
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
        <div className=''>
          <div className='grid grid-cols-6 justify-center w-full gap-5'>
            <EventCard variant='default' />
            <EventCard variant='default' />
            <EventCard variant='default' />
          </div>
        </div>
      </div>
    </section>
  );
}

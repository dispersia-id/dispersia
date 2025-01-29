'use client';
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import React, { JSX, useRef } from 'react';

const Example = () => {
  return (
    <div className='w-full layout'>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const [active, setActive] = React.useState(0);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-90%']);

  return (
    <section
      ref={targetRef}
      className='relative h-[900vh] bg-background m-auto flex flex-col md:flex-row '
    >
      <div className='sticky w-full md:w-1/2 flex flex-col top-10 h-screen items-center overflow-hidden'>
        <div className='m-auto overflow-hidden'>
          <div className='left-0 top-0 flex flex-col justify-center'>
            <div className='sticky left-0 w-1/2'>
              <h1 className='text-8xl font-black text-white font-plus-jakarta-sans mb-8'>
                dispersia
              </h1>
              <p className='text-2xl mb-8'>
                the all that you need to know; the showcases
              </p>
            </div>
          </div>
          <motion.div style={{ x }} className='flex gap-4'>
            {content.map((card) => {
              return <Card setActive={setActive} card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>

      <div className='sticky w-full md:w-1/2 right-0 space-y-8 flex flex-col top-10 h-screen items-center overflow-hidden'>
        <div className='m-auto  flex flex-col items-center justify-center'>
          <AnimatePresence initial={false}>
            {content[active].content ?? null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

interface CardProps extends React.ComponentPropsWithRef<'div'> {
  card: CardType;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}
const Card = ({ card, setActive }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInview = useInView(ref, {
    margin: '0px 50% -100px 50%',
  });
  React.useEffect(() => {
    if (isInview) {
      setActive(card.id);
    }
  }, [isInview]);

  return (
    <motion.div
      ref={ref}
      key={card.id}
      className='group relative h-[100px] w-[200px] overflow-hidden bg-neutral-200'
      onClick={() => setActive(card.id)}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundPosition: 'center',
          objectFit: 'cover',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute inset-0 z-10 grid place-content-center'></div>
    </motion.div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
  content: JSX.Element;
};

export const content: CardType[] = [
  {
    id: 0,
    url: '/images/showcase/left/astec.svg',
    title: 'Collaborative Editing',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5, ease: 'easeIn' }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/right/astec.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
  {
    id: 1,
    title: 'Real time changes',
    url: '/images/showcase/left/ilit.svg',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/right/ilit.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
  {
    id: 2,
    title: 'Version control',
    url: '/images/showcase/left/cyberdas.svg',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/right/cyberdas.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
  {
    id: 3,
    title: 'Running out of content',
    url: '/images/showcase/left/sch-nst.svg',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/right/sch-nst.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
  {
    id: 4,
    title: 'Running out of content',
    url: '/images/showcase/left/icts.svg',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/right/icts.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
  {
    id: 5,
    title: 'Running out of content',
    url: '/images/showcase/left/ilit25.svg',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/right/ilit25.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
  {
    id: 6,
    title: 'Running out of content',
    url: '/images/showcase/left/parking.svg',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/right/parking.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
  {
    id: 7,
    title: 'Running out of content',
    url: '/images/showcase/left/sch-22-2.svg',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/right/sch-22-2.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
  {
    id: 8,
    title: 'Running out of content',
    url: '/images/showcase/left/sch-22.svg',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/right/sch-22.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
  {
    id: 9,
    title: 'Running out of content',
    url: '/images/showcase/left/sch-reeva.svg',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/right/sch-reeva.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
];

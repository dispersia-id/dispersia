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

  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-90%']);

  return (
    <section
      ref={targetRef}
      className='relative h-[300vh] bg-background m-auto flex flex-col md:flex-row '
    >
      <div className='sticky w-full md:w-1/2 flex flex-col top-10 h-screen items-center overflow-hidden'>
        <div className='m-auto overflow-hidden'>
          <div className='left-0 top-0 flex flex-col justify-center'>
            <div className='sticky left-0 w-1/4'>
              <h1 className='text-8xl font-black text-white font-plus-jakarta-sans'>
                dispersia
              </h1>
              <p className='text-4xl'>
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
        <div className='border m-auto  flex flex-col items-center justify-center'>
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
  const isInview = useInView(ref, { amount: 'all' });
  React.useEffect(() => {
    if (isInview) {
      setActive(card.id);
    }
  }, [isInview]);

  return (
    <motion.div
      ref={ref}
      key={card.id}
      className='group relative h-[200px] w-[400px] overflow-hidden bg-neutral-200'
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute inset-0 z-10 grid place-content-center'>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
          {card.title}
        </p>
      </div>
    </motion.div>
  );
};

export default Example;

type CardType = {
  description: string;
  url: string;
  title: string;
  id: number;
  content: JSX.Element;
};

const content: CardType[] = [
  {
    id: 0,
    url: '/images/showcase/show1.png',
    title: 'Collaborative Editing',
    description:
      'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/show1.png'
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
    url: '/images/showcase/show1.png',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/preview1.png'
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
    url: '/images/showcase/show1.png',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/preview1.png'
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
    url: '/images/showcase/show1.png',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='h-full w-full flex items-center justify-center text-white'
      >
        <Image
          src='/images/showcase/preview1.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </motion.div>
    ),
  },
];

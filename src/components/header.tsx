'use client';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      initial='hidden'
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className='layout fixed m-auto inset-x-0 w-full pt-2 font-gabarito'
    >
      <div className='flex justify-between items-center'>
        <div>
          <Link legacyBehavior href='/'>
            <Image
              src={'/svg-header.svg'}
              alt='Dispersia'
              width={50}
              height={50}
            />
          </Link>
        </div>
        <nav className='text-white'>
          <ul className='flex space-x-8'>
            <li>
              <Link legacyBehavior href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href='/'>
                <a>Portofolios</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href='/'>
                <a>Contacts</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

'use client';
import { useSection } from '@/context/section-context';
import { Section } from '@/types/section-type';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import React, { HTMLAttributes, useRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  section: Section;
  isFirst?: boolean;
  isLast?: boolean;
}

const Sections: React.FC<SectionProps> = ({
  section,
  isFirst = false,
  isLast = false,
  children,
  ...props
}) => {
  const { setActiveSection, setActiveSectionProgress } = useSection();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: isFirst
      ? ['start start', 'end center']
      : isLast
        ? ['start center', 'end end']
        : ['start center', 'end center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (value > 0 && value < 1) {
      // Update active section
      setActiveSection(section.positionId);
      setActiveSectionProgress(value);
    }
  });

  return (
    <section {...props} ref={container}>
      {children || <>{section.component}</>}
    </section>
  );
};

export default Sections;

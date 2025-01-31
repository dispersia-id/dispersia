import FaqSection from '@/components/faq-section';
import HeroSection from '@/components/hero-section';
import OrderSection from '@/components/order-section';
import PassEventSection from '@/components/pass-event-section';
import ReviewSection from '@/components/review-section';
import Example from '@/components/test';
import ValueSection from '@/components/value-section';
import { Section } from '@/types/section-type';

export const sections: Section[] = [
  {
    isFirst: true,
    positionId: 0,
    component: <HeroSection />,
  },
  {
    positionId: 1,
    component: <PassEventSection />,
  },
  {
    positionId: 2,
    component: <ValueSection />,
  },
  {
    positionId: 3,
    component: <Example />,
  },
  {
    positionId: 4,
    component: <ReviewSection />,
  },
  {
    positionId: 5,
    component: <FaqSection />,
  },
  {
    positionId: 6,
    component: <OrderSection />,
    isLast: true,
  },
];

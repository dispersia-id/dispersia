import FaqSection from '@/components/faq-section';
import HeroSection from '@/components/hero-section';
import OrderSection from '@/components/order-section';
import PassEventSection from '@/components/pass-event-section';
import ReviewSection from '@/components/review-section';
import ShowCase from '@/components/show-case';
import ShowCaseMobile from '@/components/show-case-mobile';
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
    component: <ShowCaseMobile />,
  },
  {
    positionId: 4,
    component: <ShowCase />,
  },
  {
    positionId: 5,
    component: <ReviewSection />,
  },
  {
    positionId: 6,
    component: <FaqSection />,
  },
  {
    positionId: 7,
    component: <OrderSection />,
    isLast: true,
  },
];

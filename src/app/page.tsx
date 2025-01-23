import FaqSection from '@/components/faq-section';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import OrderSection from '@/components/order-section';
import PassEventSection from '@/components/pass-event-section';
import ReviewSection from '@/components/review-section';
import ShowCaseSection from '@/components/show-case-section';

export default function Home() {
  return (
    <>
      <Header />
      {/* //className='snap-mandatory snap-both h-screen overflow-y-auto' */}
      <main>
        <HeroSection />
        <PassEventSection />
        <ShowCaseSection />
        <ReviewSection />
        <FaqSection />
        <OrderSection />

        <Footer />
      </main>
    </>
  );
}

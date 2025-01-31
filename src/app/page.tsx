import Footer from '@/components/footer';
import Header from '@/components/header';
import Scrollbar from '@/components/scroll-bar';
import Sections from '@/components/section';
import { SectionProvider } from '@/context/section-context';
import { sections } from '@/data/section-data';

export default function Home() {
  return (
    <>
      <Header />
      {/* //className='snap-mandatory snap-both h-screen overflow-y-auto' */}
      <main className='w-full'>
        <SectionProvider>
          <Scrollbar sections={sections} />
          {sections.map((item, index) => {
            return (
              <Sections
                isFirst={item.isFirst}
                key={index}
                section={sections[index]}
                isLast={item.isLast}
              />
            );
          })}
        </SectionProvider>
        <Footer />
      </main>
    </>
  );
}

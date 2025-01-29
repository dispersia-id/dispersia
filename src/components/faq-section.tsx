import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export default function FaqSection() {
  return (
    <section className='layout min-h-screen flex snap-end'>
      <div className='grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 w-full'>
        <div className='flex order-2 md:order-1'>
          <Accordion type='single' collapsible className='w-full m-auto'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                Kenapa bisa lebih cepat dari yang lain?
              </AccordionTrigger>
              <AccordionContent>
                Kami membuat sistem atau website dengan pre-build sistem,
                sehingga crafting dan developing website keseluruhan menjadi
                lebih cepat dan sistematis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                Berapa kisaran harga pembuatan website konser EO?
              </AccordionTrigger>
              <AccordionContent>
                Harga dapat bervariasi dengan harga dasar yang sudah kami
                tentukan. Info lebih lanjut hubungi kami!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>
                Apakah terbuka kerja sama jangka panjang dengan EO?
              </AccordionTrigger>
              <AccordionContent>
                Ya! Dispersia sangat terbuka untuk tawaran kerja sama dengan EO
                atau pihak lain yang berkaitan dengan event dan konser, sesuai
                dengan visi Dispersia!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>
                Bagaimana performa website yang dibuat Dispersia?
              </AccordionTrigger>
              <AccordionContent>
                Dengan tech-stack yang kami gunakan, website dan sistem yang
                dibuat sangat memanjakan pengunjung dan anti lemot!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
              <AccordionTrigger>
                Adakah harga khusus event mahasiswa?
              </AccordionTrigger>
              <AccordionContent>
                Tentu ada! Terdapat harga spesial untuk mahasiswa (organisasi
                atau kepanitiaan) yang menyelenggarakan event atau konser!
                Silahkan hubungi Dispersia ya!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='m-auto order-1 md:order-2'>
          <h1 className='text-4xl md:text-8xl font-extrabold text-right font-plus-jakarta-sans pb-0 md:pb-4'>
            Frequently Asked Question
          </h1>
          <h3 className='text-3xl font-bold text-gray-700 text-right font-gabarito'>
            anything you wanna know?
          </h3>
        </div>
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export default function FaqSection() {
  return (
    <section className='layout min-h-screen flex snap-end'>
      <div className='grid grid-cols-2 w-full'>
        <div className='flex'>
          <Accordion type='single' collapsible className='w-full m-auto'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='m-auto'>
          <h1 className='text-8xl font-extrabold text-right font-plus-jakarta-sans pb-4'>
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

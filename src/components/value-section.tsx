'use client';

export default function ValueSection() {
  return (
    <section className='layout min-h-screen flex snap-center'>
      <div className='flex flex-col m-auto font-gabarito font-normal space-y-2 md:text-3xl text-xl'>
        <div className='md:w-1/2 w-full'>
          <p className='md:text-right text-justify'>
            Dispersia offers quick and specialized website creation services{' '}
            <span className='font-bold'>for concerts and crowd</span> event
            events
          </p>
        </div>
        <div className='md:w-1/2 w-full ml-auto'>
          <p className='md:text-left text-justify'>
            Our expertise lies in{' '}
            <span className='font-bold'>
              recognizing and solving the specific problems
            </span>
            that can arise with event websites, delivering platforms that are as
            engaging as they are dependable
          </p>
        </div>
      </div>
    </section>
  );
}

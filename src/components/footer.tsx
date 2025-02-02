import { ArrowBigRightDash } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className='layout'>
      <div className='grid grid-cols-2 w-full md:text-4xl text-lg font-medium text-left font-gabarito'>
        <div>
          <h3>focus on your event,</h3>
          <h3>let us take care of the website!</h3>
          <Button variant='outline' className='mt-4 rounded-xl'>
            Contact us now
            <ArrowBigRightDash size={24} />
          </Button>

          <div className='mt-4 py-5 opacity-30'>
            <Image
              alt='dispersia'
              src={'/dispersia-footer.svg'}
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <div className='flex font-gabarito md:text-2xl text-base '>
            <div className='flex-1'>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Products</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='mr-auto  flex-1'>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>
          <div className='flex py-5 md:py-10'>
            <p className='text-center text-xs md:text-lg'>
              © 2023 Dispersia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

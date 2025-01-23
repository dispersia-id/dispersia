import type { Metadata } from 'next';
import { Gabarito, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  preload: true,
});

const gabarito = Gabarito({
  variable: '--font-gabarito',
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Dispersia',
  description: 'Explore the world of Dispersia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={` ${plusJakartaSans.variable} ${gabarito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

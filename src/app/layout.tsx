import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <div className="image absolute top-0">
          <Image src="/Vector 2420.svg" width={1258} height={763} alt=""/>
        </div>
        <div className="image absolute top-0 left-1/3">
          <Image src="/Vector 2.svg" width={1258} height={763} alt=""/>
        </div> */}
      <body className={`${poppins.className} bg-[#F3F3F5] overflow-x-hidden`}>
    
          <Navbar />
          <main className=''>
            
            {children}
            </main>
          <Footer />
      </body>
    </html>
  );
}

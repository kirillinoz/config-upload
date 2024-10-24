import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { Inter, Paytone_One } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const paytoneOne = Paytone_One({
  subsets: ['latin'],
  variable: '--font-paytone-one',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Setup • MaxBox',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${paytoneOne.variable} ${inter.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

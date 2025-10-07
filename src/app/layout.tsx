import type { Metadata } from 'next';
import { Geist, Montserrat } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Innovation Brindes',
  description: 'Compre brindes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${montserrat.variable} antialiased`}
      >
        <ToastContainer />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}

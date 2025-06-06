
import './globals.css';
import type { Metadata } from 'next';
import { Ubuntu, Inter } from 'next/font/google';

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu'
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Goddy Smart Labs - Design, Strategize, Empower',
  description: 'We don\'t just design — we co-create your future. Empowering innovators and startups by transforming ideas into impactful visual stories and strategic solutions.',
  keywords: 'design, branding, strategy, startups, UI/UX, creative solutions',
  icons: {
    icon: './favicon.io'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${inter.variable}`}>
      <body className="font-inter bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
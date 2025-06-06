import type { Metadata } from "next";
import { Ubuntu, Open_Sans } from 'next/font/google';
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Goddy Smart Labs | Design, Strategize, Empower",
  description: "Empowering innovators and startups by transforming ideas into impactful visual stories and strategic solutions, fueling growth and positive change.",
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${openSans.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

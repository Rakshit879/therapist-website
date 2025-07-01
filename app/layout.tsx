import type { Metadata } from "next";
import "../lib/fontawesome";
import "./globals.css";

import { Libre_Baskerville } from 'next/font/google'

const libre = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre',
})


export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD (Clinical Psychologist)",
  description: "Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libre.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

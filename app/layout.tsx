import type { Metadata } from "next";
import Script from "next/script"; 
import "../lib/fontawesome";
import "./globals.css";
import { Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake — Therapist for Anxiety, Depression, Relationships",
  description:
    "Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.",
  alternates: {
    canonical: "https://www.drserenablake.com", 
  },
  openGraph: {
    title: "Dr. Serena Blake — Therapy & Counseling",
    description: "Professional therapy to help you heal, grow, and thrive.",
    url: "https://www.drserenablake.com",
    images: [
      {
        url: "https://www.drserenablake.com/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Dr. Serena Blake — Therapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Serena Blake",
    description:
      "Compassionate mental health therapy for anxiety, depression, and more.",
    images: ["https://www.drserenablake.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Dr. Serena Blake",
              url: "https://www.drserenablake.com",
              logo: "https://www.drserenablake.com/favicon.ico",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                postalCode: "90001",
                streetAddress: "123 Maplewood Drive",
              },
              telephone: "+1-555-555-555",
              medicalSpecialty: "Psychotherapy",
              service: [
                {
                  "@type": "Service",
                  name: "Anxiety Therapy",
                  description:
                    "Therapy sessions to help manage and reduce anxiety.",
                },
                {
                  "@type": "Service",
                  name: "Depression Therapy",
                  description:
                    "Evidence-based therapy to help you overcome depression.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${libre.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

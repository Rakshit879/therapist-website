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
    canonical: "https://rakshittherapist.vercel.app",
  },
  openGraph: {
    title: "Dr. Serena Blake — Therapy & Counseling",
    description: "Professional therapy to help you heal, grow, and thrive.",
    url: "https://rakshittherapist.vercel.app",
    images: [
      {
        url: "https://rakshittherapist.vercel.app/Images/Logo.png",
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
    images: ["https://rakshittherapist.vercel.app/Images/Logo.png"],
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
        {/* Google Search Console Verification - replace with your code from Search Console */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        {/* SEO Meta Tags */}
        <meta name="description" content="Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma." />
        <meta name="keywords" content="therapy, counseling, anxiety, stress, relationships, trauma, mental health" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Dr. Serena Blake — Therapist for Anxiety, Depression, Relationships" />
        <meta property="og:description" content="Professional therapy to help you heal, grow, and thrive." />
        <meta property="og:image" content="https://rakshittherapist.vercel.app/Images/Logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rakshittherapist.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Serena Blake" />
        <meta name="twitter:description" content="Compassionate mental health therapy for anxiety, depression, and more." />
        <meta name="twitter:image" content="https://rakshittherapist.vercel.app/Images/Logo.png" />
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Dr. Serena Blake",
              url: "https://rakshittherapist.vercel.app",
              logo: "https://rakshittherapist.vercel.app/favicon.ico",
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

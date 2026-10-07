import type { Metadata, Viewport } from "next";
import { Young_Serif, Figtree } from "next/font/google";
import { PageTransition } from "./components/ui/page-transition";
import StudyTimer from "./components/StudyTimer";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import "./globals.css";

const youngSerif = Young_Serif({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#2774AE",
  viewportFit: "cover",
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bruinspace.vercel.app"),
  title: {
    default: "BruinSpace - UCLA Study Room Booking",
    template: "%s | BruinSpace",
  },
  description:
    "Find and book study rooms at UCLA libraries. Check real-time availability across Powell Library, YRL, the Biomedical Library, SEL, and the Media Lab, with instant scheduling.",
  keywords: [
    "UCLA",
    "UCLA Library",
    "study rooms",
    "library booking",
    "Powell Library",
    "Young Research Library",
    "YRL",
    "Biomedical Library",
    "Science and Engineering Library",
    "BruinSpace",
    "room reservation",
    "study space",
    "college study rooms",
    "university library",
    "Los Angeles",
    "group study",
  ],
  authors: [{ name: "BruinSpace" }],
  creator: "BruinSpace",
  publisher: "BruinSpace",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BruinSpace",
    title: "BruinSpace - UCLA Study Room Booking",
    description:
      "Find and book study rooms at UCLA libraries. Real-time availability across five library locations.",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "BruinSpace - UCLA Study Room Booking",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "BruinSpace - UCLA Study Room Booking",
    description:
      "Find and book study rooms at UCLA libraries. Real-time availability across five library locations.",
    images: ["/icon-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "BruinSpace",
    startupImage: "/icon-512x512.png",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${youngSerif.variable} ${figtree.variable} h-full antialiased`}
    >
      <head>
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <PageTransition>{children}</PageTransition>
        <StudyTimer />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}

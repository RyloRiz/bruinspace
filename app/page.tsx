import { Suspense } from "react";
import { Metadata } from "next";
import BookingDashboard from "./components/BookingDashboard";
import { WebsiteJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "./components/JsonLd";

export const metadata: Metadata = {
  title: "BruinSpace - Book UCLA Study Rooms | Real-Time Availability",
  description:
    "Book study rooms at UCLA in seconds. See real-time availability for 68 rooms across Powell Library, YRL, the Biomedical Library, SEL, and the Media Lab. Free for all Bruins.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BruinSpace - Book UCLA Study Rooms | Real-Time Availability",
    description:
      "Book study rooms at UCLA in seconds. Real-time availability for 68 rooms across five library locations.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <WebsiteJsonLd />
      <FAQJsonLd />
      <BreadcrumbJsonLd
        items={[{ name: "BruinSpace", url: "https://bruinspace.vercel.app" }]}
      />
      <Suspense>
        <BookingDashboard />
      </Suspense>
    </>
  );
}

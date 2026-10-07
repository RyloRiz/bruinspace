export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BruinSpace",
    url: "https://bruinspace.vercel.app",
    description:
      "Unofficial tool to find and book study rooms at UCLA libraries. Real-time availability for 68+ rooms across Powell Library, YRL, the Biomedical Library, SEL, and the Media Lab.",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "BruinSpace",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LibraryJsonLd({
  name,
  shortName,
  roomCount,
}: {
  name: string;
  shortName: string;
  roomCount: number;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Library",
    name,
    alternateName: shortName,
    amenityFeature: {
      "@type": "LocationFeatureSpecification",
      name: "Study Rooms",
      value: roomCount,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function RoomJsonLd({
  roomName,
  libraryName,
  capacity,
  floor,
  features,
  roomId,
}: {
  roomName: string;
  libraryName: string;
  capacity: number;
  floor: string;
  features: string[];
  roomId: number;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MeetingRoom",
    name: roomName,
    url: `https://bruinspace.vercel.app/room/${roomId}`,
    containedInPlace: {
      "@type": "Library",
      name: libraryName,
    },
    maximumAttendeeCapacity: capacity,
    floor,
    amenityFeature: features.map((f) => ({
      "@type": "LocationFeatureSpecification",
      name: f,
      value: true,
    })),
    isAccessibleForFree: true,
    publicAccess: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd() {
  const faqs = [
    {
      question: "How do I book a study room at UCLA?",
      answer:
        "Use BruinSpace, an unofficial student-built tool, to check real-time availability across Powell Library, YRL, the Biomedical Library, SEL, and the Media Lab. Select a room, pick an available time slot, and you'll be directed to the UCLA Library booking system to confirm with your UCLA Logon.",
    },
    {
      question: "How many study rooms are available at UCLA?",
      answer:
        "UCLA Library has over 68 bookable spaces across five locations: Powell Library's group study rooms, YRL's group study rooms and collaboration pods, the Biomedical Library's study rooms and collaboration hub, SEL's rooms at Boelter Hall and the Geology building, and the Powell Media Lab.",
    },
    {
      question: "What is the maximum booking duration for UCLA study rooms?",
      answer:
        "Most UCLA Library study rooms can be booked for up to 3 hours every 24 hours, up to 3 days in advance, with a weekly cap of 6 hours. The Powell Media Lab follows its own limits of up to 2 hours per booking and 4 hours per week, bookable up to 7 days ahead.",
    },
    {
      question: "Do I need a BruinCard or UCLA Logon to book a room?",
      answer:
        "Yes. UCLA study rooms are reserved through the Library's booking system and require a valid UCLA Logon. BruinSpace helps you find an open room and time, then hands you off to the Library's site to confirm the reservation.",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

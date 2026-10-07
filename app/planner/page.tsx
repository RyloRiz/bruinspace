import { Metadata } from "next";
import StudyPlanner from "./StudyPlanner";
import { BreadcrumbJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Study Planner - Plan Your Weekly UCLA Study Schedule",
  description:
    "Plan your weekly study schedule at UCLA. Pick your days, times, and preferred library to get optimized room booking recommendations across Powell, YRL, Biomedical, SEL, and the Media Lab.",
  alternates: {
    canonical: "/planner",
  },
  openGraph: {
    title: "Study Planner - Plan Your Weekly UCLA Study Schedule",
    description:
      "Plan your weekly study schedule at UCLA. Get optimized room booking recommendations.",
    url: "/planner",
  },
};

export default function PlannerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "BruinSpace", url: "https://bruinspace.vercel.app" },
          { name: "Study Planner", url: "https://bruinspace.vercel.app/planner" },
        ]}
      />
      <StudyPlanner />
    </>
  );
}

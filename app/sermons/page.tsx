import { Metadata } from "next";
import { Sermons } from "@/lib/sermons";
import { SermonCard } from "@/components/shared/SermonCard";
import { Hero } from "./hero";

export const metadata: Metadata = {
  title: "Sermons | All Saints Global Mandate Church",
  description:
    "Listen to life-changing messages and sermons from All Saints Global Mandate Church.",
};

export default function SermonsPage() {
  return (
    <main role="main">
      <Hero />
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Sermons.map((sermon) => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>

        {Sermons.length === 0 && (
          <div className="text-muted-foreground py-20 text-center">
            <p>No sermons available at the moment. Please check back later.</p>
          </div>
        )}
      </div>
    </main>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Sermons } from "@/lib/sermons";
import { SermonCard } from "@/components/shared/SermonCard";
import { Button } from "@/components/ui/button";

export function RecentSermons() {
  const recentSermons = Sermons.slice(0, 3);

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">Latest Sermons</h2>
            <p className="max-w-2xl text-muted-foreground">
              Stay connected with the latest teachings and messages.
            </p>
          </div>
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/sermons">
              View All Sermons <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentSermons.map((sermon) => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      </div>
    </section>
  );
}

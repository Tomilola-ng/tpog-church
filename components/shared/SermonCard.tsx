import Image from "next/image";
import Link from "next/link";
import { PlayCircle, ExternalLink } from "lucide-react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Sermon } from "@/lib/sermons";
import { cn } from "@/lib/utils";

interface SermonCardProps {
  sermon: Sermon;
  className?: string;
}

export function SermonCard({ sermon, className }: SermonCardProps) {
  return (
    <Link
      href={sermon.drive_url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group block h-full", className)}
    >
      <Card className="border-border/50 hover:border-primary/50 flex h-full flex-col overflow-hidden pt-0 transition-all hover:shadow-md">
        <div className="bg-muted relative aspect-video w-full overflow-hidden">
          {sermon.image_path ? (
            <Image
              src={sermon.image_path}
              alt={sermon.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-zinc-700">
              <PlayCircle size={48} />
            </div>
          )}
        </div>

        <CardHeader className="px-4 pb-2">
          <h3 className="group-hover:text-primary truncate text-lg font-bold transition-colors">
            {sermon.title}
          </h3>
        </CardHeader>

        <CardFooter className="mt-0 p-4 pt-0">
          <div
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full gap-2 py-4",
            )}
          >
            <ExternalLink size={16} />
            <span>Get Message</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

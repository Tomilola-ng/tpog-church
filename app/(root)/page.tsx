import { Hero } from "@/components/shared/Hero";
import { FirstWords } from "./first-words";
import { RecentSermons } from "@/app/(root)/recent-sermons";

export default function Page() {
  return (
    <main role="main">
      <Hero
        title={
          <>
            The Place Of Grace Church, <br className="hidden md:block" />
            <span className="text-primary-foreground">
              Making your life count
            </span>
          </>
        }
        description={
          <>
            <p className="mb-2">Heralding the Lordship of the Word,</p>
            <p>Demonstrating the Influence of the Spirit</p>
          </>
        }
      />
      <FirstWords />
      <RecentSermons />
    </main>
  );
}

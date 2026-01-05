import { Hero } from "./hero";
import { FirstWords } from "./first-words";
import { RecentSermons } from "@/app/(root)/recent-sermons";

export default function Page() {
  return (
    <main role="main">
      <Hero />
      <FirstWords />
      <RecentSermons />
    </main>
  );
}

import { Hero } from "./hero";
import { FirstWords } from "./first-words";
import { Navbar } from "@/components/shared/Navbar";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstWords />
    </main>
  );
}

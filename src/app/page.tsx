import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
  { text: "Cooper" },
  { text: "is" },
  { text: "cool.", className: "text-blue-500 dark:text-blue-500" },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
      <BackgroundBeams />
    </main>
  );
}

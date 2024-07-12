import CopyButton from "@/components/copy-button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "View",
  },
  {
    text: "my",
  },
  {
    text: "README",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "in",
  },
  {
    text: "your",
  },
  {
    text: "terminal.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-row justify-center gap-2">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          curl https://www.cooper-gadd.io/api/readme
        </code>
        <CopyButton value="curl https://www.cooper-gadd.io/api/readme" />
      </div>
      <BackgroundBeams />
    </main>
  );
}

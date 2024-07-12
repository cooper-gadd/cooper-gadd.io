import CopyButton from "@/components/copy-button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-6">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Cooper Gadd
        </h1>
        <div className="flex flex-row space-x-4">
          <Link target="_blank" href="https://github.com/cooper-gadd">
            <Github />
          </Link>
          <Link
            className="no-underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/coopergadd/"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center gap-2">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          curl cooper-gadd.io/api/resume
        </code>
        <CopyButton value="curl cooper-gadd.io/api/resume" />
      </div>
    </main>
  );
}

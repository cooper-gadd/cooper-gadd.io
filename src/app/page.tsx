"use client";

import CopyButton from "@/components/copy-button";

export default function HomePage() {
  return (
    <main className="container flex min-h-screen flex-row items-center justify-center gap-2">
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        curl cooper-gadd.io/api/resume
      </code>
      <CopyButton value="curl cooper-gadd.io/api/resume" />
    </main>
  );
}

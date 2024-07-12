"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import React from "react";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CopyButton({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [hasCopied, setHasCopied] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      size="icon"
      variant={"ghost"}
      className={cn(
        "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3",
        className,
      )}
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setHasCopied(true);
      }}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </Button>
  );
}

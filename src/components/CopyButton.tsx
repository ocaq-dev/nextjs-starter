"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label="Copy to clipboard"
      className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition cursor-pointer"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-zinc-200" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}


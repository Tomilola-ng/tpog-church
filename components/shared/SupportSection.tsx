"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SupportSection() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "0505602463";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-zinc-900 py-16 text-white border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">Support Our Ministry</h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-400">
          Your donations help us continue our mission of winning souls for Christ
        </p>

        <div className="mx-auto max-w-md rounded-2xl bg-zinc-800/50 p-8 shadow-xl border border-white/10 backdrop-blur-sm">
          <div className="mb-6 flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Bank Name</span>
            <span className="text-xl font-semibold">Sterling Bank</span>
          </div>
          
          <div className="mb-8 flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Account Name</span>
            <span className="text-lg font-semibold">All Saints Global Mandate Church</span>
          </div>

          <div className="relative rounded-xl bg-black/40 p-4 border border-white/5">
             <span className="text-xs font-medium text-gray-500 block mb-2 uppercase tracking-wider">Account Number</span>
             <div className="flex items-center justify-between gap-4">
                <span className="text-2xl font-mono tracking-wider text-primary font-bold">{accountNumber}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 text-gray-400 hover:text-white hover:bg-white/10"
                  onClick={copyToClipboard}
                  title="Copy account number"
                >
                  {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                  <span className="sr-only">Copy account number</span>
                </Button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

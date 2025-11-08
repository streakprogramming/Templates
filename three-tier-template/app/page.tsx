"use client";

import { useEffect, useState } from "react";
import TierCard from "@/components/TierCard";
import { isAuthed } from "@/lib/auth";

const tiers = [
  {
    title: "Basic",
    desc: "Modern one-page landing.",
    href: "/basic",
  },
  {
    title: "Standart",
    desc: "Multi-section business site.",
    href: "/standart",
  },
  {
    title: "Premium",
    desc: "Extended pages and features.",
    href: "/premium",
  },
];

export default function HomePage() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const handle = () => {
      setAuthed(isAuthed());
    };

    handle();
    window.addEventListener("storage", handle);

    return () => {
      window.removeEventListener("storage", handle);
    };
  }, []);

  return (
    <section className="space-y-12">
      <header className="space-y-4 text-center">
        <p className="inline-block rounded-full bg-slate-800 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-indigo-300">
          Three Tier Template
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">Three Tier Website Demo</h1>
        <p className="text-lg text-slate-300">
          Select a tier to preview: Basic, Standart, Premium.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <TierCard
            key={tier.title}
            title={tier.title}
            desc={tier.desc}
            href={tier.href}
            disabled={!authed}
          />
        ))}
      </div>

      {!authed && (
        <p className="text-center text-sm text-slate-400">
          Log in with <span className="font-semibold text-indigo-300">demo</span> /
          <span className="font-semibold text-indigo-300">1234</span> to unlock all tiers.
        </p>
      )}
    </section>
  );
}

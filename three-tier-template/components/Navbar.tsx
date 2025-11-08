"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { isAuthed, logout } from "@/lib/auth";

const protectedLinks = [
  { label: "Basic", href: "/basic" },
  { label: "Standart", href: "/standart" },
  { label: "Premium", href: "/premium" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const update = () => setAuthed(isAuthed());
    update();
    window.addEventListener("storage", update);
    return () => window.removeEventListener("storage", update);
  }, []);

  useEffect(() => {
    setAuthed(isAuthed());
  }, [pathname]);

  const handleLogout = useCallback(() => {
    logout();
    setAuthed(false);
    router.push("/login");
  }, [router]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-indigo-300">
          Streak Programming
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-300">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 transition hover:text-white ${
              pathname === "/" ? "bg-slate-800/60 text-white" : ""
            }`}
          >
            Home
          </Link>
          {protectedLinks.map((link) => {
            const disabled = !authed;
            const targetHref = authed ? link.href : "/login";
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={targetHref}
                aria-disabled={disabled}
                className={`rounded-full px-4 py-2 transition ${
                  disabled
                    ? "cursor-not-allowed bg-slate-900/40 text-slate-600"
                    : "hover:text-white"
                } ${isActive ? "bg-slate-800/60 text-white" : ""}`}
                onClick={(event) => {
                  if (disabled) {
                    event.preventDefault();
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {authed ? (
            <button
              onClick={handleLogout}
              className="rounded-full bg-indigo-500 px-4 py-2 font-semibold text-white shadow transition hover:bg-indigo-400"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className={`rounded-full px-4 py-2 font-semibold transition hover:text-white ${
                pathname === "/login" ? "bg-slate-800/60 text-white" : "bg-indigo-500 text-white shadow hover:bg-indigo-400"
              }`}
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

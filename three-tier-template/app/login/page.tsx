"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthed, login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthed()) {
      router.replace("/basic");
    }
  }, [router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ok = login(username.trim(), password.trim());
    if (ok) {
      setError("");
      router.push("/basic");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl backdrop-blur">
        <h1 className="text-3xl font-semibold">Sign in</h1>
        <p className="mt-2 text-sm text-slate-400">
          Use the demo credentials to explore every tier.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="demo"
              autoComplete="username"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="1234"
              autoComplete="current-password"
              required
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-500 px-4 py-2 font-semibold text-white shadow-lg transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

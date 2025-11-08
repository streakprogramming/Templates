import Link from "next/link";

type TierCardProps = {
  title: string;
  desc: string;
  href: string;
  disabled?: boolean;
};

export default function TierCard({ title, desc, href, disabled }: TierCardProps) {
  const target = disabled ? "/login" : href;

  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl transition hover:border-indigo-400/60">
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-indigo-200">{title}</h3>
        <p className="text-sm text-slate-300">{desc}</p>
      </div>
      <Link
        href={target}
        aria-disabled={disabled}
        className={`mt-8 inline-flex w-fit items-center rounded-full px-5 py-2 text-sm font-semibold transition ${
          disabled
            ? "cursor-not-allowed bg-slate-800 text-slate-500"
            : "bg-indigo-500 text-white shadow-lg hover:bg-indigo-400"
        }`}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
          }
        }}
      >
        {disabled ? "Login to view" : `Explore ${title}`}
      </Link>
    </div>
  );
}

import Protected from "@/components/Protected";

export default function BasicPage() {
  return (
    <Protected>
      <div className="space-y-16">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl">
          <h1 className="text-4xl font-bold text-indigo-300">Basic Landing</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            A streamlined introduction page crafted for quick launches. This layout
            highlights your value proposition with a hero banner and clear call to
            action.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-indigo-200">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Focused messaging",
                desc: "Hero copy and supporting text designed to convert visitors instantly.",
              },
              {
                title: "Responsive design",
                desc: "Optimized layout across phones, tablets, and desktops.",
              },
              {
                title: "Call-to-action",
                desc: "Prominent buttons to drive sign-ups, downloads, or contact requests.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-100">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-indigo-500/40 bg-indigo-500/10 p-10 text-center">
          <h2 className="text-2xl font-semibold text-indigo-200">Ready to launch?</h2>
          <p className="mt-3 text-slate-200">
            Contact our team to turn this concept into a bespoke landing page for your
            product.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-6 inline-flex items-center rounded-full bg-indigo-500 px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-indigo-400"
          >
            Say hello
          </a>
        </section>
      </div>
    </Protected>
  );
}

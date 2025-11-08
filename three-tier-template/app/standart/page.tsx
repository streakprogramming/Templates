import Protected from "@/components/Protected";

const services = [
  {
    title: "Consulting",
    desc: "Clarify your offer with positioning workshops and messaging frameworks.",
  },
  {
    title: "Design",
    desc: "Craft purposeful layouts, component libraries, and style guides.",
  },
  {
    title: "Launch",
    desc: "Ship responsive builds with analytics and feedback loops baked in.",
  },
];

export default function StandartPage() {
  return (
    <Protected>
      <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
        <nav className="sticky top-28 hidden h-fit rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm font-medium text-slate-300 lg:block">
          <p className="text-xs uppercase tracking-widest text-indigo-300">Sections</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a className="transition hover:text-white" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="space-y-16">
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl">
            <h1 className="text-4xl font-bold text-indigo-300">Standart Tier Experience</h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Tailored for growing companies that need more storytelling space. Present
              your brand narrative with clarity and invite visitors to explore deeper.
            </p>
          </section>

          <section id="about" className="space-y-6">
            <h2 className="text-2xl font-semibold text-indigo-200">About the Standart Build</h2>
            <p className="max-w-3xl text-slate-300">
              The Standart tier expands the basic landing into a multi-section
              experience. Highlight your team, values, and differentiators while guiding
              visitors through a structured journey.
            </p>
          </section>

          <section id="services" className="space-y-6">
            <h2 className="text-2xl font-semibold text-indigo-200">Services Included</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-slate-100">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-4">
            <h2 className="text-2xl font-semibold text-indigo-200">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How long does the build take?",
                  a: "Most Standart tier projects launch within four weeks after kickoff.",
                },
                {
                  q: "Can we add integrations?",
                  a: "Yes. We support CRM embeds, scheduling tools, and newsletter forms.",
                },
                {
                  q: "Do you provide copywriting?",
                  a: "We collaborate with copywriters or refine your existing messaging.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-100">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-sm text-slate-400">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="contact" className="space-y-6 rounded-3xl border border-indigo-500/40 bg-indigo-500/10 p-10">
            <h2 className="text-2xl font-semibold text-indigo-200">Contact our team</h2>
            <p className="max-w-2xl text-slate-200">
              Ready to scope your Standart tier? Share your project details and we will
              respond within one business day.
            </p>
            <form className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Full name"
                type="text"
                name="name"
              />
              <input
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Work email"
                type="email"
                name="email"
              />
              <input
                className="sm:col-span-2 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Company website"
                type="url"
                name="website"
              />
              <textarea
                className="sm:col-span-2 h-32 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Project goals"
                name="message"
              />
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-400"
              >
                Send message
              </button>
            </form>
          </section>
        </div>
      </div>
    </Protected>
  );
}

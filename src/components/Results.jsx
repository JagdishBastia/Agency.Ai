import { results } from "../data.js";

export default function Results() {
  const [main, ...others] = results;

  return (
    <section id="results" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <h2 className="max-w-2xl text-4xl font-extrabold sm:text-5xl">
        Numbers our clients check every month.
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        <article className="rounded-3xl bg-brand p-8 text-white lg:col-span-3 lg:p-12">
          <p className="font-display text-8xl font-extrabold leading-none sm:text-9xl">{main.metric}</p>
          <p className="mt-4 text-2xl font-semibold">{main.label}</p>
          <p className="mt-6 text-lilac">{main.note}</p>
          <p className="mt-8 font-display font-bold">{main.company}</p>
        </article>

        <div className="grid gap-6 lg:col-span-2">
          {others.map((r) => (
            <article key={r.company} className="rounded-3xl bg-white p-8">
              <p className="font-display text-6xl font-extrabold text-brand">{r.metric}</p>
              <p className="mt-2 text-lg font-semibold">{r.label}</p>
              <p className="mt-3 text-ink/70">{r.note}</p>
              <p className="mt-5 font-display font-bold">{r.company}</p>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-ink/60">Sample data. Replace with your real case studies.</p>
    </section>
  );
}

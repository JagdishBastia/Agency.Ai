import { process } from "../data.js";

export default function Process() {
  return (
    <section id="process" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <h2 className="max-w-2xl text-4xl font-extrabold sm:text-5xl">
          From first call to a working agent in four weeks.
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.title} className="border-t-2 border-brand pt-5">
              <p className="font-display text-5xl font-extrabold text-brand">{i + 1}</p>
              <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>
              <p className="mt-1 text-sm font-semibold text-signal">{step.time}</p>
              <p className="mt-3 text-paper/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

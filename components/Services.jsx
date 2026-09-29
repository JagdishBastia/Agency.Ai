import { useState } from "react";
import { services } from "../data.js";

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId);

  return (
    <section id="agents" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <h2 className="max-w-2xl text-4xl font-extrabold sm:text-5xl">
        Pick the job. We build the agent.
      </h2>
      <p className="mt-4 max-w-xl text-lg text-ink/70">
        Every agent is built around one clear task, connected to your tools, and
        checked by a person before it works alone.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[18rem_1fr]">
        <div className="flex gap-2 overflow-x-auto lg:flex-col" role="tablist" aria-label="Agent types">
          {services.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={s.id === activeId}
              aria-controls="agent-panel"
              onClick={() => setActiveId(s.id)}
              className={`shrink-0 rounded-xl px-5 py-4 text-left font-display text-lg font-bold transition ${
                s.id === activeId ? "bg-brand text-white" : "bg-white text-ink hover:bg-lilac"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div id="agent-panel" role="tabpanel" className="rounded-2xl bg-white p-8 lg:p-10">
          <h3 className="text-3xl font-extrabold">{active.name}</h3>
          <p className="mt-3 max-w-lg text-lg text-ink/75">{active.summary}</p>

          <h4 className="mt-8 font-display text-lg font-bold">What it handles</h4>
          <ul className="mt-3 space-y-2">
            {active.handles.map((h) => (
              <li key={h} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                {h}
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-lg bg-lilac px-4 py-3 font-semibold">{active.outcome}</p>
        </div>
      </div>
    </section>
  );
}

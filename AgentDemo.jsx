import { useEffect, useState } from "react";
import { demoScenarios } from "../data.js";

export default function AgentDemo() {
  const [activeId, setActiveId] = useState(demoScenarios[0].id);
  const [shown, setShown] = useState(0);

  const scenario = demoScenarios.find((s) => s.id === activeId);
  const total = scenario.steps.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(total);
      return;
    }

    setShown(0);
    const timer = setInterval(() => {
      setShown((n) => {
        if (n >= total) {
          clearInterval(timer);
          return n;
        }
        return n + 1;
      });
    }, 900);

    return () => clearInterval(timer);
  }, [activeId, total]);

  const finished = shown >= total;

  return (
    <div className="rounded-2xl bg-paper p-5 text-ink shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-1.5" role="tablist" aria-label="Demo scenarios">
          {demoScenarios.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={s.id === activeId}
              onClick={() => setActiveId(s.id)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                s.id === activeId ? "bg-brand text-white" : "text-ink/70 hover:bg-lilac"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <span className="flex items-center gap-2 text-sm font-medium">
          <span className="live-dot h-2.5 w-2.5 rounded-full bg-brand" />
          Live
        </span>
      </div>

      <p className="mt-5 rounded-lg bg-lilac px-4 py-3 text-sm font-medium">{scenario.trigger}</p>

      <ol className="mt-4 min-h-[13rem] space-y-3" aria-live="polite">
        {scenario.steps.slice(0, shown).map((step) => (
          <li key={step} className="flex gap-3 text-sm">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-xs text-white"
            >
              ✓
            </span>
            <span>{step}</span>
          </li>
        ))}
        {!finished && <li className="text-sm text-ink/50">Working…</li>}
      </ol>

      <div
        className={`mt-2 rounded-lg px-4 py-3 text-sm font-semibold transition-opacity ${
          finished ? "bg-signal opacity-100" : "bg-ink/5 opacity-40"
        }`}
      >
        {finished ? scenario.result : "Waiting for result"}
      </div>
    </div>
  );
}
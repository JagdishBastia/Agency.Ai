import AgentDemo from "./AgentDemo.jsx";

export default function Hero() {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-2 lg:pb-28 lg:pt-20">
        <div>
          <h1 className="text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            AI agents that do the work your team is tired of.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-lilac">
            We build, launch and look after AI agents for support, sales and
            operations. They work inside your tools, 24 hours a day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-signal px-6 py-3 font-semibold text-ink transition hover:brightness-95"
            >
              Book a free call
            </a>
            <a
              href="#agents"
              className="rounded-full border border-white/50 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              See what agents do
            </a>
          </div>
        </div>

        <AgentDemo />
      </div>
    </section>
  );
}
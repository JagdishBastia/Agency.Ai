import { useState } from "react";
import { faqs } from "../data.js";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-lilac">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:py-28">
        <h2 className="text-4xl font-extrabold sm:text-5xl">Questions we hear a lot</h2>

        <div className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl font-bold"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    {item.q}
                    <span aria-hidden="true" className="text-2xl text-brand">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && <p className="pb-6 pr-8 text-ink/80">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

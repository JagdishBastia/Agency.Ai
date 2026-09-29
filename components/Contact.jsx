import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", task: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.includes("@")) {
      setError("Enter your name and a valid email so we can reply.");
      return;
    }
    setError("");

    // TODO: send form data to backend (Formspree / EmailJS / your API)
    console.log(form);
    setSent(true);
  };

  const inputClass = "mt-2 w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-ink";

  return (
    <section id="contact" className="bg-brand text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Tell us what eats your team’s week.
          </h2>
          <p className="mt-5 max-w-md text-lg text-lilac">
            Describe one repeated task. We reply within one business day with
            whether an agent can do it, and what it would take.
          </p>
        </div>

        {sent ? (
          <div className="rounded-2xl bg-paper p-8 text-ink" role="status">
            <h3 className="text-2xl font-extrabold">Request sent</h3>
            <p className="mt-2">
              Thanks, {form.name}. We will reply to {form.email} within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl bg-paper p-8 text-ink" noValidate>
            <label className="block font-semibold">
              Your name
              <input name="name" value={form.name} onChange={handleChange} className={inputClass} />
            </label>
            <label className="mt-5 block font-semibold">
              Work email
              <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} />
            </label>
            <label className="mt-5 block font-semibold">
              What should the agent do?
              <textarea name="task" rows="4" value={form.task} onChange={handleChange} className={inputClass} />
            </label>

            {error && (
              <p className="mt-4 font-medium text-red-700" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-deep"
            >
              Send request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

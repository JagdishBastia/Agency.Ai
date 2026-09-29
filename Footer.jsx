export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-8 text-sm sm:flex-row">
        <p className="font-display font-bold text-paper">Agency.ai</p>
        <p>© {new Date().getFullYear()} Agency.ai. All rights reserved.</p>
      </div>
    </footer>
  );
}
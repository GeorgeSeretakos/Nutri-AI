"use client";

import { useLocale } from "@lib/locale";

const M = {
  el: {
    titleMain: "Η Φιλοσοφία της",
    titleScript: "Believe in yourself",
    cards: [
      {
        title: "Διατροφική Συμπεριφορά",
        text: "Αναγνωρίζουμε και δουλεύουμε μαζί τις διατροφικές συμπεριφορές που σε μπλοκάρουν και σε κρατούν μακριά από τους στόχους σου.",
        color: "bg-cyan-500",
      },
      {
        title: "Εξατομίκευση",
        text: "Δημιουργούμε διατροφικά πλάνα βασισμένα στη δική σου πραγματική ζωή, τις προτιμήσεις και τη ρουτίνα της ζωής σου.",
        color: "bg-yellow-500",
      },
      {
        title: "Βιωσιμότητα",
        text: "Χτίζουμε υγιεινές συνήθειες που διαρκούν στον χρόνο — όχι δίαιτες, γνωρίζοντας από πρώτο χέρι τι σημαίνει να στερείσαι!",
        color: "bg-teal-800",
      },
    ],
  },
  en: {
    titleMain: "Our Philosophy",
    titleScript: "Believe in yourself",
    cards: [
      {
        title: "Eating Behavior",
        text: "We recognize and work together on eating behaviors that block you and keep you from achieving your goals.",
        color: "bg-cyan-500",
      },
      {
        title: "Personalization",
        text: "We create nutrition plans based on your real life — your preferences, habits, and unique routine.",
        color: "bg-yellow-500",
      },
      {
        title: "Sustainability",
        text: "We build healthy habits that last — not restrictive diets — knowing firsthand what deprivation feels like!",
        color: "bg-teal-800",
      },
    ],
  },
};

export default function PhilosophySection() {
  const locale = useLocale();
  const L = M[locale] || M.el;

  return (
    <section className="relative py-24 px-4 bg-cover bg-center flex items-center justify-center">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
        {/* Title */}
        <div className="text-center md:text-left md:w-1/4">
          <h2>
            <span className="font-bold">
              {L.titleMain} <br />
            </span>
            <span className="font-great-vibes !font-semibold text-4xl sm:text-5xl">
              {L.titleScript}
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 flex-1">
          {L.cards.map((card, idx) => (
            <div
              key={idx}
              className={`${card.color} text-white p-6 rounded-xl shadow-2xl relative overflow-hidden`}
            >
              <div className="relative z-10">
                <h3 className="mb-2">{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

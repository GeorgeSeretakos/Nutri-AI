"use client";

import { useLocale } from "@lib/locale";

const M = {
  el: {
    stats: [
      { value: "2000+", label: "Ευχαριστημένοι Πελάτες" },
      { value: "8000+", label: "Συνεδρίες" },
      { value: "30+", label: "Διαφορετικές Συνεργασίες" },
      { value: "5", label: "Βασικοί Συνεργάτες" },
    ],
  },
  en: {
    stats: [
      { value: "2000+", label: "Happy Clients" },
      { value: "8000+", label: "Sessions" },
      { value: "30+", label: "Collaborations" },
      { value: "5", label: "Core Partners" },
    ],
  },
};

export default function StatsSection() {
  const locale = useLocale();
  const L = M[locale] || M.el;

  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/office/29.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {L.stats.map((item, idx) => (
            <div key={idx}>
              <h2>{item.value}</h2>
              <p className="font-semibold mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

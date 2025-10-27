"use client";
import {useLocale} from "@lib/locale";

const M = {
  el: { name: "Τόνια Καπαρελιώτη", line1: "Διαιτολόγος – Διατροφολόγος", line2: "Wellbeing & NLP Coach" },
  en: { name: "Tonia Kaparelioti", line1: "Dietitian – Nutritionist", line2: "Wellbeing & NLP Coach" }
};

export default function HeroSection() {
  const t = M[useLocale()];
  return (
    <section className="relative h-[95vh]">
      <img src="/images/tonia/7.webp" alt="Tonia Kaparelioti" className="absolute inset-0 w-full h-full object-cover object-top z-0"/>
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 text-white">
        <div className="max-w-lg">
          <h1 className="font-serif mb-4">{t.name}</h1>
          <h4>{t.line1}</h4>
          <h4>{t.line2}</h4>
        </div>
      </div>
    </section>
  );
}

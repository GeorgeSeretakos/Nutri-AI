"use client";
import {useLocale} from "@lib/locale";

const M = {
  el: { quote: "Η διατροφή δεν είναι μόνο θέμα θερμίδων, είναι θέμα συναισθημάτων" },
  en: { quote: "Nutrition is not just about calories — it’s about emotions." }
};

export default function QuoteSection() {
  const locale = useLocale();
  return (
    <section className="relative h-[60vh]">
      <img src="/images/food/5.webp" alt="" className="absolute inset-0 fill w-full h-full object-cover object-center z-0"/>
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 h-full text-white flex items-center justify-center">
        <h2 className="font-semibold max-w-3/4 text-center">{M[locale].quote}</h2>
      </div>
    </section>
  );
}

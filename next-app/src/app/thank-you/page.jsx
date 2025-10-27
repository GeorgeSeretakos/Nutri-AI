"use client";

import Link from "next/link";
import { useLocale } from "@lib/locale";

export default function ThankYou() {
  const locale = useLocale();

  const L = {
    el: {
      title: "Ευχαριστούμε για την επικοινωνία σας!",
      subtitle: "Θα σας απαντήσουμε το συντομότερο δυνατό.",
      back: "Επιστροφή στην αρχική σελίδα",
    },
    en: {
      title: "Thank you for contacting us!",
      subtitle: "We will get back to you as soon as possible.",
      back: "Return to the home page",
    },
  }[locale] || L.el;

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{L.title}</h1>
      <p className="mb-6">{L.subtitle}</p>
      <Link
        href="/"
        className="text-sky-400 underline hover:text-sky-300 transition"
      >
        {L.back}
      </Link>
    </main>
  );
}

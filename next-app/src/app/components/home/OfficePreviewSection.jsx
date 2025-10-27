"use client";

import Link from "next/link";
import { useLocale } from "@lib/locale";

export default function OfficePreviewSection() {
  const locale = useLocale();

  const M = {
    el: {
      title: "Ο χώρος μας",
      desc: "Φροντίζουμε ο χώρος μας να σε κάνει να νιώθεις άνετα και ευχάριστα κάθε φορά που έρχεσαι.",
      btn: "Μάθε περισσότερα",
    },
    en: {
      title: "Our Office",
      desc: "We make sure our space helps you feel comfortable and relaxed every time you visit.",
      btn: "Learn more",
    },
  };

  const L = M[locale] || M.el;

  const previewImages = [
    "/images/office/20.webp",
    "/images/office/17.webp",
    "/images/office/21.webp",
    "/images/office/4.webp",
    "/images/office/10.webp",
    "/images/office/38.webp",
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="title-teal">{L.title}</h2>
          <div className="max-w-xl mb-8">
            <p className="text-gray-700 text-lg">{L.desc}</p>
            <div className="mt-4">
              <Link href="/office" className="btn">
                {L.btn}
              </Link>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[5/3] shadow-lg overflow-hidden bg-white"
            >
              <img
                src={src}
                alt={`Office ${idx + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

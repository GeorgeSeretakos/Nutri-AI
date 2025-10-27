import { cookies } from "next/headers";

export default function FirstSession() {
  const cookieLocale = cookies().get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

  const M = {
    el: {
      title: "Η Πρώτη Συνάντηση",
      text: `Η πρώτη επαφή αφιερώνεται στο να γνωρίσουμε τη ζωή, τις συνήθειες και τα ενδιαφέροντά σου. Δηλαδή εσένα! Συλλέγουμε το ιατρικό ιστορικό σου και εντοπίζουμε τις προσωπικές σου ανάγκες. Στη συνέχεια, πραγματοποιούμε ζύγισμα ώστε να σχεδιάσουμε μαζί ένα πλάνο διατροφής που ανταποκρίνεται στις προτιμήσεις και τους στόχους σου.`,
    },
    en: {
      title: "The First Session",
      text: `The first meeting is dedicated to getting to know your life, habits, and interests — in other words, you! We collect your medical history and identify your individual needs. Then we perform a body composition analysis to design together a nutrition plan that truly matches your preferences and goals.`,
    },
  };

  const L = M[locale];

  return (
    <section className="relative py-12 px-4 text-white flex items-center h-[50vh]">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src="/images/food/2.webp"
          alt={L.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}
      </div>

      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{L.title}</h2>
        <p className="text-lg leading-7">{L.text}</p>
      </div>
    </section>
  );
}

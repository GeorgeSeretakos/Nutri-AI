import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar";
import { cookies } from "next/headers";

const officeImages = [
  "/images/office/4.webp",
  "/images/office/7.webp",
  "/images/office/16.webp",
  "/images/office/17.webp",
  "/images/office/24.webp",
  "/images/office/23.webp",
  "/images/office/25.webp",
  "/images/office/32.webp",
  "/images/office/34.webp",
  "/images/office/38.webp",
];

export default function OfficePage() {
  const cookieLocale = cookies().get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

  const M = {
    el: {
      title: "Ο Χώρος μας",
      paragraph: (
        <>
          <p>
            Στη <strong className="font-great-vibes">Believe in Yourself</strong> σε υποδεχόμαστε σε έναν φωτεινό και
            ζεστό χώρο, στην περιοχή της Κηφισιάς. Το γραφείο μας έχει σχεδιαστεί για να προσφέρει ηρεμία και εμπιστοσύνη
            από την πρώτη στιγμή, χωρίς πρόβλημα parking!
          </p>

          <p className="mt-6">
            <strong>Εδώ μπορούμε μαζί:</strong>
          </p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Να γνωριστούμε και να συζητήσουμε για τις ανάγκες, τους στόχους και τις προτεραιότητές σου.</li>
            <li>Να χαράξουμε το προσωπικό σου πλάνο και να βρούμε λύσεις που ταιριάζουν στη δική σου καθημερινότητα.</li>
            <li>Να δουλέψουμε πάνω σε νέες συνήθειες και σκέψεις που ενισχύουν την αυτοπεποίθηση και την ισορροπία σου.</li>
          </ul>

          <p className="mt-6">
            <i>Σε περιμένουμε για να κάνουμε μαζί το πρώτο βήμα!</i>
          </p>
        </>
      ),
      imgAlt: (i) => `Φωτογραφία χώρου ${i}`,
    },
    en: {
      title: "Our Space",
      paragraph: (
        <>
          <p>
            At <strong className="font-great-vibes">Believe in Yourself</strong> we welcome you into a bright, warm space
            in Kifisia. Our office is designed to offer calm and trust from the very first moment—plus easy parking!
          </p>

          <p className="mt-6">
            <strong>Here we can:</strong>
          </p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Get to know each other and discuss your needs, goals, and priorities.</li>
            <li>Outline your personal plan and find solutions that fit your everyday life.</li>
            <li>Work on new habits and mindsets that strengthen your confidence and balance.</li>
          </ul>

          <p className="mt-6">
            <i>Let's take the first step together!</i>
          </p>
        </>
      ),
      imgAlt: (i) => `Office photo ${i}`,
    },
  };

  const L = M[locale];

  return (
    <>
      <Navbar />
      <main className="min-h-screen mt-16">
        <IntroSection image="/images/office/13.webp" title={L.title} paragraph={L.paragraph} />

        <div className="grid gap-6 md:grid-cols-1 px-0 md:px-12 py-12">
          {officeImages.map((src, index) => (
            <div
              key={index}
              className="
                relative w-full m-auto h-[40vh]
                md:h-[80vh]
                overflow-hidden
                shadow-none md:shadow-md
                rounded-none md:rounded-lg
              "
            >
              <img
                src={src}
                alt={L.imgAlt(index + 1)}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

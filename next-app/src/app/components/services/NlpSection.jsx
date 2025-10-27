import { cookies } from "next/headers";

export default function NlpSection() {
  const cookieLocale = cookies().get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

  const M = {
    el: {
      title: <>Το NLP μας πάει ένα βήμα παραπέρα — <i>πιο γρήγορα</i></>,
      p1: <>Αυτό που κάνει τη δική μου προσέγγιση διαφορετική είναι η αξιοποίηση του <strong>Νευρογλωσσικού Προγραμματισμού (NLP)</strong>.</>,
      p2: "Μέσα από τις συνεδρίες, θα χτίσουμε μια σχέση εμπιστοσύνης και σύνδεσης — και θα βρεις έναν άνθρωπο που ΠΡΑΓΜΑΤΙΚΑ σε καταλαβαίνει.",
      p3: <>Δεν αντικαθιστώ τον ψυχοθεραπευτή. Δεν διεκδικώ και δεν αγγίζω τέτοια μονοπάτια. Σε αντίθεση με άλλες προσεγγίσεις, με το NLP δουλεύουμε με ό,τι σε απασχολεί <strong>τώρα</strong>. Εστιάζουμε άμεσα στα εμπόδια που δυσκολεύουν τη διατροφή σου, για να τα ξεπεράσεις και να δεις αποτέλεσμα <strong>χωρίς καθυστέρηση</strong>.</>,
    },
    en: {
      title: <>NLP takes us a step further — <i>faster</i></>,
      p1: <>What makes my approach different is using <strong>Neuro-Linguistic Programming (NLP)</strong>.</>,
      p2: "Through our sessions, we’ll build trust and genuine connection—you’ll feel truly understood.",
      p3: <>I don’t replace psychotherapy and I don’t claim that path. Unlike other approaches, with NLP we work on what concerns you <strong>now</strong>. We focus directly on the obstacles affecting your eating so you overcome them and see results <strong>without delay</strong>.</>,
    },
  };
  const L = M[locale];

  return (
    <section className="w-full py-12 bg-teal-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="title-teal">{L.title}</h2>
          <p className="leading-7 mb-4">{L.p1}</p>
          <p className="leading-7 mb-4">{L.p2}</p>
          <p className="leading-7">{L.p3}</p>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/general/nlp.png"
            alt="NLP"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

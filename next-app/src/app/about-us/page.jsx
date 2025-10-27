import AboutSection from "../components/AboutSection";
import NlpSection from "../components/services/NlpSection";
import IntroSection from "../components/IntroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Advantages from "../components/services/Advantages/Advantages";
import { cookies } from "next/headers";

export default function AboutPage() {
  const cookieLocale = cookies().get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

  const M = {
    el: {
      hero: {
        title: "Ποιοι Είμαστε",
        paragraph: (
          <>
            <p>Γεια σου!</p>
            <p>
              Είμαι η <strong>Τόνια Καπαρελιώτη</strong>, διαιτολόγος-διατροφολόγος και ιδρύτρια της εταιρείας{" "}
              <strong className="font-great-vibes">Believe in Yourself</strong>. Πιστεύω ότι η διατροφή είναι
              κάτι πολύ περισσότερο από ένα πρόγραμμα με κανόνες — είναι μια προσωπική διαδρομή που ξεκινά από την
              κατανόηση του εαυτού σου και καταλήγει σε μια ζωή πιο υγιή και ουσιαστικά φροντισμένη.
            </p>
          </>
        ),
      },
      journey: {
        title: "Η Διαδρομή & <br> Η Προσέγγισή μου",
        image: "/images/tonia/1.webp",
        description: [
          `Ξεκίνησα την επαγγελματική μου πορεία στον χώρο των επιχειρήσεων, με σπουδές στα Οικονομικά και πολυετή εμπειρία σε θέσεις Marketing, πωλήσεων και προμηθειών σε μεγάλες εταιρείες.`,
          `Πολύ γρήγορα, όμως, κατάλαβα ότι αυτό που με γεμίζει πραγματικά είναι η επικοινωνία με τους ανθρώπους και η ικανότητά μου να τους καταλαβαίνω σε βάθος από όποιο πόστο και αν αυτό χρειάζονται.`,
          `Η αγάπη μου για τη διατροφή υπήρχε πάντα, και με οδήγησε να σπουδάσω Διατροφολογία στο Πανεπιστήμιο του Greenwich. Αφού η ζωή μου έδωσε μια δεύτερη ευκαιρία να αποφασίσω "τι θέλω να γίνω όταν μεγαλώσω", μου έδωσε την ευκαιρία να κάνω αυτό που αγαπώ: <strong>να βοηθάω ανθρώπους να νιώσουν καλύτερα με τον εαυτό τους</strong> — όχι μόνο μέσα από τη διατροφή τους, αλλά και μέσα από τη σχέση τους με το φαγητό και με το σώμα τους.`,
          `Δεν εφαρμόζω γενικά πλάνα ή αυστηρούς κανόνες, αλλά δημιουργώ λύσεις που προσαρμόζονται στη δική σου καθημερινότητα, τις υποχρεώσεις, τα ταξίδια και τις προτιμήσεις σου.`,
        ],
      },
      action: {
        title: "Η Δράση μου",
        image: "/images/tonia/2.webp",
        description: [
          `Η διατροφή δεν περιορίζεται στο γραφείο. Γι’ αυτό και συνεργάζομαι με εταιρείες και οργανισμούς στην Ελλάδα και το εξωτερικό, σχεδιάζοντας πρακτικά προγράμματα για εργαζόμενους με διαφορετικές ανάγκες.`,
          `Παράλληλα, συμμετέχω σε σεμινάρια και διαδικτυακές δράσεις, με στόχο να μεταδώσω χρήσιμες γνώσεις. Μέσα από διάφορα μέσα επικοινωνίας (τηλεοπτικές εμφανίσεις, social media, αρθρογραφία σε περιοδικά) στόχος μου είναι να φτάσει η διατροφική φροντίδα σε όσο το δυνατόν περισσότερους ανθρώπους.`,
        ],
      },
      maria: {
        title: "Μαρία Κοκορέ - Υπέυθυνη Ανάπτυξης",
        image: "/images/maria/1.jpg",
        description: [
          `Ονομάζομαι Κοκορέ Μαρία και πάντα με ενδιέφερε η ανθρώπινη επαφή και η ουσιαστική επικοινωνία με τους ανθρώπους.`,
          `Στην επαγγελματική μου πορεία έχω εργαστεί σε εμπορικές και εισαγωγικές εταιρείες, σε πολυεθνική κινητής τηλεφωνίας και σε άλλους μεγάλους Οργανισμούς, σε θέσεις που αφορούν την υποστήριξη και εξυπηρέτηση πελατών.`,
          `Σήμερα εργάζομαι ως <strong>Υπεύθυνη Ανάπτυξης</strong> στην εταιρεία <strong class="font-great-vibes">Believe in Yourself</strong> της διατροφολόγου & NLP Coach Τόνιας Καπαρελιώτη.`,
          `Ο κόσμος της διατροφής και όχι μόνο, με αφορά και προσωπικά. Είναι ένας χώρος στον οποίο νιώθω οικεία, και μέσα από τον οποίο θέλω να συνεχίσω να μαθαίνω και να εξελίσσομαι και να παραμένω υγιής εφαρμόζοντας σωστές για εμένα πρακτικές.`,
        ],
      },
    },

    en: {
      hero: {
        title: "About Us",
        paragraph: (
          <>
            <p>Hello!</p>
            <p>
              I’m <strong>Tonia Kaparelioti</strong>, a dietitian–nutritionist and founder of{" "}
              <strong className="font-great-vibes">Believe in Yourself</strong>. I believe nutrition is far more than a
              rule-based plan — it’s a personal journey that starts with understanding yourself and leads to a healthier,
              genuinely cared-for life.
            </p>
          </>
        ),
      },
      journey: {
        title: "My Journey & <br> My Approach",
        image: "/images/tonia/1.webp",
        description: [
          `I began my professional path in business, with studies in Economics and years of experience in Marketing, Sales, and Procurement roles in large companies.`,
          `Soon I realized that what truly fulfills me is communicating with people and my ability to deeply understand them—wherever I’m needed.`,
          `My love for nutrition was always there and led me to study Nutrition at the University of Greenwich. After life gave me a second chance to decide “what I want to be when I grow up,” I embraced what I love: <strong>helping people feel better about themselves</strong>—not only through their diet but also through their relationship with food and their body.`,
          `I don’t apply generic plans or strict rules. I create solutions tailored to your everyday life, obligations, travel, and preferences.`,
        ],
      },
      action: {
        title: "What I Do",
        image: "/images/tonia/2.webp",
        description: [
          `Nutrition isn’t confined to the office. I collaborate with companies and organizations in Greece and abroad, designing practical programs for employees with diverse needs.`,
          `I also participate in seminars and online initiatives to share useful knowledge. Through various media (TV appearances, social media, magazine articles) my goal is to bring nutrition care to as many people as possible.`,
        ],
      },
      maria: {
        title: "Maria Kokore — Growth Lead",
        image: "/images/maria/1.jpg",
        description: [
          `My name is Maria Kokore, and I’ve always been interested in genuine human connection and communication.`,
          `In my career I’ve worked in commercial/import companies, a multinational telecom, and other large organizations in customer support and service roles.`,
          `Today I work as <strong>Growth Lead</strong> at <strong class="font-great-vibes">Believe in Yourself</strong>, alongside Dietitian & NLP Coach Tonia Kaparelioti.`,
          `Nutrition—and wellbeing more broadly—matters to me personally. It’s a space where I feel at home and want to keep learning, evolving, and staying healthy by applying the practices that work for me.`,
        ],
      },
    },
  };

  const L = M[locale];

  return (
    <>
      <Navbar />
      <main className="mt-16">
        <IntroSection
          image="/images/office/18.webp"
          title={L.hero.title}
          paragraph={L.hero.paragraph}
        />

        <AboutSection
          title={L.journey.title}
          image={L.journey.image}
          fullWidthTitle={false}
          reverse
          description={L.journey.description}
        />

        <AboutSection
          title={L.action.title}
          fullWidthTitle={false}
          image={L.action.image}
          description={L.action.description}
        />

        <NlpSection />

        <AboutSection
          title={L.maria.title}
          fullWidthTitle={false}
          image={L.maria.image}
          description={L.maria.description}
        />

        <Advantages />

        <Footer />
      </main>
    </>
  );
}

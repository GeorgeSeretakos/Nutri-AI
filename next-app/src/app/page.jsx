import HeroSection from "./components/home/HeroSection";
import PhilosophySection from "./components/home/PhilosophySection";
import TestimonialsCarousel from "@/app/components/home/TestimonialsCarousel";
import OfficePreviewSection from "@/app/components/home/OfficePreviewSection";
import QuoteSection from "@/app/components/home/QuoteSection";
import StatsSection from "@/app/components/home/StatsSection";
import CompaniesCarousel from "@/app/components/home/CompaniesCarousel";
import Footer from "@/app/components/Footer";
import ServicesSection from "@/app/components/services/ServicesSection";
import BlogPreviewSection from "@/app/components/home/BlogPreviewSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import services from "../../public/data/services";
import { cookies } from "next/headers"; // ✅ server-side

const M = {
  el: {
    about1: {
      title: "Η διατροφή σου δεν είναι το πρόβλημα — Είναι το σύμπτωμα",
      desc: [
        `Δεν πιστεύω στις "στερητικές δίαιτες". Πιστεύω στη <strong>φροντίδα</strong>. Με πολυετή εμπειρία στη διατροφολογία, ξεκινώντας πρώτα από διαιτώμενη και συνεχίζοντας ως Διατροφολόγος, ονειρεύτηκα να βοηθώ ανθρώπους να σταματήσουν να ζουν με ενοχές γύρω από το φαγητό και να αποκτήσουν ξανά <strong>ισορροπία</strong> και <strong>σύνδεση</strong> με τον εαυτό τους.`,
        `Η διατροφική διαχείριση καθοδηγείται από τα συναισθήματα, τις επαναλαμβανόμενες συμπεριφορές, τα εσωτερικά και εξωτερικά εμπόδια. Γι' αυτό προτεραιότητά μου είναι πρώτα να <strong>σε ακούσω και να σε καταλάβω ουσιαστικά</strong>, ώστε να μπορώ να σε στηρίξω με τρόπο που πραγματικά σου ταιριάζει.`,
        `Με τη βοήθεια εργαλείων που μου δίνουν οι σπουδές μου πάνω στον Νευρογλωσσικό Προγραμματισμό (NLP), οι αλλαγές δεν αργούν να φανούν. Όταν βρούμε μαζί το γιατί και όχι το πρέπει, τότε πίστεψέ με <strong>απελευθερώνεσαι πραγματικά</strong>. Και αυτό δεν αλλάζει μόνο τη διατροφή σου — αλλάζει τη <strong>ζωή σου!</strong>`,
      ],
      cta: "Μάθε περισσότερα για εμένα",
      ctaLink: "/about-us",
    },
    services: {
      title: "Οι υπηρεσίες μας",
      paragraphs: [
        `Οι υπηρεσίες μας δεν είναι "ένας ακόμα οδηγός διατροφής", αλλά μια <strong>προσωπική διαδικασία αλλαγής</strong> που αγγίζει όχι μόνο το σώμα, αλλά και τον τρόπο που <strong>φροντίζεις τον εαυτό σου</strong> συνολικά.`,
      ],
      cta: "Προβολή όλων",
      href: "/services",
    },
    about2: {
      title: "Φεύγοντας, πάρε κάτι μαζί σου!",
      desc: [
        `Η σχέση μας δεν τελειώνει στο γραφείο. Με την <strong>προσωπική ηλεκτρονική πλατφόρμα</strong> που δημιουργήσαμε, κάθε πελάτης μας έχει τον δικό του λογαριασμό και πρόσβαση σε όλα τα αρχεία του – <strong>διατροφές</strong>, <strong>μετρήσεις</strong> και <strong>φωτογραφίες προόδου</strong>. Έτσι, οποιαδήποτε στιγμή χρειαστεί να ανατρέξεις στα δικά σου και μόνο δικά σου αρχεία, έχεις πρόσβαση στον φάκελό σου από όπου κι αν βρίσκεσαι!`,
        `Η πλατφόρμα μας σου παρέχει:`,
      ],
      ticks: [
        "Πρόσβαση στα διατροφικά σου πλάνα, τις μετρήσεις σου & τις φωτογραφίες σου",
        "Προσωπικός λογαριασμός για κάθε μεμονωμένο πελάτη μας με σεβασμό στα προσωπικά δεδομένα",
        "Συνεχής παρακολούθηση της προόδου σου",
        "Εύκολη πρόσβαση από παντού και για πολύ καιρό μετά το τέλος της συνεργασίας μας",
      ],
      cta: "Συνδέσου στην πλατφόρμα",
      ctaLink: "/login",
    },
  },
  en: {
    about1: {
      title: "Your diet is not the problem — It’s the symptom",
      desc: [
        `I don’t believe in “deprivation diets.” I believe in <strong>care</strong>. With years of nutrition experience—first as a client myself and later as a Dietitian—I set out to help people drop the guilt around food and regain <strong>balance</strong> and <strong>self-connection</strong>.`,
        `Eating management is driven by emotions, repeated behaviors, and internal/external barriers. That’s why my priority is to <strong>truly listen to you</strong>, so I can support you in a way that genuinely fits your life.`,
        `With tools from NLP, changes don’t take long to show. When we find the “why” together—not the “should”—you <strong>truly feel free</strong>. And that doesn’t only change your diet—it changes your <strong>life!</strong>`,
      ],
      cta: "Learn more about me",
      ctaLink: "/about-us",
    },
    services: {
      title: "Our services",
      paragraphs: [
        `Our services are not “just another meal plan,” but a <strong>personal change process</strong> that touches not only the body, but how you <strong>care for yourself</strong> overall.`,
      ],
      cta: "View all",
      href: "/services",
    },
    about2: {
      title: "Before you go, take something with you!",
      desc: [
        `Our relationship doesn’t end at the office. With the <strong>personal online platform</strong> we built, every client has their own account and access to all their files—<strong>nutrition plans</strong>, <strong>measurements</strong>, and <strong>progress photos</strong>. Anytime you need your personal files, you can access your folder from anywhere!`,
        `The platform offers you:`,
      ],
      ticks: [
        "Access to your plans, measurements & photos",
        "Personal account for each client, respecting privacy",
        "Ongoing progress tracking",
        "Easy access from anywhere, long after our work together",
      ],
      cta: "Log in to the platform",
      ctaLink: "/login",
    },
  },
};

export default function Home() {
  const cookieStore = cookies();
  const cookieLocale = cookieStore.get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el"; // ✅ server-safe
  const L = M[locale];

  return (
    <main className="mt-16">
      <Navbar />
      <HeroSection />
      <PhilosophySection />

      <AboutSection
        title={L.about1.title}
        image="/images/tonia/5.webp"
        reverse={false}
        fullWidthTitle={false}
        description={L.about1.desc}
        ctaText={L.about1.cta}
        ctaLink={L.about1.ctaLink}
      />

      <ServicesSection
        title={L.services.title}
        paragraphs={L.services.paragraphs}
        services={services}
        ctaText={L.services.cta}
        ctaHref={L.services.href}
      />

      <AboutSection
        title={L.about2.title}
        image="/images/general/laptop.webp"
        reverse={true}
        fullWidthTitle={false}
        description={L.about2.desc}
        ticks={L.about2.ticks}
        ctaText={L.about2.cta}
        ctaLink={L.about2.ctaLink}
      />

      <QuoteSection />
      <OfficePreviewSection />
      <TestimonialsCarousel />
      <StatsSection />
      <BlogPreviewSection />
      <CompaniesCarousel />
      <Footer />
    </main>
  );
}

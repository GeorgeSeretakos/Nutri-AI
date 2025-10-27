import IntroSection from "../components/IntroSection";
import FirstSession from "../components/services/FirstSession";
import ServicesSection from "../components/services/ServicesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import services from "../../../public/data/services";
import AboutSection from "../components/AboutSection";
import { cookies } from "next/headers";

export default function ServicesPage() {
  const cookieLocale = cookies().get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

  const M = {
    el: {
      intro: {
        title: "Οι Υπηρεσίες μας",
        paragraph: (
          <p>
            Στη <strong className="font-great-vibes">Believe in Yourself</strong>, οι υπηρεσίες μας δεν περιορίζονται σε
            τυπικά διαιτολόγια, αλλά αγγίζουν βαθύτερα τις συνήθειες και τα συναισθήματα που συνδέονται με τη διατροφή
            μας. Μαζί δημιουργούμε ρεαλιστικά, άμεσα εφαρμόσιμα πλάνα που ταιριάζουν στη δική σου ζωή, και
            αντιμετωπίζουμε τα βάρη που μπλοκάρουν τη ζωή και τη διατροφή σου.
          </p>
        ),
      },
      servicesSection: {
        title: "Οι υπηρεσίες μας",
        paragraphs: [
          "Με ένα φάσμα υπηρεσιών, προσπαθούμε να καλύψουμε ανάγκες καθημερινών ανθρώπων που χρειάζονται φροντίδα. Τόσο σε προσωπικό όσο και σε εταιρικό επίπεδο, προτεραιότητά μας είναι να ακούσουμε την ανάγκη του καθενός και μετά να περάσουμε στη σωστή πρακτική και στοχοθεσία.",
        ],
      },
      platform: {
        title: "Φεύγοντας, πάρε κάτι μαζί σου!",
        desc: [
          `Η διατροφή δεν τελειώνει στο γραφείο. Με την <strong>προσωπική ηλεκτρονική πλατφόρμα</strong> που δημιουργήσαμε, κάθε πελάτης μας έχει τον δικό του λογαριασμό και πρόσβαση σε όλα τα αρχεία του – <strong>διατροφές</strong>, <strong>μετρήσεις</strong> και <strong>φωτογραφίες προόδου</strong>. Έτσι, κάθε φορά που φεύγεις από το ραντεβού, «παίρνεις» μαζί σου κάτι χειροπιαστό, που μπορείς να δεις και να αξιοποιήσεις ανά πάσα στιγμή.`,
          `Η πλατφόρμα δεν είναι απλώς αποθήκευση αρχείων. Είναι ένα <strong>εργαλείο παρακολούθησης και εξέλιξης</strong>, που σου δείχνει καθαρά την πρόοδό σου, σε κρατά οργανωμένο και σου δίνει συνεχή υποστήριξη. Με αυτόν τον τρόπο, η συνεργασία μας γίνεται πιο ουσιαστική, πιο διαδραστική και προσαρμοσμένη στους ρυθμούς σου.`,
        ],
        ticks: [
          "Πρόσβαση σε διατροφές, μετρήσεις & φωτογραφίες",
          "Προσωπικός λογαριασμός για κάθε πελάτη",
          "Συνεχής παρακολούθηση της προόδου",
        ],
        ctaText: "Συνδέσου στην πλατφόρμα",
        ctaLink: "/login",
      },
      dna: {
        title: "Το DNA σου κρύβει τα μυστικά της διατροφής σου",
        desc: [
          "Με το <strong>DNA Test 3 σε 1</strong>, που προσφέρουμε, ανακαλύπτεις πώς το σώμα σου ανταποκρίνεται σε θρεπτικά συστατικά, βιταμίνες και άσκηση. Έτσι, αντί για γενικές οδηγίες, αποκτάς ένα <strong>προσωποποιημένο πλάνο διατροφής</strong> με πληροφορίες εκ των έσω. Δεν μαντεύουμε! Απαντάμε στη φύση!",
          "Το τεστ αποκαλύπτει ευαισθησίες σε: λακτόζη, γλουτένη, υδατάνθρακες κ.ά., πιθανές ελλείψεις σε βιταμίνες και προδιάθεση σε τραυματισμούς. Με αυτά τα δεδομένα, σχεδιάζουμε μαζί ένα <strong>στοχευμένο πρόγραμμα διατροφής και ευεξίας</strong>, ώστε να πετύχεις τους στόχους σου με ασφάλεια και επιστημονική τεκμηρίωση.",
        ],
        ticks: ["Εξατομικευμένη διατροφή", "Πρόληψη ελλείψεων βιταμινών", "Βελτίωση ευεξίας & επιδόσεων"],
      },
      tanita: {
        title: "Μάθε την ποιότητα του σώματός σου μέσα από αξιόπιστη τεχνολογία",
        desc: [`Με το <strong>TANITA MC-780 MA-N</strong>, έχεις τη δυνατότητα να μάθεις με ακρίβεια:`],
        ticks: [
          "Τον βασικό μεταβολισμό σου",
          "Σε % και κιλά το λίπος και τους μύες του σώματός σου",
          "Πιθανές κατακρατήσεις στο σώμα",
          "Να αναγνωρίσεις αναλυτικά πώς είναι δομημένο το σώμα σου",
        ],
        ctaText: "Κλείσε το ραντεβού σου",
        ctaLink: "/contact",
      },
      online: {
        title: "Online Συνεδρίες",
        desc: [
          `Η σύγχρονη τεχνολογία μας επιτρέπει να συνεργαστούμε από όπου κι αν βρίσκεσαι — στο σπίτι, στο γραφείο ή ακόμα και στο εξωτερικό — με την ίδια άνεση και αποτελεσματικότητα!`,
          `Τα ραντεβού πραγματοποιούνται μέσω Microsoft Teams, Zoom, Viber ή ό,τι άλλο σε διευκολύνει, με εύκολη σύνδεση και χωρίς πολύπλοκες διαδικασίες.`,
          `Η εμπειρία είναι εξίσου προσωπική και υποστηρικτική με τη δια ζώσης συνεδρία, χωρίς να επηρεάζεται από την απόσταση ή τον τόπο διαμονής σου.`,
          `<i>Μαζί μπορούμε να πετύχουμε κάθε στόχο — <strong>όπου κι αν βρίσκεσαι!</strong></i>`,
        ],
      },
    },

    en: {
      intro: {
        title: "Our Services",
        paragraph: (
          <p>
            At <strong className="font-great-vibes">Believe in Yourself</strong>, our services go beyond standard meal
            plans. We address the deeper habits and emotions tied to eating. Together we create realistic, immediately
            applicable plans that fit your life—and work through the burdens that block both your life and your nutrition.
          </p>
        ),
      },
      servicesSection: {
        title: "Our services",
        paragraphs: [
          "With a range of services, we aim to support everyday people who need care. Whether individually or for companies, our priority is to listen to each person’s needs first—then move to the right practice and goal-setting.",
        ],
      },
      platform: {
        title: "Before you go, take something with you!",
        desc: [
          `Nutrition doesn’t end at the office. With the <strong>personal online platform</strong> we built, every client has their own account and access to all their files—<strong>plans</strong>, <strong>measurements</strong>, and <strong>progress photos</strong>. Each time you leave an appointment, you “take” something tangible you can revisit anytime.`,
          `The platform isn’t just file storage. It’s a <strong>tool for tracking and growth</strong> that clearly shows your progress, keeps you organized, and offers ongoing support—making our collaboration more meaningful, interactive, and tailored to your pace.`,
        ],
        ticks: [
          "Access to plans, measurements & photos",
          "Personal account for every client",
          "Ongoing progress tracking",
        ],
        ctaText: "Log in to the platform",
        ctaLink: "/login",
      },
      dna: {
        title: "Your DNA hides the secrets of your nutrition",
        desc: [
          `With the <strong>3-in-1 DNA Test</strong> we offer, you discover how your body responds to nutrients, vitamins, and exercise. Instead of generic advice, you get a <strong>personalized nutrition plan</strong> informed from the inside out. We don’t guess—we answer to nature!`,
          `The test reveals sensitivities (e.g., lactose, gluten, carbohydrates), potential vitamin deficiencies, and predisposition to injuries. With these insights we co-design a <strong>targeted plan for nutrition and wellbeing</strong> so you can reach your goals safely and with scientific backing.`,
        ],
        ticks: ["Personalized nutrition", "Prevent vitamin deficiencies", "Improve wellbeing & performance"],
      },
      tanita: {
        title: "Learn your body’s composition with reliable technology",
        desc: [`With the <strong>TANITA MC-780 MA-N</strong>, you can accurately learn:`],
        ticks: [
          "Your basal metabolic rate",
          "Body fat and muscle in % and kg",
          "Potential water retention",
          "A clear breakdown of how your body is structured",
        ],
        ctaText: "Book your appointment",
        ctaLink: "/contact",
      },
      online: {
        title: "Online Sessions",
        desc: [
          `Modern technology lets us work together from anywhere—at home, at the office, even abroad—with the same comfort and effectiveness!`,
          `Appointments can be held via Microsoft Teams, Zoom, Viber, or whatever suits you best—easy to join, no complicated steps.`,
          `The experience is just as personal and supportive as in-person sessions, regardless of distance.`,
          `<i>Together we can achieve any goal—<strong>wherever you are!</strong></i>`,
        ],
      },
    },
  };

  const L = M[locale];

  return (
    <>
      <Navbar />
      <main className="w-full mt-16">
        <IntroSection image="/images/office/25.webp" title={L.intro.title} paragraph={L.intro.paragraph} />

        <ServicesSection
          title={L.servicesSection.title}
          paragraphs={L.servicesSection.paragraphs}
          services={services}
        />

        <AboutSection
          title={L.platform.title}
          image="/images/general/laptop.webp"
          reverse={true}
          fullWidthTitle={false}
          description={L.platform.desc}
          ticks={L.platform.ticks}
          ctaText={L.platform.ctaText}
          ctaLink={L.platform.ctaLink}
        />

        <AboutSection
          title={L.dna.title}
          image="/images/general/dna.webp"
          fullWidthTitle={false}
          reverse={false}
          description={L.dna.desc}
          ticks={L.dna.ticks}
        />

        <AboutSection
          title={L.tanita.title}
          image="/images/general/TANITA-2.jpg"
          reverse={true}
          fullWidthTitle={false}
          description={L.tanita.desc}
          ticks={L.tanita.ticks}
          ctaText={L.tanita.ctaText}
          ctaLink={L.tanita.ctaLink}
        />

        <FirstSession />

        <AboutSection
          title={L.online.title}
          image="/images/general/online-meeting.webp"
          reverse
          fullWidthTitle={false}
          description={L.online.desc}
        />

        <Footer />
      </main>
    </>
  );
}

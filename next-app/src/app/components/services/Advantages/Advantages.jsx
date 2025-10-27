import styles from "./Advantages.module.css";
import { cookies } from "next/headers";

export default function Advantages() {
  const cookieLocale = cookies().get("locale")?.value;
  const locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "el";

  const M = {
    el: {
      title: "Η προσέγγισή μας στη διατροφή",
      items: [
        {
          size: "large",
          bg: "/images/food/17.webp",
          h3: "Ρεαλισμός",
          p: "Με διάρκεια, χωρίς να περιμένω να έχει αρχή και τέλος. Σχεδιάζουμε κάτι που θα αντέξει — όχι κάτι που θα σε εξαντλήσει.",
        },
        {
          size: "small",
          bg: "/images/food/1.webp",
          h3: "Ισορροπία",
          p: "Οι απολαύσεις χωράνε! Σημαντικό: να μάθω και πώς να το απολαμβάνω χωρίς τύψεις",
        },
        {
          size: "small",
          bg: "/images/food/18.webp",
          h3: "Προσαρμογή",
          p: "Κάθε πλάνο προσαρμόζεται στις ανάγκες σου: ωράριο, ρυθμός ζωής, δραστηριότητες, ταξίδια.",
        },
        {
          size: "large",
          bg: "/images/food/11.webp",
          h3: "Σταθερή Υποστήριξη",
          p: "Επικοινωνούμε όποτε νιώθεις ότι το χρειάζεσαι και πέραν των ραντεβού. Με ενδιαφέρει πώς περνάς, αν σου ταίριαξε το πλάνο—δεν περιμένω το επόμενο ραντεβού.",
        },
      ],
    },
    en: {
      title: "Our approach to nutrition",
      items: [
        {
          size: "large",
          bg: "/images/food/17.webp",
          h3: "Realism",
          p: "Built to last—not to exhaust you. We design something sustainable, not something with a short beginning and end.",
        },
        {
          size: "small",
          bg: "/images/food/1.webp",
          h3: "Balance",
          p: "Pleasures fit in! The key: learn how to enjoy them—without guilt.",
        },
        {
          size: "small",
          bg: "/images/food/18.webp",
          h3: "Adaptation",
          p: "Every plan adapts to your needs: schedule, lifestyle, activities, travel.",
        },
        {
          size: "large",
          bg: "/images/food/11.webp",
          h3: "Consistent Support",
          p: "We’re in touch whenever you need it, beyond appointments. I care how you’re doing and whether the plan fits—you don’t wait for the next visit.",
        },
      ],
    },
  };

  const L = M[locale];

  return (
    <section className="py-12">
      <div className={styles.container}>
        <h2 className="text-center title-black">{L.title}</h2>

        <div className={styles["advantage-grid"]}>
          {L.items.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${card.size === "large" ? styles.large : styles.small}`}
              style={{ backgroundImage: `url('${card.bg}')` }}
            >
              <div className={styles.content}>
                <h3>{card.h3}</h3>
                <p>{card.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

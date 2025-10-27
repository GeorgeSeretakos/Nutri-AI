const testimonials = [
  {
    name: "Venia Marini",
    initial: "V",
    stars: 5,
    years_el: "2 ημέρες",
    years_en: "2 days",
    text_el:
      "Η Τόνια είναι ένας εξαιρετικός άνθρωπος πρώτα απ' όλα και πολύ καλή επαγγελματίας. Είναι η μοναδική διατροφολόγος με την οποία κατάφερα να χάσω κιλά και συνεχίζω. Έκανε αυτό που λέμε το κλικ και πιστεύω ότι αυτό έχει να κάνει με το ότι ασχολείται πολύ και με την ψυχολογία του ανθρώπου που έχει απέναντί της. Επίσης η διατροφή που δίνει είναι σύμφωνα με τις καθημερινές συνήθειες του καθενός χωρίς να χρειάζεται να μαγειρεύεις μόνο για τον εαυτό σου, το οποίο είναι πολύ δύσκολο όταν έχεις οικογένεια.",
    text_en:
      "Tonia is an exceptional person and a great professional. She’s the only nutritionist with whom I actually lost weight—and I’m still going. She made that ‘click’, largely because she truly considers the psychology of the person in front of her. The plans also fit everyday routines, so you don’t have to cook separately for yourself—crucial when you have a family.",
    avatar: null,
    color: "bg-orange-500",
  },
  {
    name: "Διονυσία Μουσμούτη",
    initial: "Δ",
    stars: 5,
    years_el: "2 ημέρες",
    years_en: "2 days",
    text_el:
      "Την συστήνω ανεπιφύλακτα! Βοήθησε εμένα και το αγόρι μου να χάσουμε κιλά και να φτάσουμε στο επιθυμητό αποτέλεσμα! Είναι πολύ γλυκιά, ευγενική και το σημαντικότερο είναι πρόθυμη να σε ακούσει και να σε βοηθήσει στο πρόβλημά σου... Ό,τι ώρα και να την χρειαστήκαμε ήταν εκεί δίπλα μας! ❤️",
    text_en:
      "Highly recommended! She helped me and my boyfriend lose weight and reach our goal. She’s sweet, kind, and—most importantly—willing to listen and help with your problem. Whenever we needed her, she was there for us! ❤️",
    avatar: null,
    color: "bg-green-500",
  },
  {
    name: "Georgia Theodoropoulou",
    initial: "G",
    stars: 5,
    years_el: "3 ημέρες",
    years_en: "3 days",
    text_el:
      "Είναι μοναδική! Δεν είναι μόνο εξαιρετική διαιτολόγος, αλλά και άνθρωπος που σε στηρίζει πραγματικά. Κάνει τη διατροφή να φαίνεται εύκολη και όμορφη.",
    text_en:
      "She’s unique! Not only an excellent dietitian, but someone who truly supports you. She makes nutrition feel easy and enjoyable.",
    avatar: null,
    color: "bg-blue-500",
  },
  {
    name: "ifisizou ifisizou",
    initial: "I",
    stars: 5,
    years_el: "3 ημέρες",
    years_en: "3 days",
    text_el: "Αν μπορούσα να βάλω κι άλλα αστεράκια θα τα έβαζα!!!!!💜💜🤗🤗🤗",
    text_en: "If I could give more stars, I would!!!!! 💜💜🤗🤗🤗",
    avatar: null,
    color: "bg-purple-500",
  },
  {
    name: "Marios Lazarou",
    initial: "M",
    stars: 5,
    years_el: "3 ημέρες",
    years_en: "3 days",
    text_el:
      "Εξαιρετική επαγγελματίας, με βοηθητικές συμβουλές και πρόγραμμα που μπορούσα να ακολουθήσω!",
    text_en:
      "Excellent professional, with helpful advice and a plan I could actually follow!",
    avatar: null,
    color: "bg-pink-500",
  },
  {
    name: "SOFIA ANTONATOU",
    initial: "S",
    stars: 5,
    years_el: "3 ημέρες",
    years_en: "3 days",
    text_el:
      "Η κα. Καπαρελιώτη είναι μια εξαίρετη διατροφολόγος με πολύ σύγχρονη ματιά και διάθεση να ακούσει τις ανάγκες μας. Προτεραιότητά της είναι να δημιουργεί προγράμματα διατροφής που να μπορούν να εφαρμοσθούν με ευκολία ώστε να εξασφαλίζεται η συνέχεια στην προσπάθεια, που είναι και το κλειδί της επιτυχίας. Ευχαριστώ πολύ για την όμορφη συνεργασία μας 🩵",
    text_en:
      "Ms. Kaparelioti is an outstanding nutritionist with a modern approach and the willingness to truly listen. She prioritizes creating plans that are easy to apply, ensuring continuity—which is the key to success. Thank you for the great collaboration 🩵",
    avatar: null,
    color: "bg-yellow-500",
  },
  {
    name: "Roi Vlessidi",
    initial: "R",
    stars: 5,
    years_el: "3 ημέρες",
    years_en: "3 days",
    text_el:
      "Εξαιρετική επαγγελματίας! Κατάλαβε αμέσως τις ανάγκες-δυνατότητές μου και είχα το επιθυμητό αποτέλεσμα. Μπράβο της! Τη συνιστώ ανεπιφύλακτα όχι μόνο για τη διατροφή αλλά και το συναισθηματικό support που δίνει απλόχερα.",
    text_en:
      "Excellent professional! She immediately understood my needs and capabilities and I achieved the desired result. Kudos! I highly recommend her not only for nutrition but also for the emotional support she gives generously.",
    avatar: null,
    color: "bg-teal-500",
  },
  {
    name: "Μαρία Ξένου",
    initial: "Μ",
    stars: 5,
    years_el: "2 ημέρες",
    years_en: "2 days",
    text_el:
      "Η εμπειρία μου με την Τόνια είναι μοναδική. Για αρχή μιλάμε για έναν γλυκό άνθρωπο και στη συνέχεια με έναν επαγγελματία. Με τη βοήθειά της μπόρεσα να χάσω 14 κιλά σε διάστημα 3 μηνών και συνεχίζουμε δυναμικά!",
    text_en:
      "My experience with Tonia is unique. First, she’s a kind person—and also a true professional. With her help I lost 14 kg in 3 months and we’re still going strong!",
    avatar: null,
    color: "bg-red-500",
  },
];

export default testimonials;

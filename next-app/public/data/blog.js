const posts = [



  // Recipes
  {
    slug: "banana-frozen-yogurt",
    image: "/images/blog/1.webp",
    category: "recipes",
    M: {
      el: {
        title: "Παγωτό Γιαούρτι Μπανάνα",
        contentHtml: `
      <section>
        <p><strong>Μερίδες:</strong> 4 &nbsp; <strong>Απόδοση:</strong> 4</p>
        <p><strong>Συνολικός χρόνος:</strong> 10’ &nbsp; <strong>Δυσκολία:</strong> Εύκολη &nbsp; <strong>Θερμίδες/μερίδα:</strong> 137,79 kcal &nbsp; <strong>Γεύμα:</strong> Επιδόρπιο (Λίγες θερμίδες, Χαμηλά λιπαρά)</p>
        <p><strong>Διατροφικό προφίλ:</strong> Υγιής Γήρανση / Υγιές Ανοσοποιητικό / Χωρίς Σόγια / Χωρίς Αυγό / Χωρίς Γλουτένη / Χαμηλή Περιεκτικότητα σε Θερμίδες</p>
      </section>

      <h3>Συστατικά</h3>
      <ul>
        <li>4 ώριμες μπανάνες</li>
        <li>¾ κούπας στραγγιστό γιαούρτι</li>
        <li>1 κ. γλυκού σιρόπι βανίλιας (προαιρετικά)</li>
      </ul>

      <h3>Εκτέλεση</h3>
      <ol>
        <li>Καθαρίστε και κόψτε τις μπανάνες σε φέτες. Καταψύξτε τις για 2 ώρες σε κλειστό δοχείο.</li>
        <li>Σε επεξεργαστή τροφίμων, προσθέστε τα παγωμένα κομμάτια μπανάνας, το γιαούρτι και το σιρόπι βανίλιας.</li>
        <li>Επεξεργαστείτε μέχρι το μείγμα να γίνει κρεμώδες, σταματώντας ενδιάμεσα για να ξύσετε τα τοιχώματα.</li>
        <li>Μεταφέρετε σε δοχείο και φυλάξτε στην κατάψυξη. Βγάλτε το 20′ πριν το σερβίρισμα.</li>
      </ol>

      <h3>Θρεπτικά συστατικά (ανά μερίδα)</h3>
      <table>
        <tbody>
          <tr><td><strong>Θερμίδες</strong></td><td>137,79 kcal</td></tr>
          <tr><td><strong>Υδατάνθρακες</strong></td><td>32,5 g</td></tr>
          <tr><td><strong>Φυτικές ίνες</strong></td><td>3,28 g</td></tr>
          <tr><td><strong>Σάκχαρα</strong></td><td>19,13 g</td></tr>
          <tr><td><strong>Πρωτεΐνη</strong></td><td>2,39 g</td></tr>
          <tr><td><strong>Λιπαρά</strong></td><td>1,15 g</td></tr>
          <tr><td><strong>Κορεσμένα</strong></td><td>0,61 g</td></tr>
          <tr><td><strong>Πολυακόρεστα</strong></td><td>0,11 g</td></tr>
          <tr><td><strong>Μονοακόρεστα</strong></td><td>0,24 g</td></tr>
          <tr><td><strong>Χοληστερίνη</strong></td><td>2,93 mg</td></tr>
          <tr><td><strong>Νάτριο</strong></td><td>12,92 mg</td></tr>
          <tr><td><strong>Κάλιο</strong></td><td>497,95 mg</td></tr>
        </tbody>
      </table>

      <h3>Διατροφικά οφέλη βασικών συστατικών</h3>
      <h4>Γιαούρτι</h4>
      <ul>
        <li>Πλούσιο σε πρωτεΐνη υψηλής βιολογικής αξίας (ιδίως το στραγγιστό).</li>
        <li>Καλή πηγή ασβεστίου, φωσφόρου, καλίου και βιταμινών Β (Β12, ριβοφλαβίνη).</li>
        <li>Περιέχει προβιοτικά που υποστηρίζουν την υγεία του εντέρου και το ανοσοποιητικό.</li>
      </ul>

      <h4>Μπανάνα</h4>
      <ul>
        <li>Πλούσια σε υδατάνθρακες για άμεση ενέργεια και φυτικές ίνες για πέψη.</li>
        <li>Εξαιρετική πηγή καλίου· περιέχει βιταμίνες C και Β6, μαγνήσιο και μαγγάνιο.</li>
        <li>Ελάχιστα λιπαρά, πολύ χαμηλή περιεκτικότητα σε πρωτεΐνη.</li>
      </ul>
      `,
      },
      en: {
        title: "Banana Frozen Yogurt",
        contentHtml: `
      <section>
        <p><strong>Servings:</strong> 4 &nbsp; <strong>Yield:</strong> 4</p>
        <p><strong>Total time:</strong> 10’ &nbsp; <strong>Difficulty:</strong> Easy &nbsp; <strong>Calories/serving:</strong> 137.79 kcal &nbsp; <strong>Meal:</strong> Dessert (Low-calorie, Low-fat)</p>
        <p><strong>Nutritional profile:</strong> Healthy Aging / Strong Immune System / Soy-free / Egg-free / Gluten-free / Low Calorie</p>
      </section>

      <h3>Ingredients</h3>
      <ul>
        <li>4 ripe bananas</li>
        <li>¾ cup strained yogurt</li>
        <li>1 tsp vanilla syrup (optional)</li>
      </ul>

      <h3>Instructions</h3>
      <ol>
        <li>Peel and slice the bananas. Freeze them for 2 hours in a sealed container.</li>
        <li>In a food processor, add the frozen banana slices, yogurt, and vanilla syrup.</li>
        <li>Blend until smooth and creamy, stopping occasionally to scrape down the sides.</li>
        <li>Transfer to a container and store in the freezer. Remove 20 minutes before serving.</li>
      </ol>

      <h3>Nutritional values (per serving)</h3>
      <table>
        <tbody>
          <tr><td><strong>Calories</strong></td><td>137.79 kcal</td></tr>
          <tr><td><strong>Carbohydrates</strong></td><td>32.5 g</td></tr>
          <tr><td><strong>Fiber</strong></td><td>3.28 g</td></tr>
          <tr><td><strong>Sugars</strong></td><td>19.13 g</td></tr>
          <tr><td><strong>Protein</strong></td><td>2.39 g</td></tr>
          <tr><td><strong>Fat</strong></td><td>1.15 g</td></tr>
          <tr><td><strong>Saturated</strong></td><td>0.61 g</td></tr>
          <tr><td><strong>Polyunsaturated</strong></td><td>0.11 g</td></tr>
          <tr><td><strong>Monounsaturated</strong></td><td>0.24 g</td></tr>
          <tr><td><strong>Cholesterol</strong></td><td>2.93 mg</td></tr>
          <tr><td><strong>Sodium</strong></td><td>12.92 mg</td></tr>
          <tr><td><strong>Potassium</strong></td><td>497.95 mg</td></tr>
        </tbody>
      </table>

      <h3>Nutritional benefits of key ingredients</h3>
      <h4>Yogurt</h4>
      <ul>
        <li>Rich in high-quality protein (especially strained yogurt).</li>
        <li>Good source of calcium, phosphorus, potassium, and B vitamins (B12, riboflavin).</li>
        <li>Contains probiotics that support gut health and the immune system.</li>
      </ul>

      <h4>Banana</h4>
      <ul>
        <li>High in carbohydrates for quick energy and fiber for digestion.</li>
        <li>Excellent source of potassium; also provides vitamins C and B6, magnesium, and manganese.</li>
        <li>Very low in fat and protein.</li>
      </ul>
      `,
      },
    },
    externalUrl: null,
  },

  {
    slug: "lemon-garlic-chicken-green-beans",
    image: "/images/blog/2.webp",
    category: "recipes",
    M: {
      el: {
        title: "Λεμονάτο Κοτόπουλο με Σκόρδο & Πράσινα Φασολάκια",
        contentHtml: `
    <section>
      <p><strong>Μερίδες:</strong> 3 &nbsp; <strong>Απόδοση:</strong> 3</p>
      <p><strong>Συνολικός χρόνος:</strong> 30’ &nbsp; <strong>Δυσκολία:</strong> Μέτρια &nbsp; <strong>Θερμίδες/μερίδα:</strong> 616,66 kcal &nbsp; <strong>Γεύμα:</strong> Μεσημεριανό/Δείπνο (Υψηλή πρωτεΐνη)</p>
      <p><strong>Διατροφικό προφίλ:</strong> Υγιής Γήρανση / Υγιές Ανοσοποιητικό / Χωρίς Σόγια / Χωρίς Αυγό / Χωρίς Γλουτένη / Υψηλή Περιεκτικότητα σε Πρωτεΐνη</p>
    </section>

    <h3>Συστατικά</h3>
    <ul>
      <li>3–6 φιλέτα κοτόπουλου από μπούτι, χωρίς πέτσα και κόκαλο</li>
      <li>450 γρ. πράσινα φασολάκια, καθαρισμένα</li>
      <li>3 κ.σ. βούτυρο, χωρισμένο (ή βούτυρο γκι)</li>
      <li>4 σκελίδες σκόρδο, ψιλοκομμένες</li>
      <li>1 κ.γ. πάπρικα</li>
      <li>1 κ.γ. σκόνη κρεμμυδιού</li>
      <li>1/4 κ.γ. αλάτι &amp; φρεσκοτριμμένο μαύρο πιπέρι</li>
      <li>Χυμός από 1/2 λεμόνι + φέτες λεμονιού για γαρνιτούρα</li>
      <li>1/2 φλ. (125 ml) ζωμός κότας</li>
      <li>1 κ.σ. καυτερή σάλτσα (π.χ. Σριράτσα)</li>
      <li>1/4 κ.γ. νιφάδες κόκκινης πιπεριάς (προαιρετικά)</li>
      <li>1/2 φλ. φρέσκος ψιλοκομμένος μαϊντανός</li>
    </ul>

    <h3>Εκτέλεση</h3>
    <ol>
      <li>Στεγνώστε καλά τα φιλέτα με χαρτί κουζίνας για σωστό ρόδισμα.</li>
      <li>Ανακατέψτε σε μπολ: σκόνη κρεμμυδιού, πάπρικα, αλάτι, πιπέρι. Τρίψτε γενναιόδωρα το κοτόπουλο και αφήστε το στην άκρη.</li>
      <li>Προμαγειρέψτε τα φασολάκια: σε σκεύος μικροκυμάτων με 1/2 φλ. νερό για 8–10′, να μείνουν τραγανά.</li>
      <li>Ζεστάνετε μεγάλο μαντεμένιο τηγάνι σε μέτρια-χαμηλή φωτιά, λιώστε 2 κ.σ. βούτυρο. Ροδίστε το κοτόπουλο 5–6′ από κάθε πλευρά, μέχρι να δείξει 75°C στο κέντρο. Μεταφέρετε σε πιάτο.</li>
      <li>Στο ίδιο τηγάνι χαμηλώστε τη φωτιά, λιώστε την υπόλοιπη 1 κ.σ. βούτυρο. Προσθέστε μαϊντανό, σκόρδο, καυτερή σάλτσα, νιφάδες πιπεριάς και τα φασολάκια. Μαγειρέψτε 4–5′ ανακατεύοντας.</li>
      <li>Προσθέστε χυμό λεμονιού και ζωμό κότας. Αφήστε 2–3′ να δέσει ελαφρά η σάλτσα.</li>
      <li>Σπρώξτε τα φασολάκια στην άκρη, ξαναβάλτε το κοτόπουλο στο τηγάνι να ζεσταθεί μέσα στη σάλτσα. Διορθώστε αλάτι/πιπέρι. Σερβίρετε με έξτρα μαϊντανό, νιφάδες και φέτες λεμονιού.</li>
    </ol>

    <h3>Θρεπτικά συστατικά (ανά μερίδα)</h3>
    <table>
      <tbody>
        <tr><td><strong>Θερμίδες</strong></td><td>616,66 kcal</td></tr>
        <tr><td><strong>Υδατάνθρακες</strong></td><td>17,61 g</td></tr>
        <tr><td><strong>Φυτικές ίνες</strong></td><td>5,76 g</td></tr>
        <tr><td><strong>Σάκχαρα</strong></td><td>6,54 g</td></tr>
        <tr><td><strong>Πρωτεΐνη</strong></td><td>36,63 g</td></tr>
        <tr><td><strong>Λιπαρά</strong></td><td>45,26 g</td></tr>
        <tr><td><strong>Κορεσμένα</strong></td><td>16,51 g</td></tr>
        <tr><td><strong>Πολυακόρεστα</strong></td><td>7,53 g</td></tr>
        <tr><td><strong>Μονοακόρεστα</strong></td><td>17,13 g</td></tr>
        <tr><td><strong>Χοληστερίνη</strong></td><td>221,99 mg</td></tr>
        <tr><td><strong>Νάτριο</strong></td><td>477,57 mg</td></tr>
        <tr><td><strong>Κάλιο</strong></td><td>935,97 mg</td></tr>
      </tbody>
    </table>

    <h3>Διατροφικά οφέλη βασικών συστατικών</h3>
    <h4>Κοτόπουλο</h4>
    <ul>
      <li>Πρωτεΐνη υψηλής βιολογικής αξίας· ιδανικό για ανάπτυξη/συντήρηση μυϊκής μάζας.</li>
      <li>Χαμηλότερα λιπαρά στο στήθος· τα μπούτια είναι πιο λιπαρά, ιδίως με πέτσα.</li>
      <li>Πλούσιο σε βιταμίνες Β (Β3, Β6, Β12), φώσφορο και σελήνιο.</li>
    </ul>

    <h4>Πράσινα φασολάκια</h4>
    <ul>
      <li>Καλή πηγή βιταμινών K, C, A και φολικού οξέος (Β9).</li>
      <li>Υψηλή περιεκτικότητα σε φυτικές ίνες· συμβάλλει σε κορεσμό και υγιές πεπτικό.</li>
      <li>Περιέχουν μαγνήσιο, κάλιο και αντιοξειδωτικά (π.χ. φλαβονοειδή).</li>
    </ul>
      `,
      },
      en: {
        title: "Lemon-Garlic Chicken with Green Beans",
        contentHtml: `
    <section>
      <p><strong>Servings:</strong> 3 &nbsp; <strong>Yield:</strong> 3</p>
      <p><strong>Total time:</strong> 30’ &nbsp; <strong>Difficulty:</strong> Medium &nbsp; <strong>Calories/serving:</strong> 616.66 kcal &nbsp; <strong>Meal:</strong> Lunch/Dinner (High protein)</p>
      <p><strong>Nutritional profile:</strong> Healthy Aging / Healthy Immune System / Soy-free / Egg-free / Gluten-free / High Protein</p>
    </section>

    <h3>Ingredients</h3>
    <ul>
      <li>3–6 boneless, skinless chicken thigh fillets</li>
      <li>450 g green beans, trimmed</li>
      <li>3 tbsp butter, divided (or ghee)</li>
      <li>4 garlic cloves, minced</li>
      <li>1 tsp paprika</li>
      <li>1 tsp onion powder</li>
      <li>1/4 tsp salt &amp; freshly ground black pepper</li>
      <li>Juice of 1/2 lemon + lemon slices for garnish</li>
      <li>1/2 cup (125 ml) chicken stock</li>
      <li>1 tbsp hot sauce (e.g., Sriracha)</li>
      <li>1/4 tsp red pepper flakes (optional)</li>
      <li>1/2 cup fresh parsley, finely chopped</li>
    </ul>

    <h3>Instructions</h3>
    <ol>
      <li>Pat the chicken dry with paper towels for proper browning.</li>
      <li>In a bowl, mix the onion powder, paprika, salt, and pepper. Rub the chicken generously and set aside.</li>
      <li>Pre-cook the green beans: in a microwave-safe dish with 1/2 cup water for 8–10 minutes, until crisp-tender.</li>
      <li>Heat a large cast-iron skillet over medium-low and melt 2 tbsp butter. Sear the chicken 5–6 minutes per side, until the center reads 75°C. Transfer to a plate.</li>
      <li>In the same skillet, reduce the heat and melt the remaining 1 tbsp butter. Add the parsley, garlic, hot sauce, red pepper flakes, and green beans. Cook 4–5 minutes, stirring.</li>
      <li>Add the lemon juice and chicken stock. Simmer 2–3 minutes to slightly thicken the sauce.</li>
      <li>Push the beans to the side and return the chicken to the skillet to warm through in the sauce. Adjust salt/pepper. Serve with extra parsley, flakes, and lemon slices.</li>
    </ol>

    <h3>Nutritional values (per serving)</h3>
    <table>
      <tbody>
        <tr><td><strong>Calories</strong></td><td>616.66 kcal</td></tr>
        <tr><td><strong>Carbohydrates</strong></td><td>17.61 g</td></tr>
        <tr><td><strong>Fiber</strong></td><td>5.76 g</td></tr>
        <tr><td><strong>Sugars</strong></td><td>6.54 g</td></tr>
        <tr><td><strong>Protein</strong></td><td>36.63 g</td></tr>
        <tr><td><strong>Fat</strong></td><td>45.26 g</td></tr>
        <tr><td><strong>Saturated</strong></td><td>16.51 g</td></tr>
        <tr><td><strong>Polyunsaturated</strong></td><td>7.53 g</td></tr>
        <tr><td><strong>Monounsaturated</strong></td><td>17.13 g</td></tr>
        <tr><td><strong>Cholesterol</strong></td><td>221.99 mg</td></tr>
        <tr><td><strong>Sodium</strong></td><td>477.57 mg</td></tr>
        <tr><td><strong>Potassium</strong></td><td>935.97 mg</td></tr>
      </tbody>
    </table>

    <h3>Nutritional benefits of key ingredients</h3>
    <h4>Chicken</h4>
    <ul>
      <li>High-quality protein; ideal for building/maintaining muscle mass.</li>
      <li>Lower fat in the breast; thighs are fattier, especially with skin.</li>
      <li>Rich in B vitamins (B3, B6, B12), phosphorus, and selenium.</li>
    </ul>

    <h4>Green beans</h4>
    <ul>
      <li>Good source of vitamins K, C, A, and folate (B9).</li>
      <li>High in dietary fiber; supports satiety and digestive health.</li>
      <li>Contain magnesium, potassium, and antioxidants (e.g., flavonoids).</li>
    </ul>
      `,
      },
    },
  },

  {
    slug: "tiramisu-overnight-oats",
    image: "/images/blog/3.jpg",
    category: "recipes",
    M: {
      el: {
        title: "Tiramisu Overnight Oats",
        contentHtml: `
    <section>
      <p><strong>Μερίδες:</strong> 2 &nbsp; <strong>Απόδοση:</strong> 2</p>
      <p><strong>Συνολικός χρόνος:</strong> Ένα βράδυ &nbsp; <strong>Δυσκολία:</strong> Εύκολη &nbsp; <strong>Θερμίδες/μερίδα:</strong> 320 kcal &nbsp; <strong>Γεύμα:</strong> Πρωινό (Υψηλή πρωτεΐνη, Χωρίς ζάχαρη, Πλούσιο σε φυτικές ίνες)</p>
      <p><strong>Διατροφικό προφίλ:</strong> Υγιής Γήρανση / Υγιές Ανοσοποιητικό / Χωρίς Σόγια / Χωρίς Αυγό</p>
    </section>

    <h3>Συστατικά</h3>
    <h4>Για τη βάση</h4>
    <ul>
      <li>1 κ.γ. espresso διπλό</li>
      <li>45 γρ. νιφάδες βρώμης</li>
      <li>1 κ.γ. σπόρους chia</li>
      <li>100 ml γάλα αμυγδάλου</li>
      <li>1 κ.σ. μέλι</li>
      <li>1/2 κ.γ. σκόνη κακάο</li>
    </ul>

    <h4>Για την κρέμα</h4>
    <ul>
      <li>150 γρ. στραγγιστό γιαούρτι 2%</li>
      <li>50 γρ. τυρί κρέμα light</li>
      <li>25 γρ. πρωτεΐνη βιολογική βανίλια</li>
      <li>1 κ.γ. μέλι</li>
      <li>3 μπισκότα digestive χωρίς ζάχαρη</li>
    </ul>

    <h3>Εκτέλεση</h3>
    <ol>
      <li>Ανακατέψτε τη βρώμη, τους σπόρους chia και το κακάο με το γάλα. Προσθέστε το espresso και το μέλι, ανακατέψτε ξανά. Αφήστε στο ψυγείο για ένα βράδυ ή τουλάχιστον 3 ώρες.</li>
      <li>Για την κρέμα: ανακατέψτε το γιαούρτι με το τυρί κρέμα και την πρωτεΐνη. Προσθέστε το μέλι και ανακατέψτε καλά.</li>
      <li>Στήστε το γλυκό: εναλλάξ στρώσεις βρώμης και κρέμας. Ανάμεσα τρίψτε τα μπισκότα. Ολοκληρώστε με κρέμα και πασπαλίστε με κακάο.</li>
      <li>Γαρνίρετε με επιπλέον κακάο πριν το σερβίρισμα.</li>
    </ol>

    <h3>Θρεπτικά συστατικά (ανά μερίδα)</h3>
    <table>
      <tbody>
        <tr><td><strong>Θερμίδες</strong></td><td>320 kcal</td></tr>
        <tr><td><strong>Υδατάνθρακες</strong></td><td>35,25 g</td></tr>
        <tr><td><strong>Φυτικές ίνες</strong></td><td>5,6 g</td></tr>
        <tr><td><strong>Πρωτεΐνη</strong></td><td>24,4 g</td></tr>
        <tr><td><strong>Λιπαρά</strong></td><td>9,75 g</td></tr>
      </tbody>
    </table>

    <h3>Διατροφικά οφέλη βασικών συστατικών</h3>
    <h4>Γιαούρτι</h4>
    <ul>
      <li>Πλούσιο σε πρωτεΐνη υψηλής βιολογικής αξίας, ιδανικό για μυϊκή ανάπτυξη και κορεσμό.</li>
      <li>Καλή πηγή ασβεστίου, φωσφόρου, καλίου και βιταμινών Β.</li>
      <li>Περιέχει προβιοτικά που υποστηρίζουν την υγεία του εντέρου και το ανοσοποιητικό.</li>
    </ul>

    <h4>Βρώμη</h4>
    <ul>
      <li>Πλούσια σε σύνθετους υδατάνθρακες που παρέχουν σταθερή ενέργεια.</li>
      <li>Περιέχει β-γλυκάνη που συμβάλλει στη μείωση χοληστερόλης και στη ρύθμιση σακχάρου.</li>
      <li>Πηγή πρωτεΐνης υψηλής ποιότητας και φυτικών ινών.</li>
      <li>Πλούσια σε βιταμίνες Β, μαγνήσιο, σίδηρο και αντιοξειδωτικά.</li>
    </ul>
      `,
      },
      en: {
        title: "Tiramisu Overnight Oats",
        contentHtml: `
    <section>
      <p><strong>Servings:</strong> 2 &nbsp; <strong>Yield:</strong> 2</p>
      <p><strong>Total time:</strong> Overnight &nbsp; <strong>Difficulty:</strong> Easy &nbsp; <strong>Calories/serving:</strong> 320 kcal &nbsp; <strong>Meal:</strong> Breakfast (High protein, Sugar-free, High fiber)</p>
      <p><strong>Nutritional profile:</strong> Healthy Aging / Strong Immune System / Soy-free / Egg-free</p>
    </section>

    <h3>Ingredients</h3>
    <h4>For the base</h4>
    <ul>
      <li>1 tsp double espresso</li>
      <li>45 g rolled oats</li>
      <li>1 tsp chia seeds</li>
      <li>100 ml almond milk</li>
      <li>1 tbsp honey</li>
      <li>1/2 tsp cocoa powder</li>
    </ul>

    <h4>For the cream</h4>
    <ul>
      <li>150 g strained yogurt (2% fat)</li>
      <li>50 g light cream cheese</li>
      <li>25 g organic vanilla protein powder</li>
      <li>1 tsp honey</li>
      <li>3 sugar-free digestive biscuits</li>
    </ul>

    <h3>Instructions</h3>
    <ol>
      <li>Mix the oats, chia seeds, and cocoa powder with the milk. Add the espresso and honey, mix again. Refrigerate overnight or for at least 3 hours.</li>
      <li>For the cream: mix the yogurt with the cream cheese and protein powder. Add the honey and stir well.</li>
      <li>Assemble: alternate layers of oats and cream. Sprinkle crushed biscuits between layers. Finish with cream and dust with cocoa powder.</li>
      <li>Garnish with extra cocoa before serving.</li>
    </ol>

    <h3>Nutritional values (per serving)</h3>
    <table>
      <tbody>
        <tr><td><strong>Calories</strong></td><td>320 kcal</td></tr>
        <tr><td><strong>Carbohydrates</strong></td><td>35.25 g</td></tr>
        <tr><td><strong>Fiber</strong></td><td>5.6 g</td></tr>
        <tr><td><strong>Protein</strong></td><td>24.4 g</td></tr>
        <tr><td><strong>Fat</strong></td><td>9.75 g</td></tr>
      </tbody>
    </table>

    <h3>Nutritional benefits of key ingredients</h3>
    <h4>Yogurt</h4>
    <ul>
      <li>Rich in high-quality protein, ideal for muscle growth and satiety.</li>
      <li>Good source of calcium, phosphorus, potassium, and B vitamins.</li>
      <li>Contains probiotics that support gut and immune health.</li>
    </ul>

    <h4>Oats</h4>
    <ul>
      <li>Rich in complex carbohydrates that provide steady energy.</li>
      <li>Contain beta-glucan, which helps lower cholesterol and regulate blood sugar.</li>
      <li>Source of high-quality protein and dietary fiber.</li>
      <li>High in B vitamins, magnesium, iron, and antioxidants.</li>
    </ul>
      `,
      },
    },
    instagramPostUrl: "https://www.instagram.com/p/DFLLFPNs_F1/",
    instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/",
  },

  {
    slug: "shrimp-bulgur-salad",
    image: "/images/blog/4.jpg",
    category: "recipes",
    M: {
      el: {
        title: "Σαλάτα με Γαρίδες, Πλιγούρι και Dressing Ταχινιού",
        contentHtml: `
    <section>
      <p><strong>Μερίδες:</strong> 2 &nbsp; <strong>Απόδοση:</strong> 2</p>
      <p><strong>Συνολικός χρόνος:</strong> 20’ &nbsp; <strong>Δυσκολία:</strong> Εύκολη &nbsp; <strong>Θερμίδες/μερίδα:</strong> 550 kcal &nbsp; <strong>Γεύμα:</strong> Σαλάτα / Μεσημεριανό ή Βραδινό (Υψηλή πρωτεΐνη, Νηστίσιμη, Φυτικές ίνες)</p>
      <p><strong>Διατροφικό προφίλ:</strong> Υγιής Γήρανση / Υγιές Ανοσοποιητικό / Χωρίς Σόγια / Χωρίς Αυγό</p>
    </section>

    <h3>Συστατικά</h3>
    <ul>
      <li>300 γρ. γαρίδες βραστές ή ψητές (12 γαρίδες)</li>
      <li>170 γρ. βραστό πλιγούρι</li>
      <li>80 γρ. ώριμο αβοκάντο</li>
      <li>100 γρ. ανάμεικτα φυλλώδη λαχανικά (μαρούλι, σπανάκι, ρόκα)</li>
      <li>150 γρ. ντοματίνια</li>
      <li>100 γρ. μανιτάρια</li>
      <li>100 γρ. αγγούρι</li>
      <li>50 γρ. μήλο γλυκό (1/4)</li>
      <li>50 γρ. κόκκινη πιπεριά (1/2)</li>
      <li>70 γρ. βραστό μπρόκολο</li>
      <li>50 γρ. κάσιους (10 τεμάχια)</li>
      <li>1 κ.γ. άνηθο ψιλοκομμένο</li>
    </ul>

    <h4>Dressing ταχινιού</h4>
    <ul>
      <li>2 κ.γ. ταχίνι</li>
      <li>2 κ.γ. μελάσα</li>
      <li>20 γρ. μηλόξιδο</li>
      <li>30 γρ. χυμό λεμονιού</li>
      <li>2 κ.σ. ελαιόλαδο</li>
      <li>2 κ.γ. σάλτσα σόγιας</li>
    </ul>

    <h3>Εκτέλεση</h3>
    <ol>
      <li>Πλύνετε καλά όλα τα λαχανικά.</li>
      <li>Βράστε τις γαρίδες, το μπρόκολο και το πλιγούρι (σύμφωνα με τις οδηγίες της συσκευασίας).</li>
      <li>Σοτάρετε τα μανιτάρια σε φέτες.</li>
      <li>Κόψτε το αβοκάντο, το αγγούρι, τα ντοματίνια και τις πιπεριές σε φέτες/κυβάκια.</li>
      <li>Κόψτε το μήλο σε κυβάκια.</li>
      <li>Θρυμματίστε τα κάσιους με τα χέρια.</li>
      <li>Βάλτε όλα τα υλικά σε σαλατιέρα. Ανακατέψτε τα υλικά του dressing σε βαζάκι μέχρι να γίνουν ομοιογενές μείγμα και περιχύστε τη σαλάτα. Ανακατέψτε καλά.</li>
    </ol>

    <h3>Θρεπτικά συστατικά (ανά μερίδα)</h3>
    <table>
      <tbody>
        <tr><td><strong>Θερμίδες</strong></td><td>550 kcal</td></tr>
        <tr><td><strong>Υδατάνθρακες</strong></td><td>50 g</td></tr>
        <tr><td><strong>Φυτικές ίνες</strong></td><td>11 g</td></tr>
        <tr><td><strong>Πρωτεΐνη</strong></td><td>30 g</td></tr>
        <tr><td><strong>Λιπαρά</strong></td><td>30 g</td></tr>
      </tbody>
    </table>

    <h3>Διατροφικά οφέλη βασικών συστατικών</h3>
    <h4>Γαρίδες</h4>
    <ul>
      <li>Πλούσιες σε σελήνιο (ισχυρό αντιοξειδωτικό), βιταμίνη Β12, φώσφορο και ιώδιο.</li>
      <li>Περιέχουν χοληστερόλη, αλλά είναι χαμηλές σε κορεσμένα λιπαρά.</li>
      <li>Παρέχουν ωμέγα-3 και ωμέγα-6 λιπαρά οξέα για καρδιαγγειακή υγεία.</li>
    </ul>

    <h4>Πλιγούρι</h4>
    <ul>
      <li>Πλούσιο σε φυτικές ίνες· συμβάλλει στην καλή λειτουργία του εντέρου και στον κορεσμό.</li>
      <li>Έχει χαμηλό γλυκαιμικό δείκτη· κατάλληλο για άτομα με διαβήτη.</li>
      <li>Περιέχει βιταμίνες Β και μέταλλα όπως σίδηρο, μαγνήσιο, φώσφορο και κάλιο.</li>
    </ul>
      `,
      },
      en: {
        title: "Shrimp Bulgur Salad with Tahini Dressing",
        contentHtml: `
    <section>
      <p><strong>Servings:</strong> 2 &nbsp; <strong>Yield:</strong> 2</p>
      <p><strong>Total time:</strong> 20’ &nbsp; <strong>Difficulty:</strong> Easy &nbsp; <strong>Calories/serving:</strong> 550 kcal &nbsp; <strong>Meal:</strong> Salad / Lunch or Dinner (High protein, Vegan-friendly, Fiber-rich)</p>
      <p><strong>Nutritional profile:</strong> Healthy Aging / Strong Immune System / Soy-free / Egg-free</p>
    </section>

    <h3>Ingredients</h3>
    <ul>
      <li>300 g cooked or grilled shrimp (about 12 pieces)</li>
      <li>170 g cooked bulgur</li>
      <li>80 g ripe avocado</li>
      <li>100 g mixed leafy greens (lettuce, spinach, arugula)</li>
      <li>150 g cherry tomatoes</li>
      <li>100 g mushrooms</li>
      <li>100 g cucumber</li>
      <li>50 g sweet apple (1/4)</li>
      <li>50 g red bell pepper (1/2)</li>
      <li>70 g cooked broccoli</li>
      <li>50 g cashews (about 10 pieces)</li>
      <li>1 tsp finely chopped dill</li>
    </ul>

    <h4>Tahini dressing</h4>
    <ul>
      <li>2 tsp tahini</li>
      <li>2 tsp molasses</li>
      <li>20 g apple cider vinegar</li>
      <li>30 g lemon juice</li>
      <li>2 tbsp olive oil</li>
      <li>2 tsp soy sauce</li>
    </ul>

    <h3>Instructions</h3>
    <ol>
      <li>Wash all vegetables thoroughly.</li>
      <li>Boil the shrimp, broccoli, and bulgur (according to package directions).</li>
      <li>Sauté the sliced mushrooms.</li>
      <li>Slice the avocado, cucumber, cherry tomatoes, and peppers.</li>
      <li>Dice the apple.</li>
      <li>Roughly crush the cashews by hand.</li>
      <li>Combine all ingredients in a salad bowl. Mix the dressing ingredients in a small jar until smooth and pour over the salad. Toss well.</li>
    </ol>

    <h3>Nutritional values (per serving)</h3>
    <table>
      <tbody>
        <tr><td><strong>Calories</strong></td><td>550 kcal</td></tr>
        <tr><td><strong>Carbohydrates</strong></td><td>50 g</td></tr>
        <tr><td><strong>Fiber</strong></td><td>11 g</td></tr>
        <tr><td><strong>Protein</strong></td><td>30 g</td></tr>
        <tr><td><strong>Fat</strong></td><td>30 g</td></tr>
      </tbody>
    </table>

    <h3>Nutritional benefits of key ingredients</h3>
    <h4>Shrimp</h4>
    <ul>
      <li>Rich in selenium (a powerful antioxidant), vitamin B12, phosphorus, and iodine.</li>
      <li>Contain cholesterol but are low in saturated fats.</li>
      <li>Provide omega-3 and omega-6 fatty acids that support heart health.</li>
    </ul>

    <h4>Bulgur</h4>
    <ul>
      <li>High in fiber; promotes gut health and satiety.</li>
      <li>Has a low glycemic index, suitable for people with diabetes.</li>
      <li>Contains B vitamins and minerals such as iron, magnesium, phosphorus, and potassium.</li>
    </ul>
      `,
      },
    },
    instagramPostUrl: "https://www.instagram.com/p/DHf3zM5sI0k/",
    instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/",
  },

  {
    slug: "homemade-electrolyte-water",
    image: "/images/blog/5.jpg",
    category: "recipes",
    M: {
      el: {
        title: "Αρωματισμένο Νερό – Σπιτικός Ηλεκτρολύτης",
        contentHtml: `
    <section>
      <p><strong>Μερίδες:</strong> 4 &nbsp; <strong>Απόδοση:</strong> 4</p>
      <p>
        <strong>Συνολικός χρόνος:</strong> 10’, 
        <strong>Δυσκολία:</strong> Εύκολη, 
        <strong>Θερμίδες :</strong> 85Kcal, 
        <strong>Γεύμα:</strong> Ενεργειακό ποτό
      </p>
      <p><strong>Διατροφικό προφίλ:</strong> Υγιής Γήρανση/Υγιές Ανοσοποιητικό</p>
    </section>

    <h3>Συστατικά:</h3>
    <ul>
      <li>750ml νερό</li>
      <li>100ml χυμό λεμόνι</li>
      <li>100ml χυμό πορτοκάλι</li>
      <li>2 κ. γλυκού μέλι</li>
      <li>½ κ. γλυκού σπόρους τσία</li>
      <li>¼ κ. γλυκού θαλασσινό αλάτι</li>
      <li>1 ξυλάκι κανέλας</li>
      <li>3 φέτες αγγούρι</li>
      <li>1 φέτα λεμόνι</li>
      <li>1 φέτα πορτοκάλι</li>
      <li>3 φύλλα φρέσκο δυόσμο</li>
      <li>1 κομμάτι φρέσκο τζίντζερ</li>
    </ul>

    <h3>Εκτέλεση:</h3>
    <ul>
      <li>Ρίχνουμε το μέλι στον χυμό πορτοκάλι και ανακατεύουμε.</li>
      <li>Σε ένα γυάλινο μπουκάλι βάζω όλα τα υλικά και το κουνάω πολύ καλά.</li>
    </ul>

    <p><strong>Συνολική ποσότητα: 950ml. Διατηρούμε στο ψυγείο για 3 ημέρες</strong></p>

    <p><strong>Αυτή η συνταγή είναι ιδανική για ενυδάτωση, καθώς παρέχει νερό μαζί με ηλεκτρολύτες (νάτριο) και φυσικά σάκχαρα για ενέργεια. Είναι μια υγιεινή εναλλακτική λύση αντί για τα τυποποιημένα αθλητικά ποτά. Μπορούμε να καταναλώσουμε το ποτό μετά από προπόνηση.</strong></p>

    <table>
      <thead>
        <tr>
          <th>Θρεπτικά συστατικά</th>
          <th>Συνολική ποσότητα 950ml</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Θερμίδες</td><td>85 kcal</td></tr>
        <tr><td>Υδατάνθρακες</td><td>22g</td></tr>
        <tr><td>Φυτικές ίνες</td><td>4g</td></tr>
        <tr><td>Σάκχαρα</td><td>20g</td></tr>
        <tr><td>Πρωτεΐνη</td><td>1g</td></tr>
        <tr><td>Λιπαρά</td><td>2g</td></tr>
        <tr><td>Νάτριο</td><td>250mg</td></tr>
      </tbody>
    </table>

    <h3>Διατροφικά οφέλη βασικών συστατικών</h3>

    <h4>Λεμόνι</h4>
    <ul>
      <li><strong>Βιταμίνη C:</strong> Το λεμόνι είναι μία από τις καλύτερες φυσικές πηγές βιταμίνης C, η οποία είναι ένα ισχυρό αντιοξειδωτικό. Η βιταμίνη C προστατεύει τα κύτταρα από τις βλάβες που προκαλούν οι ελεύθερες ρίζες, συμβάλλει στην παραγωγή κολλαγόνου για υγιές δέρμα και ούλα, και ενισχύει την άμυνα του οργανισμού.</li>
      <li><strong>Φλαβονοειδή:</strong> Περιέχει φυτικές ενώσεις όπως η εσπεριδίνη και η διοσμίνη, οι οποίες έχουν ισχυρή αντιοξειδωτική και αντιφλεγμονώδη δράση. Αυτές οι ουσίες συμβάλλουν στη μείωση της χοληστερίνης και στην προστασία της καρδιαγγειακής υγείας.</li>
      <li><strong>Πηκτίνη:</strong> Ο πολτός του λεμονιού περιέχει πηκτίνη, έναν τύπο διαλυτής φυτικής ίνας που βοηθά στην καλή λειτουργία του εντέρου και μπορεί να προκαλέσει αίσθημα κορεσμού, συμβάλλοντας έτσι στον έλεγχο του βάρους.</li>
      <li><strong>Πέψη:</strong> Ο χυμός λεμονιού μπορεί να βοηθήσει στην πέψη και να ανακουφίσει από συμπτώματα δυσπεψίας, όπως η καούρα και το φούσκωμα.</li>
      <li><strong>Ανοσοποιητικό:</strong> Η υψηλή περιεκτικότητα σε βιταμίνη C ενισχύει το ανοσοποιητικό σύστημα, βοηθώντας το σώμα να καταπολεμήσει λοιμώξεις όπως το κρυολόγημα και η γρίπη.</li>
      <li><strong>Κιτρικό οξύ και βιταμίνη C:</strong> Βελτιώνουν σημαντικά την απορρόφηση του σιδήρου από τις φυτικές τροφές, γεγονός που είναι ιδιαίτερα σημαντικό για την πρόληψη της αναιμίας. Επίσης μπορεί να βοηθήσει στην πρόληψη του σχηματισμού πέτρας στα νεφρά, αυξάνοντας τον όγκο των ούρων και αλλάζοντας το pH τους, δημιουργώντας ένα λιγότερο ευνοϊκό περιβάλλον για τον σχηματισμό πέτρας.</li>
      <li><strong>Φυτικές ίνες:</strong> Οι φυτικές ίνες και οι φυτικές ενώσεις που βρίσκονται στο λεμόνι μπορούν να μειώσουν τους παράγοντες κινδύνου για καρδιακές παθήσεις, όπως η υψηλή χοληστερόλη και η αρτηριακή πίεση.</li>
    </ul>

    <h4>Πορτοκάλι</h4>
    <ul>
      <li><strong>Ανοσοποιητικό:</strong> Ενισχύει το ανοσοποιητικό σύστημα, βοηθώντας το σώμα να καταπολεμήσει λοιμώξεις και ασθένειες.</li>
      <li><strong>Αντιοξειδωτικό:</strong> Προστατεύει τα κύτταρα από την οξειδωτική βλάβη που προκαλούν οι ελεύθερες ρίζες.</li>
      <li><strong>Κολλαγόνο:</strong> Συμβάλλει στην παραγωγή κολλαγόνου, το οποίο είναι απαραίτητο για την υγεία του δέρματος, των οστών και των χόνδρων.</li>
      <li><strong>Απορρόφηση σιδήρου:</strong> Βελτιώνει την απορρόφηση του σιδήρου από τις φυτικές τροφές, βοηθώντας στην πρόληψη της σιδηροπενικής αναιμίας και την καλή λειτουργία του πεπτικού συστήματος και την πρόληψη της δυσκοιλιότητας.</li>
      <li><strong>Ρύθμιση των επιπέδων σακχάρου:</strong> Επιβραδύνει την απορρόφηση των υδατανθράκων.</li>
      <li><strong>Αίσθηση κορεσμού:</strong> Βοηθά στον έλεγχο του σωματικού βάρους.</li>
      <li><strong>Μείωση των επιπέδων της κακής χοληστερόλης (LDL):</strong> Συμβάλλει στην υγεία της καρδιάς.</li>
      <li><strong>Φολικό οξύ (Β9):</strong> Απαραίτητο για τη σωστή ανάπτυξη των κυττάρων και τη σύνθεση του DNA — ιδιαίτερα σημαντικό για τις εγκύους.</li>
      <li><strong>Θειαμίνη (Β1):</strong> Βοηθά στη μετατροπή των υδατανθράκων σε ενέργεια και υποστηρίζει τη λειτουργία του νευρικού συστήματος.</li>
    </ul>
      `,
      },
      en: {
        title: "Infused Water – Homemade Electrolyte Drink",
        contentHtml: `
    <section>
      <p><strong>Servings:</strong> 4 &nbsp; <strong>Yield:</strong> 4</p>
      <p>
        <strong>Total time:</strong> 10’, 
        <strong>Difficulty:</strong> Easy, 
        <strong>Calories:</strong> 85 kcal, 
        <strong>Meal:</strong> Energy drink
      </p>
      <p><strong>Nutritional profile:</strong> Healthy Aging / Strong Immune System</p>
    </section>

    <h3>Ingredients:</h3>
    <ul>
      <li>750 ml water</li>
      <li>100 ml lemon juice</li>
      <li>100 ml orange juice</li>
      <li>2 tsp honey</li>
      <li>½ tsp chia seeds</li>
      <li>¼ tsp sea salt</li>
      <li>1 cinnamon stick</li>
      <li>3 cucumber slices</li>
      <li>1 lemon slice</li>
      <li>1 orange slice</li>
      <li>3 fresh mint leaves</li>
      <li>1 piece fresh ginger</li>
    </ul>

    <h3>Instructions:</h3>
    <ul>
      <li>Add the honey to the orange juice and stir to dissolve.</li>
      <li>Place all ingredients in a glass bottle and shake very well.</li>
    </ul>

    <p><strong>Total quantity: 950 ml. Store in the refrigerator for up to 3 days.</strong></p>

    <p><strong>This recipe is ideal for hydration, providing water along with electrolytes (sodium) and natural sugars for energy. It’s a healthy alternative to commercial sports drinks and can be enjoyed after a workout.</strong></p>

    <table>
      <thead>
        <tr>
          <th>Nutrients</th>
          <th>Total quantity 950 ml</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Calories</td><td>85 kcal</td></tr>
        <tr><td>Carbohydrates</td><td>22 g</td></tr>
        <tr><td>Fiber</td><td>4 g</td></tr>
        <tr><td>Sugars</td><td>20 g</td></tr>
        <tr><td>Protein</td><td>1 g</td></tr>
        <tr><td>Fat</td><td>2 g</td></tr>
        <tr><td>Sodium</td><td>250 mg</td></tr>
      </tbody>
    </table>

    <h3>Nutritional benefits of key ingredients</h3>

    <h4>Lemon</h4>
    <ul>
      <li><strong>Vitamin C:</strong> One of the best natural sources of vitamin C, a powerful antioxidant. It protects cells from free radical damage, supports collagen production for healthy skin and gums, and strengthens the immune system.</li>
      <li><strong>Flavonoids:</strong> Contains plant compounds like hesperidin and diosmin with strong antioxidant and anti-inflammatory properties that may help lower cholesterol and support cardiovascular health.</li>
      <li><strong>Pectin:</strong> The pulp contains pectin, a soluble fiber that supports gut function and satiety, aiding weight control.</li>
      <li><strong>Digestion:</strong> Lemon juice can aid digestion and relieve symptoms of indigestion such as heartburn and bloating.</li>
      <li><strong>Immune support:</strong> The high vitamin C content helps the body fight infections such as colds and flu.</li>
      <li><strong>Citric acid and vitamin C:</strong> Significantly improve iron absorption from plant foods, helping prevent anemia; may also help prevent kidney stones by increasing urine volume and altering urine pH.</li>
      <li><strong>Dietary fiber:</strong> Fibers and plant compounds in lemon can reduce risk factors for heart disease such as high cholesterol and blood pressure.</li>
    </ul>

    <h4>Orange</h4>
    <ul>
      <li><strong>Immune support:</strong> Strengthens the immune system, helping the body fight infections and illness.</li>
      <li><strong>Antioxidant:</strong> Protects cells from oxidative damage caused by free radicals.</li>
      <li><strong>Collagen:</strong> Contributes to collagen production, essential for healthy skin, bones, and cartilage.</li>
      <li><strong>Iron absorption:</strong> Improves absorption of iron from plant foods, helping prevent iron-deficiency anemia; also supports digestive function and may help prevent constipation.</li>
      <li><strong>Blood sugar regulation:</strong> Slows carbohydrate absorption.</li>
      <li><strong>Satiety:</strong> Helps with weight control.</li>
      <li><strong>Lower LDL cholesterol:</strong> Supports heart health.</li>
      <li><strong>Folate (B9):</strong> Essential for proper cell growth and DNA synthesis—especially important during pregnancy.</li>
      <li><strong>Thiamine (B1):</strong> Helps convert carbohydrates into energy and supports nervous system function.</li>
    </ul>
      `,
      },
    },
    instagramPostUrl: "https://www.instagram.com/p/DPG_ByIjG_U/",
    instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/",
  },

  {
    slug: "juicy-banana-bread",
    image: "/images/blog/6.jpg",
    category: "recipes",
    M: {
      el: {
        title: "Ζουμερό Banana Bread",
        contentHtml: `
    <section>
      <p><strong>Μερίδες:</strong> 10 &nbsp; <strong>Απόδοση:</strong> 10</p>
      <p>
        <strong>Συνολικός χρόνος:</strong> 40’, 
        <strong>Δυσκολία:</strong> Εύκολη, 
        <strong>Θερμίδες/μερίδα:</strong> 275 kcal, 
        <strong>Γεύμα:</strong> Σνακ (Υψηλή πρωτεΐνη)
      </p>
      <p><strong>Διατροφικό προφίλ:</strong> Υγιής Γήρανση / Υγιές Ανοσοποιητικό / Υψηλή Περιεκτικότητα σε Πρωτεΐνη</p>
    </section>

    <h3>Συστατικά</h3>
    <ul>
      <li>450 γρ. πολτός μπανάνας</li>
      <li>2 αυγά</li>
      <li>70 γρ. μέλι</li>
      <li>30 γρ. ελαιόλαδο</li>
      <li>170 ml γάλα 1,5% λιπαρά</li>
      <li>30 ml καφέ εσπρέσο</li>
      <li>1 κ.γ. υγρή βανίλια</li>
      <li>250 γρ. αλεύρι ντίνκελ</li>
      <li>1,5 κ.γ. μπέικιν πάουντερ</li>
      <li>½ κ.γ. σόδα</li>
      <li>½ κ.γ. αλάτι</li>
      <li>1,5 κ.γ. κανέλα</li>
      <li>1 κ.γ. κακάο</li>
      <li>50 γρ. κουβερτούρα υγείας</li>
    </ul>

    <h3>Εκτέλεση</h3>
    <ol>
      <li>Σε ένα μπολ, ανακατέψτε τα αυγά με το μέλι. Προσθέστε και το λάδι.</li>
      <li>Αφού έχετε ετοιμάσει τον καφέ και έχει κρυώσει, βάλτε τον στο μπολ μαζί με το γάλα και τη βανίλια.</li>
      <li>Ρίξτε τον πολτό μπανάνας και κατόπιν όλες τις σκόνες και την σοκολάτα.</li>
      <li>Τέλος, βάλτε σταδιακά το αλεύρι και ανακατέψτε.</li>
      <li>Ψήστε σε προθερμασμένο φούρνο για 30 λεπτά στους 160°C.</li>
    </ol>

    <h3>Θρεπτικά συστατικά (ανά 100 g)</h3>
    <table>
      <tbody>
        <tr><td><strong>Θερμίδες</strong></td><td>275 kcal</td></tr>
        <tr><td><strong>Υδατάνθρακες</strong></td><td>43,5 g</td></tr>
        <tr><td><strong>Φυτικές ίνες</strong></td><td>3,6 g</td></tr>
        <tr><td><strong>Σάκχαρα</strong></td><td>22 g</td></tr>
        <tr><td><strong>Πρωτεΐνη</strong></td><td>8,5 g</td></tr>
        <tr><td><strong>Λιπαρά</strong></td><td>9,5 g</td></tr>
      </tbody>
    </table>

    <h3>Διατροφικά οφέλη βασικών συστατικών</h3>

    <h4>Μπανάνα</h4>
    <p>Η μπανάνα είναι ένα φρούτο με υψηλή διατροφική αξία, πλούσιο σε υδατάνθρακες, βιταμίνες και μέταλλα. Η διατροφική της σύσταση ποικίλλει ελαφρώς ανάλογα με τον βαθμό ωρίμανσής της (οι άγουρες έχουν περισσότερο άμυλο, ενώ οι ώριμες περισσότερα σάκχαρα).</p>
    <p>Επιπλέον, η μπανάνα είναι εξαιρετική πηγή σημαντικών βιταμινών και μετάλλων:</p>
    <ul>
      <li><strong>Κάλιο:</strong> Συμβάλλει στη ρύθμιση της αρτηριακής πίεσης και την υγεία της καρδιάς.</li>
      <li><strong>Βιταμίνη B6:</strong> Παίζει κρίσιμο ρόλο στον μεταβολισμό και την καλή λειτουργία του νευρικού συστήματος. Μια μπανάνα μπορεί να καλύψει σημαντικό ποσοστό της ημερήσιας ανάγκης.</li>
      <li><strong>Βιταμίνη C:</strong> Αντιοξειδωτική βιταμίνη που ενισχύει το ανοσοποιητικό σύστημα.</li>
      <li><strong>Μαγνήσιο:</strong> Συμβάλλει στην υγεία των οστών και τη μυϊκή λειτουργία.</li>
    </ul>

    <h4>Μέλι</h4>
    <p>Το μέλι είναι μια γλυκαντική ουσία με υψηλή περιεκτικότητα σε σάκχαρα και ενέργεια. Η διατροφική του αξία εξαρτάται από τον τύπο του μελιού.</p>
    <ul>
      <li><strong>Σάκχαρα:</strong> Αποτελείται κυρίως από σάκχαρα· η φρουκτόζη (περίπου 38%) και η γλυκόζη (περίπου 31%) το καθιστούν άμεση πηγή ενέργειας.</li>
      <li><strong>Βιταμίνες & Μέταλλα:</strong> Περιέχει ελάχιστες ποσότητες βιταμινών (Β6, C, θειαμίνη, νιασίνη) και μετάλλων (κάλιο, σίδηρο, μαγγάνιο, φώσφορο, ψευδάργυρο), οι οποίες όμως είναι πολύ μικρές για να συμβάλλουν ουσιαστικά στην ημερήσια πρόσληψη.</li>
      <li><strong>Αντιοξειδωτικά:</strong> Περιέχει φλαβονοειδή και φαινολικά οξέα, με ποσότητα που εξαρτάται από την προέλευση του νέκταρος.</li>
      <li><strong>Προσοχή:</strong> Παρά την ύπαρξη κάποιων ευεργετικών συστατικών, το μέλι είναι συμπυκνωμένο σάκχαρο και πρέπει να καταναλώνεται με μέτρο, ειδικά από άτομα με διαβήτη.</li>
    </ul>
      `,
      },
      en: {
        title: "Juicy Banana Bread",
        contentHtml: `
    <section>
      <p><strong>Servings:</strong> 10 &nbsp; <strong>Yield:</strong> 10</p>
      <p>
        <strong>Total time:</strong> 40’, 
        <strong>Difficulty:</strong> Easy, 
        <strong>Calories/serving:</strong> 275 kcal, 
        <strong>Meal:</strong> Snack (High protein)
      </p>
      <p><strong>Nutritional profile:</strong> Healthy Aging / Strong Immune System / High Protein</p>
    </section>

    <h3>Ingredients</h3>
    <ul>
      <li>450 g mashed banana</li>
      <li>2 eggs</li>
      <li>70 g honey</li>
      <li>30 g olive oil</li>
      <li>170 ml milk (1.5% fat)</li>
      <li>30 ml espresso coffee</li>
      <li>1 tsp liquid vanilla</li>
      <li>250 g spelt flour</li>
      <li>1.5 tsp baking powder</li>
      <li>½ tsp baking soda</li>
      <li>½ tsp salt</li>
      <li>1.5 tsp cinnamon</li>
      <li>1 tsp cocoa powder</li>
      <li>50 g dark chocolate</li>
    </ul>

    <h3>Instructions</h3>
    <ol>
      <li>In a bowl, whisk the eggs with the honey. Add the oil.</li>
      <li>Once the coffee is prepared and cooled, add it to the bowl along with the milk and vanilla.</li>
      <li>Add the mashed banana, then all the dry ingredients and the chocolate.</li>
      <li>Finally, gradually add the flour and mix.</li>
      <li>Bake in a preheated oven for 30 minutes at 160°C.</li>
    </ol>

    <h3>Nutritional values (per 100 g)</h3>
    <table>
      <tbody>
        <tr><td><strong>Calories</strong></td><td>275 kcal</td></tr>
        <tr><td><strong>Carbohydrates</strong></td><td>43.5 g</td></tr>
        <tr><td><strong>Fiber</strong></td><td>3.6 g</td></tr>
        <tr><td><strong>Sugars</strong></td><td>22 g</td></tr>
        <tr><td><strong>Protein</strong></td><td>8.5 g</td></tr>
        <tr><td><strong>Fat</strong></td><td>9.5 g</td></tr>
      </tbody>
    </table>

    <h3>Nutritional benefits of key ingredients</h3>

    <h4>Banana</h4>
    <p>Bananas are nutritionally dense fruits, rich in carbohydrates, vitamins, and minerals. Their composition varies slightly with ripeness (unripe bananas have more starch, ripe bananas more sugars).</p>
    <p>They’re also an excellent source of key vitamins and minerals:</p>
    <ul>
      <li><strong>Potassium:</strong> Helps regulate blood pressure and supports heart health.</li>
      <li><strong>Vitamin B6:</strong> Plays a crucial role in metabolism and nervous system function; one banana can cover a significant portion of daily needs.</li>
      <li><strong>Vitamin C:</strong> An antioxidant vitamin that supports immune function.</li>
      <li><strong>Magnesium:</strong> Supports bone health and muscle function.</li>
    </ul>

    <h4>Honey</h4>
    <p>Honey is a sweetener high in sugars and energy; its nutritional value depends on the type.</p>
    <ul>
      <li><strong>Sugars:</strong> Mainly fructose (~38%) and glucose (~31%), making it a quick energy source.</li>
      <li><strong>Vitamins & Minerals:</strong> Contains small amounts of vitamins (B6, C, thiamine, niacin) and minerals (potassium, iron, manganese, phosphorus, zinc), typically too low to significantly impact daily intake.</li>
      <li><strong>Antioxidants:</strong> Provides flavonoids and phenolic acids, varying by floral source.</li>
      <li><strong>Note:</strong> Despite some beneficial compounds, honey is concentrated sugar and should be consumed in moderation, especially by people with diabetes.</li>
    </ul>
      `,
      },
    },
    instagramPostUrl: "https://www.instagram.com/p/DO3dwZXDEHS/",
    instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/",
  },

  {
    slug: "energy-balls",
    image: "/images/blog/7.jpg",
    category: "recipes",
    M: {
      el: {
        title: "ΜΠΑΛΑΚΙΑ ΕΝΕΡΓΕΙΑΣ (19 μπαλάκια)",
        contentHtml: `
    <h3>Υλικά:</h3>
    <ul>
      <li>140γρ πάστα χουρμά από 5 βασιλικούς χουρμάδες</li>
      <li>100γρ καρότο τριμμένο</li>
      <li>140γρ βρώμη ολικής άλεσης</li>
      <li>40 καρύδια ψιλοκομμένα με το χέρι</li>
      <li>30γρ φυστικοβούτυρο χωρίς ζάχαρη</li>
      <li>1 κ. σούπας αγαύη ή μέλι</li>
      <li>30ml χυμό πορτοκάλι</li>
      <li>Κανέλα, τζίντζερ, κουρκουμά</li>
      <li>1 κ. σούπας λιναρόσπορο</li>
      <li>1 κ. σούπας τσία σπόρους</li>
      <li>1 κ. σούπας κράμπερις χωρίς ζάχαρη</li>
      <li>Κακάο άγλυκο για επικάλυψη</li>
    </ul>

    <h3>Tip:</h3>
    <ul>
      <li>Τον λιναρόσπορο τον βάζουμε πάντα κοπανισμένο για την σίγουρη απορρόφηση των Ω3 λιπαρών που διαθέτει</li>
      <li>2 μπαλάκια (γυναίκες) / 3 μπαλάκια (άνδρες) = Ιδανικό σνακ για 30-1 ώρα πριν την προπόνηση!</li>
    </ul>

    <h3>Διατροφικός Πίνακας για 19 μπαλάκια ενέργειας</h3>
    <table>
      <thead>
        <tr>
          <th>Συστατικό</th>
          <th>Ποσότητα (συνολικά)</th>
          <th>Ανά μπαλάκι (1/19)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Θερμίδες</strong></td><td>1.140 kcal</td><td>60 kcal</td></tr>
        <tr><td><strong>Πρωτεΐνη</strong></td><td>29 γρ.</td><td>1,5 γρ.</td></tr>
        <tr><td><strong>Υδατάνθρακες</strong></td><td>160 γρ.</td><td>~ 8,4 γρ.</td></tr>
        <tr><td><strong>Λιπαρά</strong></td><td>51 γρ.</td><td>2,7 γρ.</td></tr>
        <tr><td><strong>Φυτικές Ίνες</strong></td><td>25 γρ.</td><td>1,3 γρ.</td></tr>
      </tbody>
    </table>
      `,
      },
      en: {
        title: "ENERGY BALLS (19 pieces)",
        contentHtml: `
    <h3>Ingredients:</h3>
    <ul>
      <li>140 g date paste (from about 5 Medjool dates)</li>
      <li>100 g grated carrot</li>
      <li>140 g whole-grain oats</li>
      <li>40 g walnuts, roughly chopped by hand</li>
      <li>30 g sugar-free peanut butter</li>
      <li>1 tbsp agave syrup or honey</li>
      <li>30 ml orange juice</li>
      <li>Cinnamon, ginger, turmeric</li>
      <li>1 tbsp ground flaxseed</li>
      <li>1 tbsp chia seeds</li>
      <li>1 tbsp unsweetened cranberries</li>
      <li>Unsweetened cocoa powder for coating</li>
    </ul>

    <h3>Tip:</h3>
    <ul>
      <li>Always grind the flaxseeds to ensure absorption of their omega-3 fatty acids.</li>
      <li>2 balls (for women) / 3 balls (for men) = Ideal snack 30–60 minutes before workout!</li>
    </ul>

    <h3>Nutritional Table for 19 Energy Balls</h3>
    <table>
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Total amount</th>
          <th>Per ball (1/19)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Calories</strong></td><td>1,140 kcal</td><td>60 kcal</td></tr>
        <tr><td><strong>Protein</strong></td><td>29 g</td><td>1.5 g</td></tr>
        <tr><td><strong>Carbohydrates</strong></td><td>160 g</td><td>~8.4 g</td></tr>
        <tr><td><strong>Fat</strong></td><td>51 g</td><td>2.7 g</td></tr>
        <tr><td><strong>Fiber</strong></td><td>25 g</td><td>1.3 g</td></tr>
      </tbody>
    </table>
      `,
      },
    },
    instagramPostUrl: "https://www.instagram.com/p/DOlpxlXjP_0/",
    instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/",
  },

  {
    slug: "peanut-butter-banana-rolls",
    image: "/images/blog/8.jpg",
    category: "recipes",
    M: {
      el: {
        title: "Ρολάκια φυστικοβούτυρο και μπανάνα",
        contentHtml: `
    <section>
      <p><strong>Μερίδες:</strong> 6 &nbsp; <strong>Απόδοση:</strong> 6</p>
      <p>
        <strong>Συνολικός χρόνος:</strong> 40’, 
        <strong>Δυσκολία:</strong> Εύκολη, 
        <strong>Θερμίδες ανά μερίδα:</strong> 111,6 Kcal, 
        <strong>Γεύμα:</strong> Σνακ (Ενέργεια)
      </p>
      <p><strong>Διατροφικό προφίλ:</strong> Υγιής Γήρανση / Υγιές Ανοσοποιητικό / Χωρίς αυγό / Χωρίς σόγια</p>
    </section>

    <h3>Υλικά:</h3>
    <ul>
      <li>1 τορτίγια μεσαία</li>
      <li>1 μπανάνα μεσαία</li>
      <li>2 κ.σ. φυστικοβούτυρο</li>
    </ul>

    <h4>Κρέμα τυριού:</h4>
    <ul>
      <li>2 κ.σ. τυρί κρέμα</li>
      <li>½ κ.γ. λεμόνι χυμό</li>
      <li>¼ κ.γ. κανέλα</li>
      <li>2 κ.γ. αγαύη</li>
      <li>1 κ.γ. βανίλια υγρή</li>
      <li>1 κ.γ. φυστικοβούτυρο</li>
    </ul>

    <p>Λίγη έξτρα κανέλα για πασπάλισμα</p>

    <h3>Εκτέλεση:</h3>
    <ol>
      <li>Άπλωσε το φυστικοβούτυρο στην τορτίγια και τοποθέτησε τη μπανάνα στη μέση.</li>
      <li>Τύλιξε σε ρολό και κόψε σε μικρά ρολάκια.</li>
      <li>Ψήσε στο airfryer για 8–10 λεπτά στους 180°C μέχρι να γίνουν χρυσαφένια και τραγανά.</li>
      <li>Ανακάτεψε όλα τα υλικά για την κρέμα μέχρι να γίνει λεία και κρεμώδης.</li>
      <li>Σέρβιρε τα ρολάκια ζεστά με την κρέμα και πασπάλισε με λίγη κανέλα!</li>
    </ol>

    <h3>Διατροφικός πίνακας</h3>
    <table>
      <thead>
        <tr>
          <th>Θρεπτικά συστατικά</th>
          <th>100 gr</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Θερμίδες</td><td>112 kcal</td></tr>
        <tr><td>Υδατάνθρακες</td><td>12,5 g</td></tr>
        <tr><td>Πρωτεΐνη</td><td>3,5 g</td></tr>
        <tr><td>Λιπαρά</td><td>6,2 g</td></tr>
      </tbody>
    </table>

    <h3>Διατροφικά οφέλη βασικών συστατικών</h3>

    <h4>Μπανάνα</h4>
    <p>Η μπανάνα είναι ένα φρούτο με υψηλή διατροφική αξία, πλούσιο σε υδατάνθρακες, βιταμίνες και μέταλλα. Η διατροφική της σύσταση ποικίλλει ελαφρώς ανάλογα με τον βαθμό ωρίμανσής της (οι άγουρες έχουν περισσότερο άμυλο, ενώ οι ώριμες περισσότερα σάκχαρα).</p>
    <p>Επιπλέον, η μπανάνα είναι εξαιρετική πηγή σημαντικών βιταμινών και μετάλλων:</p>
    <ul>
      <li><strong>Κάλιο:</strong> Συμβάλλει στη ρύθμιση της αρτηριακής πίεσης και την υγεία της καρδιάς.</li>
      <li><strong>Βιταμίνη B6:</strong> Παίζει κρίσιμο ρόλο στον μεταβολισμό και την καλή λειτουργία του νευρικού συστήματος. Μια μπανάνα μπορεί να καλύψει σημαντικό ποσοστό της ημερήσιας ανάγκης.</li>
      <li><strong>Βιταμίνη C:</strong> Αντιοξειδωτική βιταμίνη που ενισχύει το ανοσοποιητικό σύστημα.</li>
      <li><strong>Μαγνήσιο:</strong> Συμβάλλει στην υγεία των οστών και τη μυϊκή λειτουργία.</li>
    </ul>

    <h4>Φυστικοβούτυρο</h4>
    <p>Το φυστικοβούτυρο είναι ένα τρόφιμο πλούσιο σε θρεπτικά συστατικά. Τα βασικά στοιχεία που περιέχει (ανά 100 γραμμάρια περίπου, αν και οι τιμές μπορεί να διαφέρουν ανάλογα με το προϊόν – αν είναι φυσικό ή με πρόσθετα) είναι:</p>
    <ul>
      <li><strong>Θερμίδες:</strong> Περίπου 588–596 kcal.</li>
      <li><strong>Λίπη:</strong> Περίπου 46–50 γρ., εκ των οποίων τα περισσότερα είναι ακόρεστα λιπαρά οξέα (μονοακόρεστα και πολυακόρεστα, όπως Ωμέγα-6), που είναι ωφέλιμα για την υγεία της καρδιάς.</li>
      <li><strong>Πρωτεΐνες:</strong> 25–30 γρ., αποτελεί καλή πηγή φυτικής πρωτεΐνης και θεωρείται ατελής, αλλά μπορεί να συμπληρωθεί με άλλα τρόφιμα.</li>
      <li><strong>Υδατάνθρακες:</strong> 12–20 γρ.</li>
      <li><strong>Φυτικές ίνες:</strong> 6–9 γρ., βοηθούν στον κορεσμό και την πέψη.</li>
      <li><strong>Σάκχαρα:</strong> 6–9 γρ. (εμπορικά προϊόντα μπορεί να περιέχουν πρόσθετη ζάχαρη).</li>
    </ul>

    <p>Επιπλέον, περιέχει σημαντικές ποσότητες <strong>βιταμινών</strong> και <strong>μετάλλων</strong>, όπως:</p>
    <ul>
      <li>Βιταμίνη E</li>
      <li>Βιταμίνες του συμπλέγματος B (π.χ. νικοτινικό οξύ – B3, B6)</li>
      <li>Μαγνήσιο</li>
      <li>Κάλιο</li>
      <li>Ψευδάργυρο</li>
      <li>Φώσφορο</li>
      <li>Αντιοξειδωτικά (όπως ρεσβερατρόλη και κουμαρικό οξύ)</li>
    </ul>

    <p><strong>Σημείωση:</strong> Λόγω της υψηλής περιεκτικότητάς του σε θερμίδες και λίπος, συνιστάται η κατανάλωσή του με μέτρο. Επιλέξτε φυστικοβούτυρο που περιέχει μόνο φιστίκια (και ενδεχομένως λίγο αλάτι), αποφεύγοντας αυτά με πρόσθετα έλαια, ζάχαρη και συντηρητικά.</p>
      `,
      },
      en: {
        title: "Peanut Butter & Banana Rolls",
        contentHtml: `
    <section>
      <p><strong>Servings:</strong> 6 &nbsp; <strong>Yield:</strong> 6</p>
      <p>
        <strong>Total time:</strong> 40’, 
        <strong>Difficulty:</strong> Easy, 
        <strong>Calories per serving:</strong> 111.6 kcal, 
        <strong>Meal:</strong> Snack (Energy)
      </p>
      <p><strong>Nutritional profile:</strong> Healthy Aging / Strong Immune System / Egg-free / Soy-free</p>
    </section>

    <h3>Ingredients:</h3>
    <ul>
      <li>1 medium tortilla</li>
      <li>1 medium banana</li>
      <li>2 tbsp peanut butter</li>
    </ul>

    <h4>Cream cheese filling:</h4>
    <ul>
      <li>2 tbsp cream cheese</li>
      <li>½ tsp lemon juice</li>
      <li>¼ tsp cinnamon</li>
      <li>2 tsp agave syrup</li>
      <li>1 tsp liquid vanilla</li>
      <li>1 tsp peanut butter</li>
    </ul>

    <p>A little extra cinnamon for sprinkling</p>

    <h3>Instructions:</h3>
    <ol>
      <li>Spread peanut butter over the tortilla and place the banana in the center.</li>
      <li>Roll it up and cut into small bite-size rolls.</li>
      <li>Air-fry for 8–10 minutes at 180°C until golden and crispy.</li>
      <li>Mix all the cream ingredients until smooth and creamy.</li>
      <li>Serve the warm rolls with the cream and a sprinkle of cinnamon!</li>
    </ol>

    <h3>Nutritional Table</h3>
    <table>
      <thead>
        <tr>
          <th>Nutrients</th>
          <th>Per 100 g</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Calories</td><td>112 kcal</td></tr>
        <tr><td>Carbohydrates</td><td>12.5 g</td></tr>
        <tr><td>Protein</td><td>3.5 g</td></tr>
        <tr><td>Fat</td><td>6.2 g</td></tr>
      </tbody>
    </table>

    <h3>Nutritional Benefits of Key Ingredients</h3>

    <h4>Banana</h4>
    <p>The banana is a nutritionally rich fruit high in carbohydrates, vitamins, and minerals. Its composition slightly varies with ripeness (unripe bananas contain more starch, ripe ones more sugars).</p>
    <p>It’s also an excellent source of essential vitamins and minerals:</p>
    <ul>
      <li><strong>Potassium:</strong> Helps regulate blood pressure and supports heart health.</li>
      <li><strong>Vitamin B6:</strong> Plays a vital role in metabolism and nervous system function. A banana can meet a significant portion of the daily requirement.</li>
      <li><strong>Vitamin C:</strong> Antioxidant vitamin that boosts immune function.</li>
      <li><strong>Magnesium:</strong> Supports bone health and muscle function.</li>
    </ul>

    <h4>Peanut Butter</h4>
    <p>Peanut butter is a nutrient-dense food. Its nutritional composition (per 100 g, depending on the product — natural or with additives) includes:</p>
    <ul>
      <li><strong>Calories:</strong> About 588–596 kcal.</li>
      <li><strong>Fat:</strong> About 46–50 g, mostly unsaturated fats (mono- and polyunsaturated, such as omega-6), beneficial for heart health.</li>
      <li><strong>Protein:</strong> 25–30 g, a good source of plant protein (incomplete but complementable with other foods).</li>
      <li><strong>Carbohydrates:</strong> 12–20 g.</li>
      <li><strong>Fiber:</strong> 6–9 g, promoting satiety and digestion.</li>
      <li><strong>Sugars:</strong> 6–9 g (commercial varieties may include added sugar).</li>
    </ul>

    <p>It also provides important <strong>vitamins</strong> and <strong>minerals</strong> such as:</p>
    <ul>
      <li>Vitamin E</li>
      <li>B-complex vitamins (e.g., niacin – B3, B6)</li>
      <li>Magnesium</li>
      <li>Potassium</li>
      <li>Zinc</li>
      <li>Phosphorus</li>
      <li>Antioxidants (such as resveratrol and p-coumaric acid)</li>
    </ul>

    <p><strong>Note:</strong> Due to its high calorie and fat content, it should be consumed in moderation. Choose natural peanut butter made only from peanuts (and possibly salt), avoiding products with added oils, sugar, or preservatives.</p>
      `,
      },
    },
    instagramPostUrl: "https://www.instagram.com/p/DPa7Ji-DDRR/",
    instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/",
  },

  {
    slug: "cheesecake-mlopita",
    image: "/images/blog/9.jpg",
    category: "recipes",
    M: {
      el: {
        title: "Cheesecake μηλόπιτα",
        contentHtml: `
    <section>
      <p><strong>Μερίδες:</strong> 12 &nbsp; <strong>Απόδοση:</strong> 12</p>
      <p>
        <strong>Συνολικός χρόνος:</strong> 90’, 
        <strong>Δυσκολία:</strong> Μέτρια, 
        <strong>Θερμίδες ανά μερίδα:</strong> 236 Kcal, 
        <strong>Γεύμα:</strong> Επιδόρπιο (Υψηλή πρωτεΐνη)
      </p>
      <p><strong>Διατροφικό προφίλ:</strong> Υψηλή πρωτεΐνη / Χωρίς ζάχαρη</p>
    </section>

    <h3>Υλικά</h3>
    <h4>Βάση:</h4>
    <ul>
      <li>1 πακέτο digestive χωρίς ζάχαρη</li>
      <li>20 γρ. πεκάν καρύδια χοντροκομμένα</li>
      <li>1 κ.σ. becel proactive light (λιωμένο) & 4–5 κ.σ. γάλα βανίλια protein ή απλό</li>
      <li>½ κ.γ. κανέλα</li>
      <li>2 κ.γ. μέλι</li>
    </ul>

    <h4>Κρέμα:</h4>
    <ul>
      <li>4 αβγά</li>
      <li>600 γρ. τυρί κρέμα light</li>
      <li>1 κ.σ. κανέλα</li>
      <li>1 κ.σ. βανίλια</li>
      <li>¼ κ.γ. τζίντζερ</li>
      <li>80 γρ. μέλι ή αγαύη</li>
      <li>2 κ.σ. αλεύρι για όλες τις χρήσεις</li>
      <li>½ μερίδα καραμελωμένο μήλο</li>
    </ul>

    <h4>Γαρνίρω με:</h4>
    <ul>
      <li>½ μερίδα καραμελωμένο μήλο</li>
      <li>20 γρ. πεκάν</li>
      <li>50 γρ. βερίκοκο μαρμελάδα Healthy Habits</li>
      <li>2 κ.σ. φυστικοβούτυρο κανέλα Wild Souls</li>
    </ul>

    <h4>Για το καραμελωμένο μήλο:</h4>
    <ul>
      <li>4 μήλα</li>
      <li>90 ml γάλα light ή protein βανίλια</li>
      <li>1 κ.σ. βανίλια</li>
      <li>2 κ.σ. μέλι</li>
      <li>1 κ.σ. κανέλα</li>
      <li>9–10 σταγόνες λεμόνι</li>
    </ul>

    <h3>Εκτέλεση:</h3>
    <p><strong>Για τη βάση:</strong> Θρυμματίζεις τα digestive, προσθέτεις τα χοντροκομμένα πεκάν, λιώνεις το becel και το προσθέτεις, μαζί με το γάλα, το μέλι και την κανέλα. Πιέζεις καλά στη φόρμα (26 εκ.). Ψήνεις για 10’ στους 170°C στις αντιστάσεις. Αν χρειάζεται περισσότερη υγρασία, πρόσθεσε λίγο γάλα ή μέλι.</p>

    <p><strong>Για τα καραμελωμένα μήλα:</strong> Κόβεις τα μήλα σε κυβάκια, προσθέτεις όλα τα υλικά σε ένα μπολ, ανακατεύεις και σιγοβράζεις σε τηγάνι για 7–10’ μέχρι να μαλακώσουν.</p>

    <p><strong>Για την κρέμα:</strong> Χτυπάς όλα τα υλικά (αυγά, τυρί κρέμα, μέλι, αλεύρι, βανίλια, κανέλα, τζίντζερ) μέχρι να γίνει ομοιογενές μείγμα.</p>

    <p><strong>Για το στήσιμο:</strong> Βάζεις το ¼ των καραμελωμένων μήλων πάνω στη βάση του μπισκότου, απλώνεις την κρέμα και ρίχνεις το υπόλοιπο ½. Ψήνεις για 45–55’ στους 160°C στις αντιστάσεις. Αφήνεις να κρυώσει καλά.</p>

    <p><strong>Για το σερβίρισμα:</strong> Ανακατεύεις τη μαρμελάδα με το καραμελωμένο μήλο που κράτησες και απλώνεις στην επιφάνεια του cheesecake. Από πάνω ρίχνεις τα καρύδια και το φυστικοβούτυρο.</p>

    <h3>Διατροφικός πίνακας</h3>
    <table>
      <thead>
        <tr>
          <th>Θρεπτικά συστατικά</th>
          <th>Ανά μερίδα</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Θερμίδες</td><td>236 kcal</td></tr>
        <tr><td>Υδατάνθρακες</td><td>15,1 g</td></tr>
        <tr><td>Πρωτεΐνη</td><td>8 g</td></tr>
        <tr><td>Φυτικές Ίνες</td><td>1,4 g</td></tr>
        <tr><td>Λιπαρά</td><td>15,1 g</td></tr>
      </tbody>
    </table>

    <h3>Διατροφικά οφέλη βασικών συστατικών</h3>

    <h4>Μήλο</h4>
    <p>Το μήλο είναι ένα φρούτο με υψηλή περιεκτικότητα σε θρεπτικά συστατικά, ειδικά αν καταναλώνεται με τη φλούδα του, όπου βρίσκονται οι περισσότερες φυτικές ίνες και αντιοξειδωτικά.</p>
    <ul>
      <li><strong>Βιταμίνη C:</strong> Σημαντικό αντιοξειδωτικό.</li>
      <li><strong>Κάλιο:</strong> Συμβάλλει στη ρύθμιση της αρτηριακής πίεσης.</li>
      <li><strong>Βιταμίνη Κ</strong> και <strong>Βιταμίνες του συμπλέγματος Β</strong> (Β1, Β2, Β6) καθώς και μέταλλα (Σίδηρος, Μαγνήσιο).</li>
      <li><strong>Φυτικές ίνες:</strong> Κυρίως πηκτίνη, που βοηθά στην πέψη και στη μείωση της χοληστερόλης.</li>
      <li><strong>Πολυφαινόλες & Φυτοχημικά:</strong> Όπως κερκετίνη και κατεχίνες, με αντιοξειδωτική δράση και πιθανή προστασία από χρόνιες παθήσεις.</li>
      <li><strong>Ενυδάτωση:</strong> Λόγω της μεγάλης περιεκτικότητας σε νερό, συμβάλλει στην ενυδάτωση του οργανισμού.</li>
    </ul>

    <h4>Καρύδια πεκάν</h4>
    <p>Τα καρύδια πεκάν είναι εξαιρετικά θρεπτικοί ξηροί καρποί, πλούσιοι σε καλά λιπαρά, φυτικές ίνες και αντιοξειδωτικά.</p>
    <ul>
      <li><strong>Μαγγάνιο:</strong> Πολύ υψηλή περιεκτικότητα (καλύπτει το ΣΗΠ).</li>
      <li><strong>Χαλκός:</strong> Υψηλή περιεκτικότητα.</li>
      <li><strong>Θειαμίνη (Β1):</strong> Καλή πηγή.</li>
      <li><strong>Ψευδάργυρος, Μαγνήσιο, Κάλιο:</strong> Καλές πηγές.</li>
      <li><strong>Βιταμίνη Ε (γ-τοκοφερόλη):</strong> Ισχυρό αντιοξειδωτικό.</li>
      <li><strong>Υγεία της Καρδιάς:</strong> Περιέχουν μονοακόρεστα και πολυακόρεστα λιπαρά (Ω3, Ω6) που μειώνουν την LDL χοληστερόλη.</li>
      <li><strong>Αντιοξειδωτική Δράση:</strong> Πλούσια σε πολυφαινόλες.</li>
      <li><strong>Πεπτική Υγεία:</strong> Οι φυτικές ίνες βοηθούν τη λειτουργία του εντέρου.</li>
    </ul>
    <p>Συνιστάται κατανάλωση με μέτρο (περίπου 30 γρ. ή 200 θερμίδες).</p>
      `,
      },
      en: {
        title: "Apple Pie Cheesecake",
        contentHtml: `
    <section>
      <p><strong>Servings:</strong> 12 &nbsp; <strong>Yield:</strong> 12</p>
      <p>
        <strong>Total time:</strong> 90’, 
        <strong>Difficulty:</strong> Medium, 
        <strong>Calories per serving:</strong> 236 kcal, 
        <strong>Meal:</strong> Dessert (High protein)
      </p>
      <p><strong>Nutritional profile:</strong> High Protein / Sugar-free</p>
    </section>

    <h3>Ingredients</h3>
    <h4>Base:</h4>
    <ul>
      <li>1 package sugar-free digestive biscuits</li>
      <li>20 g roughly chopped pecans</li>
      <li>1 tbsp light margarine (melted) & 4–5 tbsp vanilla protein or regular milk</li>
      <li>½ tsp cinnamon</li>
      <li>2 tsp honey</li>
    </ul>

    <h4>Cream:</h4>
    <ul>
      <li>4 eggs</li>
      <li>600 g light cream cheese</li>
      <li>1 tbsp cinnamon</li>
      <li>1 tbsp vanilla extract</li>
      <li>¼ tsp ginger</li>
      <li>80 g honey or agave syrup</li>
      <li>2 tbsp all-purpose flour</li>
      <li>½ portion caramelized apple</li>
    </ul>

    <h4>Topping:</h4>
    <ul>
      <li>½ portion caramelized apple</li>
      <li>20 g pecans</li>
      <li>50 g apricot jam (Healthy Habits)</li>
      <li>2 tbsp cinnamon peanut butter (Wild Souls)</li>
    </ul>

    <h4>Caramelized apples:</h4>
    <ul>
      <li>4 apples</li>
      <li>90 ml light or vanilla protein milk</li>
      <li>1 tbsp vanilla</li>
      <li>2 tbsp honey</li>
      <li>1 tbsp cinnamon</li>
      <li>9–10 drops lemon juice</li>
    </ul>

    <h3>Preparation:</h3>
    <p><strong>Base:</strong> Crush the digestives, add chopped pecans, melted margarine, milk, honey, and cinnamon. Press the mixture firmly into a 26 cm pan and bake for 10’ at 170°C. Add a bit more milk or honey if the mixture feels dry.</p>

    <p><strong>Caramelized apples:</strong> Cut the apples into cubes, add all ingredients in a pan, and simmer for 7–10’ until softened.</p>

    <p><strong>Cream:</strong> Beat all ingredients (eggs, cream cheese, honey, flour, vanilla, cinnamon, ginger) until smooth.</p>

    <p><strong>Assembly:</strong> Spread ¼ of the caramelized apples on the base, pour the cream over, and top with another ½ of the apples. Bake for 45–55’ at 160°C. Let cool completely.</p>

    <p><strong>Serving:</strong> Mix the jam with the reserved apples, spread on top of the cheesecake, then add the pecans and drizzle with peanut butter.</p>

    <h3>Nutritional Table</h3>
    <table>
      <thead>
        <tr>
          <th>Nutrients</th>
          <th>Per serving</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Calories</td><td>236 kcal</td></tr>
        <tr><td>Carbohydrates</td><td>15.1 g</td></tr>
        <tr><td>Protein</td><td>8 g</td></tr>
        <tr><td>Fiber</td><td>1.4 g</td></tr>
        <tr><td>Fat</td><td>15.1 g</td></tr>
      </tbody>
    </table>

    <h3>Nutritional Benefits of Key Ingredients</h3>

    <h4>Apple</h4>
    <p>Apples are nutrient-rich fruits, especially when eaten with the peel, where most of the fiber and antioxidants are found.</p>
    <ul>
      <li><strong>Vitamin C:</strong> Important antioxidant.</li>
      <li><strong>Potassium:</strong> Helps regulate blood pressure.</li>
      <li><strong>Vitamin K</strong> and <strong>B-complex vitamins</strong> (B1, B2, B6), along with minerals (iron, magnesium).</li>
      <li><strong>Fiber:</strong> Mainly pectin, aids digestion and lowers cholesterol.</li>
      <li><strong>Polyphenols & Phytochemicals:</strong> Such as quercetin and catechins, providing antioxidant protection and potential disease prevention.</li>
      <li><strong>Hydration:</strong> High water content supports body hydration.</li>
    </ul>

    <h4>Pecans</h4>
    <p>Pecans are nutrient-dense nuts rich in healthy fats, fiber, and antioxidants.</p>
    <ul>
      <li><strong>Manganese:</strong> Extremely high content (covers daily needs).</li>
      <li><strong>Copper:</strong> Excellent source.</li>
      <li><strong>Thiamine (B1):</strong> Good source.</li>
      <li><strong>Zinc, Magnesium, Potassium:</strong> Good sources.</li>
      <li><strong>Vitamin E (γ-tocopherol):</strong> Strong antioxidant.</li>
      <li><strong>Heart Health:</strong> Monounsaturated and polyunsaturated fats (Ω3, Ω6) lower LDL cholesterol.</li>
      <li><strong>Antioxidant Action:</strong> Rich in polyphenols.</li>
      <li><strong>Digestive Health:</strong> Fiber supports bowel function.</li>
    </ul>
    <p>Recommended in moderation (about 30 g or 200 kcal).</p>
      `,
      },
    },
    instagramPostUrl: "https://www.instagram.com/p/DPs6twNjDpp/",
    instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/",
  },

  {
    slug: "manitaropita-proteiniki",
    image: "/images/blog/10.jpg",
    category: "recipes",
    M: {
      el: {
        title: "Μανιταρόπιτα Πρωτεϊνική",
        contentHtml: `
    <section>
      <p><strong>Μερίδες:</strong> 10 &nbsp; <strong>Απόδοση:</strong> 10</p>
      <p>
        <strong>Συνολικός χρόνος:</strong> 60’, 
        <strong>Δυσκολία:</strong> Μέτρια, 
        <strong>Θερμίδες ανά μερίδα:</strong> 290 Kcal, 
        <strong>Γεύμα:</strong> Μεσημεριανό ή βραδινό (Υψηλή πρωτεΐνη, Φυτικές ίνες)
      </p>
      <p><strong>Διατροφικό προφίλ:</strong> Υγιής Γήρανση / Υγιές Ανοσοποιητικό / Χωρίς Σόγια / Χωρίς Αυγό</p>
    </section>

    <h3>Συστατικά</h3>
    <ul>
      <li>500 γρ. λευκά μανιτάρια και πόρτο μπέλο</li>
      <li>1 ξερό κρεμμύδι μεγάλο</li>
      <li>1 τριμμένο καρότο</li>
      <li>1 κ.σ. άνηθο</li>
      <li>4 κ.σ. ελαιόλαδο</li>
      <li>Πιπέρι, αλάτι</li>
      <li>200 γρ. αλεύρι ολικής άλεσης</li>
      <li>5 γρ. μπέικιν πάουντερ</li>
      <li>4 αβγά</li>
      <li>170 ml γάλα ελαφρύ και 100 ml ζωμό</li>
      <li>1 κ.σ. μουστάρδα</li>
      <li>150 γρ. τυρί ελαφρύ Milner</li>
      <li>100 γρ. μετζέρλα</li>
      <li>100 γρ. τυρί cottage</li>
      <li>100 γρ. τυρί κρέμα light</li>
    </ul>

    <h3>Εκτέλεση</h3>
    <ol>
      <li><strong>Προετοιμασία:</strong> Κόβεις τα μανιτάρια σε κομμάτια, ψιλοκόβεις το κρεμμύδι, τρίβεις το καρότο. Σοτάρεις το κρεμμύδι με 2 κ.σ. ελαιόλαδο μέχρι να μαλακώσει. Προσθέτεις καρότο και μανιτάρια με άφθονο αλάτι και πιπέρι και σοτάρεις μέχρι να βγάλουν τα νερά τους. Αφήνεις να κρυώσουν λίγο.</li>
      <li><strong>Χυλός:</strong> Χτυπάς τα υγρά (αυγά, γάλα, ζωμό, μουστάρδα, 2 κ.σ. ελαιόλαδο). Προσθέτεις το μείγμα μανιταριών και μετά τα στερεά υλικά (αλεύρι, μπέικιν, 50 γρ. Milner, φέτα, άνηθο, αλάτι, πιπέρι, γλυκιά πάπρικα). Ανακατεύεις καλά μέχρι να γίνει ομοιογενές μείγμα.</li>
      <li><strong>Σύνθεση:</strong> Λαδώνεις μια ταρτιέρα ή ταψί (ανάλογα το πάχος που θέλεις). Προτείνω στρογγυλή ταρτιέρα για πιο αφράτη πίτα. Ρίχνεις τον χυλό και περιχύνεις με την κρέμα cottage. Πασπαλίζεις με το υπόλοιπο 50 γρ. Milner.</li>
      <li><strong>Ψήσιμο:</strong> Ψήνεις σε αντιστάσεις στους 180°C για 35–40 λεπτά ή μέχρι να ροδίσει.</li>
      <li><strong>Σερβίρισμα:</strong> Αφήνεις να κρυώσει λίγο πριν το κόψεις. Απολαμβάνεις ζεστή ή σε θερμοκρασία δωματίου.</li>
    </ol>

    <h3>Διατροφικός πίνακας</h3>
    <table>
      <thead>
        <tr>
          <th>Θρεπτικά συστατικά</th>
          <th>Ανά μερίδα</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Υδατάνθρακες</td><td>2,10 g</td></tr>
        <tr><td>Φυτικές ίνες</td><td>3,5 g</td></tr>
        <tr><td>Πρωτεΐνη</td><td>16 g</td></tr>
        <tr><td>Λιπαρά</td><td>16 g</td></tr>
      </tbody>
    </table>

    <h3>Διατροφικά οφέλη βασικών συστατικών</h3>

    <h4>Μανιτάρια</h4>
    <ul>
      <li><strong>Βιταμίνες του συμπλέγματος B:</strong> Ριβοφλαβίνη (B2), νιασίνη (B3), παντοθενικό οξύ (B5), και φυλλικό οξύ.</li>
      <li><strong>Βιταμίνη D:</strong>Τα μανιτάρια είναι από τις λίγες φυσικές, μη ζωικές πηγές βιταμίνης D. Η περιεκτικότητά τους αυξάνεται σημαντικά αν εκτεθούν σε υπεριώδες φως (π.χ. στον ήλιο) πριν από τη συγκομιδή.</li>
      <li><strong>Κάλιο:</strong> Συμβάλλει στη ρύθμιση της αρτηριακής πίεσης.</li>
      <li><strong>Χαλκός:</strong> Απαραίτητος για την παραγωγή ερυθρών αιμοσφαιρίων.</li>
      <li><strong>Σελήνιο:</strong> Ιχνοστοιχείο με αντιοξειδωτικές ιδιότητες.</li>
      <li><strong>Φώσφορος</strong> και <strong>Σίδηρος.</strong></li>
      <li><strong>Αντιοξειδωτικά:</strong>Περιέχουν αντιοξειδωτικά όπως η εργοθειονεΐνη και η γλουταθειόνη, που βοηθούν στην καταπολέμηση των ελεύθερων ριζών.</li>
      <li><strong>Β-γλυκάνες:</strong>Πρόκειται για έναν τύπο φυτικών ινών (πολυσακχαρίτες) που έχουν συνδεθεί με την ενίσχυση του ανοσοποιητικού συστήματος και τη μείωση της χοληστερόλης.</li>
    </ul>

    <h4>Τυρί Cottage</h4>
    <ul>
      <li><strong>Υψηλή Πρωτεΐνη:</strong> Είναι μια εξαιρετική πηγή πρωτεΐνης υψηλής βιολογικής αξίας, συμπεριλαμβανομένης της καζεΐνης, μιας πρωτεΐνης που απορροφάται αργά και είναι πολύ ωφέλιμη για την αποκατάσταση και ανάπτυξη των μυών (ιδίως πριν τον ύπνο).</li>
      <li><strong>Χαμηλές Θερμίδες & Λιπαρά:</strong> Είναι ένα από τα τυριά με τις λιγότερες θερμίδες και λιπαρά, καθιστώντας το ιδανική επιλογή για δίαιτες απώλειας βάρους ή για όσους προσέχουν την πρόσληψη λίπους.</li>
      <li><strong>Βιταμίνες & Μέταλλα:</strong> Περιέχει ασβέστιο, φώσφορο, βιταμίνη B12, σελήνιο και ψευδάργυρο.</li>
    </ul>

    <h3>Tip</h3>
    <p>Μανιτάρια: ο πιο νόστιμος τρόπος να "θωρακίσεις" τον οργανισμό σου! Χαμηλά σε θερμίδες (95 kcal/100 γρ), πλούσια σε πρωτεΐνες, φυτικές ίνες, αντιοξειδωτικά και βιταμίνη D — ένα φυσικό superfood που ενισχύει το ανοσοποιητικό και προστατεύει τα κύτταρα από τη φθορά. Ποιος είπε ότι τα superfoods δεν είναι gourmet;</p>
      `,
        instagramPostUrl: "https://www.instagram.com/p/DP-_KPWjLvV/",
        instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/"
      },
      en: {
        title: "High-Protein Mushroom Pie",
        contentHtml: `
    <section>
      <p><strong>Servings:</strong> 10 &nbsp; <strong>Yield:</strong> 10</p>
      <p>
        <strong>Total time:</strong> 60’, 
        <strong>Difficulty:</strong> Medium, 
        <strong>Calories per serving:</strong> 290 kcal, 
        <strong>Meal:</strong> Lunch or Dinner (High protein, High fiber)
      </p>
      <p><strong>Nutritional profile:</strong> Healthy Aging / Strong Immune System / Soy-free / Egg-free</p>
    </section>

    <h3>Ingredients</h3>
    <ul>
      <li>500 g white mushrooms & portobellos</li>
      <li>1 large yellow onion</li>
      <li>1 grated carrot</li>
      <li>1 tbsp dill</li>
      <li>4 tbsp olive oil</li>
      <li>Pepper, salt</li>
      <li>200 g whole-wheat flour</li>
      <li>5 g baking powder</li>
      <li>4 eggs</li>
      <li>170 ml light milk and 100 ml broth</li>
      <li>1 tbsp mustard</li>
      <li>150 g light Milner cheese</li>
      <li>100 g mozzarella</li>
      <li>100 g cottage cheese</li>
      <li>100 g light cream cheese</li>
    </ul>

    <h3>Method</h3>
    <ol>
      <li><strong>Prep:</strong> Cut mushrooms, finely chop onion, grate carrot. Sauté the onion with 2 tbsp olive oil until soft. Add carrot and mushrooms with plenty of salt and pepper and cook until they release their juices. Let cool slightly.</li>
      <li><strong>Batter:</strong> Whisk the liquids (eggs, milk, broth, mustard, 2 tbsp olive oil). Fold in the mushroom mixture, then the dry ingredients (flour, baking powder, 50 g Milner, feta, dill, salt, pepper, sweet paprika). Mix until homogeneous.</li>
      <li><strong>Assemble:</strong> Oil a tart pan or baking dish (choose based on desired thickness). A round tart pan gives a fluffier pie. Pour in the batter, drizzle the cottage cream over, and sprinkle with the remaining 50 g Milner.</li>
      <li><strong>Bake:</strong> 180°C, bottom–top heat, 35–40 minutes or until golden.</li>
      <li><strong>Serve:</strong> Let it cool slightly before slicing. Enjoy warm or at room temperature.</li>
    </ol>

    <h3>Nutritional table</h3>
    <table>
      <thead>
        <tr>
          <th>Nutrients</th>
          <th>Per serving</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Carbohydrates</td><td>2.10 g</td></tr>
        <tr><td>Fiber</td><td>3.5 g</td></tr>
        <tr><td>Protein</td><td>16 g</td></tr>
        <tr><td>Fat</td><td>16 g</td></tr>
      </tbody>
    </table>

    <h3>Nutritional benefits of key ingredients</h3>

    <h4>Mushrooms</h4>
    <ul>
      <li><strong>B-complex vitamins:</strong> Riboflavin (B2), niacin (B3), pantothenic acid (B5), and folate.</li>
      <li><strong>Vitamin D:</strong> One of the few natural non-animal sources. Levels rise markedly if exposed to UV light (e.g., sunlight) before harvest.</li>
      <li><strong>Potassium:</strong> Helps regulate blood pressure.</li>
      <li><strong>Copper:</strong> Essential for red blood cell production.</li>
      <li><strong>Selenium:</strong> Trace mineral with antioxidant activity.</li>
      <li><strong>Phosphorus</strong> and <strong>Iron.</strong></li>
      <li><strong>Antioxidants:</strong> Ergothioneine and glutathione help counter free radicals.</li>
      <li><strong>Beta-glucans:</strong> Soluble fibers linked to immune support and cholesterol reduction.</li>
    </ul>

    <h4>Cottage cheese</h4>
    <ul>
      <li><strong>High Protein:</strong> Excellent quality proteins, including slowly absorbed casein — great for muscle repair and growth (especially pre-sleep).</li>
      <li><strong>Lower Calories & Fat:</strong> Among the lowest-calorie, lower-fat cheeses; useful in weight-management diets.</li>
      <li><strong>Vitamins & Minerals:</strong> Provides calcium, phosphorus, vitamin B12, selenium, and zinc.</li>
    </ul>

    <h3>Tip</h3>
    <p>Mushrooms: the tastiest way to “shield” your body! Low-calorie (95 kcal/100 g), rich in protein, fiber, antioxidants, and vitamin D — a natural superfood that supports immunity and protects cells from damage. Who said superfoods can’t be gourmet?</p>
      `,
        instagramPostUrl: "https://www.instagram.com/p/DP-_KPWjLvV/",
        instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/"
      },
    },
  },

  {
    slug: "pumpkin-cupcakes",
    image: "/images/blog/12.jpg",
    category: "recipes",
    M: {
      el: {
        title: "Pumpkin Cupcakes",
        contentHtml: `
    <section>
      <h3>Pumpkin Cupcakes</h3>

      <p><strong>Μερίδες:</strong> 18 &nbsp; <strong>Απόδοση:</strong> 18</p>
      <p>
        <strong>Συνολικός χρόνος:</strong> 60’, 
        <strong>Δυσκολία:</strong> Μέτρια, 
        <strong>Θερμίδες ανά μερίδα :</strong> 175Kcal, 
        <strong>Γεύμα:</strong> Επιδόρπιο (Υψηλή πρωτεΐνη)
      </p>
      <p><strong>Διατροφικό προφίλ:</strong> Υψηλή πρωτεΐνη/χωρίς ζάχαρη</p>
    </section>

    <h3>Υλικά για 18 περίπου κέικ</h3>
    <ul>
      <li>350γρ πουρέ κολοκύθας</li>
      <li>100γρ σιρόπι σφενδάμου</li>
      <li>50γρ ελαιόλαδο</li>
      <li>150γρ ξινόγαλο</li>
      <li>2 αβγά</li>
      <li>1/2κγ αλάτι</li>
      <li>300γρ φαρίνα ολικής</li>
      <li>50γρ πρωτεΐνη</li>
      <li>50γρ πεκάνς καρύδια</li>
      <li>1κ.σ. κανέλα</li>
      <li>1/2κ.γ. μοσχοκάρυδο</li>
      <li>1/4κ.γ τζίτζερ</li>
      <li>1κ.γ. σόδα</li>
      <li>2 βανίλιες</li>
    </ul>

    <h3>Γέμιση για τα 9 (1/2 δόση γέμισμα)</h3>
    <ul>
      <li>2κ.σ. φυστικοβούτυρο χωρίς ζάχαρη</li>
      <li>2κ.γ. σφενδάμου σιρόπι</li>
      <li>3κ.σ. γάλα ελαφρύ</li>
      <li>1κ.σ. βανίλια υγρή</li>
      <li>Κανέλα</li>
    </ul>

    <h3>Γλάσο καφέ</h3>
    <ul>
      <li>90γρ τυρί κρέμα λαϊτ</li>
      <li>50γρ σύριγγα το γιαούρτι 2%</li>
      <li>1 σφηνάκι καφέ max 30 ml ή 1 κγ στιγμιαίο με 30 ml καυτό νερό</li>
      <li>2-3 σταγόνες λεμόνι</li>
      <li>3κ.σ. σιρόπι σφενδάμου</li>
    </ul>

    <h3>Εκτέλεση</h3>
    <p>Πασπαλίζω με κανέλα</p>
    <p>Ψήνω 22-25 λεπτά σε αέρα! Στους 170</p>

    <h3>Διατροφικός πίνακας</h3>
    <table>
      <thead>
        <tr>
          <th>Θρεπτικά συστατικά</th>
          <th>Ανά μερίδα</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Βάρος (Μικτό)</td><td>80g</td></tr>
        <tr><td>Θερμίδες</td><td>175kcal</td></tr>
        <tr><td>Υδατάνθρακες</td><td>20g</td></tr>
        <tr><td>Πρωτεΐνη</td><td>7,1g</td></tr>
        <tr><td>Φυτικές Ίνες</td><td>3g</td></tr>
        <tr><td>Λιπαρά</td><td>7,7g</td></tr>
      </tbody>
    </table>

    <h3>Διατροφικά οφέλη βασικών συστατικών</h3>

    <h4>Κολοκύθα</h4>
    <p>Η κολοκύθα είναι ένα εξαιρετικά θρεπτικό λαχανικό (αν και βοτανικά είναι καρπός) με πολλά οφέλη για την υγεία, κυρίως λόγω της υψηλής περιεκτικότητάς της σε βιταμίνες, μέταλλα και αντιοξειδωτικά.</p>
    <ul>
      <li><strong>Πλούσια σε βήτα-Καροτένιο:</strong> Η κολοκύθα οφείλει το έντονο πορτοκαλί της χρώμα στο <strong>β-καροτένιο</strong>, το οποίο ο οργανισμός μετατρέπει σε <strong>Βιταμίνη Α</strong>. Μία μερίδα μπορεί να καλύψει πολλαπλάσια την Ημερήσια Συνιστώμενη Πρόσληψη (RDA) σε Βιταμίνη Α.</li>
      <li><strong>Λουτεΐνη και Ζεαξανθίνη:</strong> Περιέχει επίσης αυτά τα ισχυρά αντιοξειδωτικά, τα οποία είναι γνωστό ότι προστατεύουν τα μάτια από τη φθορά του χρόνου και μπορούν να μειώσουν τον κίνδυνο εκφύλισης της ωχράς κηλίδας.</li>
      <li><strong>Καροτενοειδή:</strong> Εκτός του β-καροτενίου, περιέχει και άλλες πολυφαινόλες (όπως α-καροτένιο και κρυπτοξανθίνη) που λειτουργούν ως ισχυρά αντιοξειδωτικά, προστατεύοντας τα κύτταρα από τις βλάβες που προκαλούν οι ελεύθερες ρίζες.</li>
      <li><strong>Βιταμίνες C και E:</strong> Συμβάλλουν στην αντιοξειδωτική άμυνα του οργανισμού, μειώνοντας τη φλεγμονή και προστατεύοντας από χρόνιες παθήσεις, συμπεριλαμβανομένων ορισμένων μορφών καρκίνου.</li>
      <li><strong>Υψηλή περιεκτικότητα σε Βιταμίνη C:</strong> Η βιταμίνη C είναι απαραίτητη για την παραγωγή λευκών αιμοσφαιρίων, ενισχύοντας την άμυνα του οργανισμού ενάντια σε ιώσεις και λοιμώξεις.</li>
      <li><strong>Βιταμίνη A:</strong> Παίζει καθοριστικό ρόλο στη λειτουργία του ανοσοποιητικού συστήματος.</li>
      <li><strong>Κάλιο:</strong> Η κολοκύθα είναι καλή πηγή καλίου, το οποίο είναι ζωτικής σημασίας για τη ρύθμιση της αρτηριακής πίεσης, καθώς βοηθά στην εξισορρόπηση των επιπέδων νατρίου στο αίμα.</li>
      <li><strong>Φυτικές Ίνες:</strong> Οι ίνες συμβάλλουν στη μείωση των επιπέδων της κακής χοληστερόλης (LDL), προστατεύοντας έτσι την καρδιαγγειακή υγεία.</li>
      <li><strong>Χαμηλή σε Θερμίδες και Υψηλή σε Ίνες:</strong> Η κολοκύθα είναι ένα λαχανικό με πολύ χαμηλή περιεκτικότητα σε θερμίδες (περίπου 20-30 kcal ανά 100γρ).</li>
      <li><strong>Φυτικές Ίνες:</strong> Οι διαιτητικές ίνες προάγουν την ομαλή λειτουργία του εντέρου, προλαμβάνουν τη δυσκοιλιότητα και συμβάλλουν στον κορεσμό, βοηθώντας στον έλεγχο του βάρους.</li>
      <li><strong>Μαγνήσιο:</strong> Σημαντικό για την υγεία των οστών, τη μυϊκή λειτουργία και τον έλεγχο του σακχάρου.</li>
      <li><strong>Σίδηρος:</strong> Απαραίτητος για τη μεταφορά οξυγόνου στο αίμα.</li>
      <li><strong>Βιταμίνες του συμπλέγματος Β</strong> (όπως φυλλικό οξύ, νιασίνη): Συμβάλλουν στη μεταβολική λειτουργία και την παραγωγή ενέργειας.</li>
    </ul>

    <h4>Ξινόγαλο</h4>
    <p>Το ξινόγαλο είναι ένα γαλακτοκομικό προϊόν που έχει υποστεί ζύμωση και παράγεται παραδοσιακά από το υγρό που απομένει μετά την παρασκευή βουτύρου (παραδοσιακό ξινόγαλο) ή, πιο συχνά σήμερα, με την προσθήκη ειδικής οξυγαλακτικής καλλιέργειας στο παστεριωμένο γάλα (καλλιεργούμενο ξινόγαλο).</p>
    <ul>
      <li><strong>Πηγή προβιοτικών:</strong> περιέχει ζωντανές και ενεργές καλλιέργειες βακτηρίων (όπως <em>γαλακτοβάκιλλους</em> ή/και <em>Bifidus</em>), καθιστώντας το προβιοτικό προϊόν. Λόγω της υψηλής τους θερμιδικής και λιπαρής αξίας, συνιστάται η κατανάλωσή τους με μέτρο, με μια τυπική μερίδα να είναι περίπου <strong>30 γραμμάρια</strong> (περίπου 200 θερμίδες). Βοηθά στη διατήρηση της ισορροπίας της εντερικής μικροχλωρίδας, στη βελτίωση της πέψης, στην ανεκτικότητα στην λακτόζη.</li>
      <li><strong>Πρωτεΐνη:</strong> Είναι πηγή πρωτεΐνης υψηλής βιολογικής αξίας (περίπου $3-4$ γραμμάρια ανά $100$ ml), η οποία είναι απαραίτητη για την ανάπτυξη, τη μυϊκή αποκατάσταση και τον κορεσμό.</li>
      <li><strong>Ασβέστιο:</strong> Περιέχει υψηλή ποσότητα ασβεστίου, το οποίο είναι ζωτικής σημασίας για την <strong>υγεία των οστών</strong> και των δοντιών, καθώς και για τη μυϊκή και νευρική λειτουργία.</li>
      <li><strong>Φώσφορος:</strong> Ένα μέταλλο που συνεργάζεται με το ασβέστιο για τη διατήρηση της οστικής μάζας.</li>
      <li><strong>Βιταμίνη B12:</strong> Απαραίτητη για τη λειτουργία του νευρικού συστήματος και τον σχηματισμό ερυθρών αιμοσφαιρίων.</li>
      <li><strong>Βιταμίνες του συμπλέγματος Β</strong> (όπως ριβοφλαβίνη): Συμβάλλουν στην παραγωγή ενέργειας και τον μεταβολισμό.</li>
      <li><strong>Βιταμίνη A:</strong> Σημαντική για την όραση και το ανοσοποιητικό σύστημα.</li>
      <li>Οι ζωντανές καλλιέργειες και τα θρεπτικά συστατικά, όπως ο <strong>Ψευδάργυρος</strong> και οι <strong>Βιταμίνες A και B12</strong>, βοηθούν στην ενίσχυση του ανοσοποιητικού συστήματος.</li>
    </ul>

    <h3>Tip</h3>
    <p>Η κολοκύθα οφείλει το έντονο πορτοκαλί της χρώμα στο β-καροτένιο, το οποίο ο οργανισμός μετατρέπει σε Βιταμίνη Α (ρετινόλη) η οποία μας βοηθά:</p>
    <ul>
      <li>Στην όραση</li>
      <li>Το ανοσοποιητικό</li>
      <li>Την υγεία του δέρματος</li>
    </ul>
    <p>Μελέτες έχουν συσχετίσει την επαρκή πρόσληψη από β-καροτένιο με τη βελτιωμένη γνωστική λειτουργία.<br/>Μην πετάξετε τους σπόρους της! Αποτελούν πολύ καλή πηγή πρωτεΐνης, ψευδαργύρου, φωσφόρου και σιδήρου!</p>
      `,
        instagramPostUrl: "https://www.instagram.com/p/DQRMsCejEBZ/",
        instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/"
      },
      en: {
        title: "Pumpkin Cupcakes",
        contentHtml: `
    <section>
      <h3>Pumpkin Cupcakes</h3>

      <p><strong>Servings:</strong> 18 &nbsp; <strong>Yield:</strong> 18</p>
      <p>
        <strong>Total time:</strong> 60’, 
        <strong>Difficulty:</strong> Medium, 
        <strong>Calories per serving:</strong> 175 kcal, 
        <strong>Meal:</strong> Dessert (High protein)
      </p>
      <p><strong>Nutritional profile:</strong> High protein / No added sugar</p>
    </section>

    <h3>Ingredients for ~18 cupcakes</h3>
    <ul>
      <li>350 g pumpkin purée</li>
      <li>100 g maple syrup</li>
      <li>50 g olive oil</li>
      <li>150 g buttermilk</li>
      <li>2 eggs</li>
      <li>1/2 tsp salt</li>
      <li>300 g whole-wheat self-rising flour</li>
      <li>50 g protein powder</li>
      <li>50 g pecans, chopped</li>
      <li>1 tbsp cinnamon</li>
      <li>1/2 tsp nutmeg</li>
      <li>1/4 tsp ginger</li>
      <li>1 tsp baking soda</li>
      <li>2 tsp vanilla</li>
    </ul>

    <h3>Filling for 9 cupcakes (1/2 batch filling)</h3>
    <ul>
      <li>2 tbsp unsweetened peanut butter</li>
      <li>2 tsp maple syrup</li>
      <li>3 tbsp low-fat milk</li>
      <li>1 tbsp liquid vanilla</li>
      <li>Cinnamon</li>
    </ul>

    <h3>Coffee frosting</h3>
    <ul>
      <li>90 g light cream cheese</li>
      <li>50 g Greek yogurt 2%</li>
      <li>1 espresso shot (max 30 ml) or 1 tsp instant coffee dissolved in 30 ml hot water</li>
      <li>2–3 drops lemon juice</li>
      <li>3 tbsp maple syrup</li>
    </ul>

    <h3>Method</h3>
    <p>Dust with cinnamon.</p>
    <p>Bake 22–25 minutes with fan at 170°C.</p>

    <h3>Nutritional table</h3>
    <table>
      <thead>
        <tr>
          <th>Nutrients</th>
          <th>Per serving</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Weight (gross)</td><td>80 g</td></tr>
        <tr><td>Calories</td><td>175 kcal</td></tr>
        <tr><td>Carbohydrates</td><td>20 g</td></tr>
        <tr><td>Protein</td><td>7.1 g</td></tr>
        <tr><td>Fiber</td><td>3 g</td></tr>
        <tr><td>Fat</td><td>7.7 g</td></tr>
      </tbody>
    </table>

    <h3>Nutritional benefits of key ingredients</h3>

    <h4>Pumpkin</h4>
    <p>Pumpkin is a highly nutritious vegetable (botanically a fruit) rich in vitamins, minerals, and antioxidants.</p>
    <ul>
      <li><strong>Rich in beta-carotene:</strong> Its bright orange color comes from <strong>β-carotene</strong>, which the body converts to <strong>vitamin A</strong>. A portion can far exceed the RDA for vitamin A.</li>
      <li><strong>Lutein & zeaxanthin:</strong> Powerful antioxidants that help protect eyesight and may lower the risk of age-related macular degeneration.</li>
      <li><strong>Carotenoids:</strong> Beyond β-carotene, it contains α-carotene and cryptoxanthin—antioxidants that protect cells from free-radical damage.</li>
      <li><strong>Vitamins C & E:</strong> Support antioxidant defenses, reduce inflammation, and may protect against chronic disease.</li>
      <li><strong>High in vitamin C:</strong> Essential for white blood cell production and immune defense.</li>
      <li><strong>Vitamin A:</strong> Key for immune function.</li>
      <li><strong>Potassium:</strong> Helps regulate blood pressure by balancing sodium levels.</li>
      <li><strong>Dietary fiber:</strong> May lower LDL cholesterol and support heart health.</li>
      <li><strong>Low-calorie, high-fiber:</strong> About 20–30 kcal per 100 g.</li>
      <li><strong>Fiber:</strong> Promotes bowel regularity, prevents constipation, and supports satiety and weight control.</li>
      <li><strong>Magnesium:</strong> Important for bone health, muscle function, and glycemic control.</li>
      <li><strong>Iron:</strong> Required for oxygen transport.</li>
      <li><strong>B-complex vitamins</strong> (e.g., folate, niacin): Support metabolism and energy production.</li>
    </ul>

    <h4>Buttermilk</h4>
    <p>A fermented dairy product made traditionally from the liquid left after churning butter, or more commonly by culturing pasteurized milk.</p>
    <ul>
      <li><strong>Probiotics:</strong> Contains live and active cultures (e.g., <em>Lactobacillus</em>, <em>Bifidus</em>) that support gut microbiota balance, digestion, and lactose tolerance.</li>
      <li><strong>Protein:</strong> A source of high-quality protein (about 3–4 g per 100 ml) for growth, muscle recovery, and satiety.</li>
      <li><strong>Calcium:</strong> Vital for bone and dental health, as well as muscle and nerve function.</li>
      <li><strong>Phosphorus:</strong> Works with calcium to maintain bone mass.</li>
      <li><strong>Vitamin B12:</strong> Essential for the nervous system and red blood cell formation.</li>
      <li><strong>B-vitamins</strong> (e.g., riboflavin): Aid energy production and metabolism.</li>
      <li><strong>Vitamin A:</strong> Important for vision and immunity.</li>
      <li>Micronutrients like <strong>zinc</strong> plus <strong>vitamins A & B12</strong> help bolster immune function.</li>
    </ul>

    <h3>Tip</h3>
    <p>Pumpkin’s orange hue comes from β-carotene, which the body converts to vitamin A (retinol) that supports:</p>
    <ul>
      <li>Vision</li>
      <li>Immunity</li>
      <li>Skin health</li>
    </ul>
    <p>Adequate β-carotene intake has been linked with improved cognitive function.<br/>Don’t toss the seeds! They’re a great source of protein, zinc, phosphorus, and iron.</p>
      `,
        instagramPostUrl: "https://www.instagram.com/p/DQRMsCejEBZ/",
        instagramProfileUrl: "https://www.instagram.com/annalicious_healthybites/"
      },
    },
  },





  // Articles
  {
    slug: "pharma-plus-72",
    image: "/images/media/articles/3.png",
    category: "articles",
    M: {
      el: {
        title: "Το κλειδί της ευτυχίας",
        contentHtml: `
    <p>Στο καλοκαιρινό τεύχος του περιοδικού <em>Pharma Plus</em> (σελίδα 26), η στήλη μας είχε τίτλο «Το κλειδί της ευτυχίας».</p>
    <p>Μιλήσαμε για τη σημασία της έκθεσης στον ήλιο, που ενισχύει τη διάθεση και συμβάλλει στην παραγωγή βιταμίνης D.</p>
    <p>Αναφερθήκαμε στην επαφή με τη θάλασσα και πώς ηρεμεί το μυαλό, χαρίζοντας αίσθηση γαλήνης και χαλάρωσης.</p>
    <p>Τονίσαμε τη σημασία μιας διατροφής πλούσιας σε φρούτα, λαχανικά και ενυδάτωση για να φροντίσουμε τον οργανισμό μας.</p>
    <p>Δώσαμε ιδέες για υγιεινά σνακ και γεύματα στην παραλία, όπως φρούτα, ξηρούς καρπούς, σαλάτες ή μια τορτίγια με αβοκάντο και αυγό.</p>
    <p>Το καλοκαίρι είναι η ιδανική στιγμή για να ξεκινήσουμε την αυτοφροντίδα μας και να επενδύσουμε στην ευεξία μας.</p>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2024/07/PharmaPlusLink_72.pdf",
      },
      en: {
        title: "The Key to Happiness",
        contentHtml: `
    <p>In the summer issue of <em>Pharma Plus</em> (page 26), our column was titled “The Key to Happiness.”</p>
    <p>We discussed the importance of sunlight exposure, which boosts mood and supports vitamin D production.</p>
    <p>We highlighted the calming effect of the sea—how it soothes the mind and offers a sense of peace and relaxation.</p>
    <p>We emphasized a diet rich in fruits, vegetables, and proper hydration to take care of our bodies.</p>
    <p>We shared ideas for healthy beach snacks and meals, such as fruit, nuts, salads, or a tortilla with avocado and egg.</p>
    <p>Summer is the perfect time to begin self-care and invest in our well-being.</p>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2024/07/PharmaPlusLink_72.pdf",
      },
    },
  },

  {
    slug: "pharma-plus-73",
    image: "/images/media/articles/2.png",
    category: "articles",
    M: {
      el: {
        title: "5+1 λόγοι για να ξεκινήσουμε άσκηση τον Σεπτέμβριο",
        contentHtml: `
    <p>Στο φθινοπωρινό τεύχος του περιοδικού <em>Pharma Plus</em> (σελίδα 24) παρουσιάσαμε το άρθρο «5+1 λόγοι για να ξεκινήσουμε άσκηση τον Σεπτέμβριο».</p>
    <ul>
      <li><strong>Διαχείριση βάρους:</strong> η άσκηση βοηθά να επανέλθουμε μετά το καλοκαίρι.</li>
      <li><strong>Διάθεση &amp; στρες:</strong> ενδορφίνες, λιγότερο άγχος, καλύτερη ψυχολογία.</li>
      <li><strong>Αυτοπεποίθηση:</strong> νιώθουμε πιο δυνατοί/ες και ικανοί/ες στην καθημερινότητα.</li>
      <li><strong>Εγκέφαλος &amp; μνήμη:</strong> ενισχύεται η γνωστική λειτουργία σε όλες τις ηλικίες.</li>
      <li><strong>Ύπνος:</strong> βελτιώνεται η ποιότητα και η ρύθμιση του κύκλου ύπνου.</li>
      <li><strong>Νέο ξεκίνημα:</strong> ο Σεπτέμβριος είναι ιδανικός για fresh start με στόχο την ευεξία.</li>
    </ul>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2024/09/PharmaPlusLink_73-Final.pdf",
      },
      en: {
        title: "5+1 Reasons to Start Exercising in September",
        contentHtml: `
    <p>In the autumn issue of <em>Pharma Plus</em> (page 24) we presented the article “5+1 Reasons to Start Exercising in September.”</p>
    <ul>
      <li><strong>Weight management:</strong> exercise helps us get back on track after summer.</li>
      <li><strong>Mood &amp; stress:</strong> more endorphins, less anxiety, better overall mindset.</li>
      <li><strong>Self-confidence:</strong> feel stronger and more capable in daily life.</li>
      <li><strong>Brain &amp; memory:</strong> cognitive function is enhanced at all ages.</li>
      <li><strong>Sleep:</strong> improves sleep quality and circadian regulation.</li>
      <li><strong>Fresh start:</strong> September is ideal for a wellness-focused reset.</li>
    </ul>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2024/09/PharmaPlusLink_73-Final.pdf",
      },
    },
  },

  {
    slug: "pharma-plus-74",
    image: "/images/media/articles/1.png",
    category: "articles",
    M: {
      el: {
        title: "7 τρόποι για να διατηρήσουμε την ψυχική μας υγεία",
        contentHtml: `
    <p>Στο χριστουγεννιάτικο τεύχος του <em>Pharma Plus</em> (σελίδα 26) παρουσιάσαμε το άρθρο «7 τρόποι για να διατηρήσουμε την ψυχική μας υγεία».</p>
    <ol>
      <li><strong>Mindful Eating &amp; ευγνωμοσύνη</strong> απέναντι στην τροφή.</li>
      <li><strong>Αυτοφροντίδα</strong>: αφιερώνουμε ποιοτικό χρόνο στον εαυτό μας.</li>
      <li><strong>Σχέσεις</strong>: καλλιεργούμε επαφή με οικογένεια/φίλους για συναισθηματική ισορροπία.</li>
      <li><strong>Πράξεις προσφοράς</strong> (μοιραζόμαστε γλυκά/φαγητό με όσους έχουν ανάγκη).</li>
      <li><strong>Όρια</strong>: αποφυγή τοξικών σχέσεων, προστασία χρόνου &amp; ενέργειας.</li>
      <li><strong>Μη σύγκριση</strong>: δεν συγκρίνουμε τη ζωή μας με άλλων.</li>
      <li><strong>Εκτίμηση</strong> όσων κατακτήσαμε με κόπο και συνέπεια.</li>
    </ol>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2024/12/PharmaPlusLink_074_ALL_compressed.pdf",
      },
      en: {
        title: "7 Ways to Maintain Our Mental Health",
        contentHtml: `
    <p>In the Christmas issue of <em>Pharma Plus</em> (page 26) we presented the article “7 Ways to Maintain Our Mental Health.”</p>
    <ol>
      <li><strong>Mindful eating &amp; gratitude</strong> toward food.</li>
      <li><strong>Self-care:</strong> dedicate quality time to ourselves.</li>
      <li><strong>Relationships:</strong> nurture contact with family/friends for emotional balance.</li>
      <li><strong>Acts of giving:</strong> share treats/food with those in need.</li>
      <li><strong>Boundaries:</strong> avoid toxic relationships; protect time &amp; energy.</li>
      <li><strong>No comparison:</strong> avoid comparing our life to others’.</li>
      <li><strong>Appreciation:</strong> acknowledge what we’ve achieved through effort and consistency.</li>
    </ol>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2024/12/PharmaPlusLink_074_ALL_compressed.pdf",
      },
    },
  },

  {
    slug: "pharma-plus-75",
    image: "/images/media/articles/5.png",
    category: "articles",
    M: {
      el: {
        title: "Έκρηξη ενέργειας vs κόπωση",
        contentHtml: `
    <p>Στο ανοιξιάτικο τεύχος του <em>Pharma Plus</em> (σελίδα 26) παρουσιάσαμε το άρθρο «Έκρηξη ενέργειας vs κόπωση».</p>
    <p>Η άνοιξη είναι περίοδος ανανέωσης: περισσότερος ήλιος, μεγαλύτερες ημέρες και φύση που γεμίζει ενέργεια &amp; θετική διάθεση.</p>
    <p>Αναδείξαμε τον ρόλο της <strong>βιταμίνης D</strong> στη διάθεση και τη συνολική υγεία, καθώς και την αξία της ιδανικής θερμοκρασίας για <strong>άσκηση σε εξωτερικούς χώρους</strong>.</p>
    <p>Συζητήσαμε για τις <strong>αλλεργίες</strong> της εποχής και πρακτικούς τρόπους ανακούφισης.</p>
    <p>Η <strong>διατροφή με χρώματα</strong> (φρούτα, λαχανικά, προβιοτικά &amp; πρεβιοτικά) στηρίζει την ενέργεια και την υγεία του εντέρου.</p>
    <h4>Ανοιξιάτικες ιδέες δραστηριοτήτων</h4>
    <ul>
      <li>Πεζοπορία &amp; ποδηλασία</li>
      <li>Πικνίκ &amp; κηπουρική</li>
      <li>Ασκήσεις ενδυνάμωσης</li>
      <li>Κολύμβηση</li>
    </ul>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2025/03/PharmaPlusLink_075_all.pdf",
      },
      en: {
        title: "Energy Boost vs Fatigue",
        contentHtml: `
    <p>In the spring issue of <em>Pharma Plus</em> (page 26), we presented the article “Energy Boost vs Fatigue.”</p>
    <p>Spring is a time of renewal — more sunlight, longer days, and nature bursting with energy and positivity.</p>
    <p>We highlighted the role of <strong>vitamin D</strong> in mood and overall health, as well as the benefits of exercising outdoors in mild temperatures.</p>
    <p>We discussed <strong>seasonal allergies</strong> and practical ways to find relief.</p>
    <p>A <strong>colorful diet</strong> rich in fruits, vegetables, probiotics, and prebiotics helps sustain energy and gut health.</p>
    <h4>Springtime activity ideas</h4>
    <ul>
      <li>Hiking &amp; cycling</li>
      <li>Picnics &amp; gardening</li>
      <li>Strength training</li>
      <li>Swimming</li>
    </ul>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2025/03/PharmaPlusLink_075_all.pdf",
      },
    },
  },

  {
    slug: "eyexia-me-ton-tetrapodo-filo-mou",
    image: "/images/media/articles/6.jpg",
    category: "articles",
    M: {
      el: {
        title: "Κατακτώντας την ευεξία μαζί με τον τετράποδο φίλο μου",
        contentHtml: `
    <p>Όταν μου πρότειναν να γράψω σε περιοδικό για τα ζώα, σκέφτηκα πόσο τυχερή είμαι που έχω κι εγώ ένα τέτοιο πλάσμα δίπλα μου — και πόσο σημαντική είναι αυτή η εμπειρία ζωής. Συνήθως μιλάμε για το τι κάνουμε εμείς για το ζώο: φροντίδα, τροφή, κτηνίατρος. Σπάνια όμως ρωτάμε: <strong>τι κάνει εκείνο για εμάς;</strong></p>

    <p>Ας μιλήσουμε λοιπόν για το πώς βιώνουμε την Ευεξία μαζί με τον τετράποδο φίλο μας.</p>

    <h4>Τι είναι «Ευεξία»;</h4>
    <p>Η λέξη προέρχεται από το «ευ» και το «έξις» — δηλαδή <em>καλή συνήθεια</em>. Στην πράξη είναι η ισορροπία σώματος, ψυχής και πνεύματος μέσα από μικρές, σταθερές συνήθειες.</p>

    <h4>Ψυχική ευεξία: ηρεμία και σύνδεση</h4>
    <p>Η γαλήνη που μεταφέρουν τα ζώα είναι πολύτιμη. Σε δύσκολες στιγμές «διαβάζουν» τη διάθεσή μας και στέκονται δίπλα μας αθόρυβα. Δεν είναι τυχαίο ότι η παρουσία τους βοηθά παιδιά και ενήλικες που δοκιμάζονται — η <strong>μείωση του στρες</strong> είναι εμφανής και βιωματική.</p>

    <h4>Σωματική υγεία: κίνηση και ρουτίνα</h4>
    <p>Μια καθημερινή βόλτα με τον σκύλο είναι ίσως το πιο αγχολυτικό κομμάτι της ημέρας. Η κίνηση στο πάρκο ή στη γειτονιά, η επαφή με τη φύση και τον καθαρό αέρα στηρίζουν την <strong>καλή κυκλοφορία</strong>, τη <strong>διαχείριση βάρους</strong> και τη <strong>λειτουργία του εντέρου</strong>. Στην περίοδο του COVID πολλοί από εμάς κρατήσαμε ρυθμό χάρη σ’ αυτή τη ρουτίνα.</p>

    <h4>Πνευματική διάσταση: νόημα και ευθύνη</h4>
    <p>Η φροντίδα ενός ζώου δίνει <strong>αίσθηση σκοπού</strong>. Μας βγάζει από τον αυτόματο πιλότο, καλλιεργεί ευθύνη και συνέπεια. Στα παιδιά ενισχύει δεξιότητες όπως η αυτοεκτίμηση και η αυτοπεποίθηση, ενώ στους ενήλικες θυμίζει την αξία της άνευ όρων αποδοχής.</p>

    <h4>Κλείνοντας</h4>
    <p>Όπου κι αν αναζητούμε την ευεξία —στις καθημερινές στιγμές, στις παρέες, στη φύση— η <strong>σχέση με τα ζώα</strong> μένει μοναδικό δώρο. Είναι συντροφιά, κίνηση, γαλήνη και νόημα μαζί. Σκεφτείτε το: ένα δώρο άνευ όρων.</p>
  `,
        externalUrl: null,
      },
      en: {
        title: "Finding Well-being with My Four-Legged Friend",
        contentHtml: `
    <p>When I was invited to write for a pet magazine, I felt grateful — and realized how meaningful this experience is. We often talk about what we do for our pets: care, food, vet visits. But how often do we ask: <strong>what do they do for us?</strong></p>

    <p>Let’s explore how we experience wellness together with our four-legged companions.</p>

    <h4>What is “Well-being”?</h4>
    <p>The word derives from “eu” and “hexis,” meaning <em>good habit</em>. In practice, it’s the balance of body, mind, and spirit through small, consistent actions.</p>

    <h4>Mental well-being: calm and connection</h4>
    <p>The peace animals bring is invaluable. In hard times, they “read” our mood and stand silently beside us. It’s no coincidence that their presence helps both children and adults — the <strong>reduction of stress</strong> is real and deeply felt.</p>

    <h4>Physical health: movement and routine</h4>
    <p>A daily walk with a dog is perhaps the most stress-relieving part of the day. Moving outdoors, breathing fresh air, and connecting with nature support <strong>circulation</strong>, <strong>weight management</strong>, and <strong>gut function</strong>. During COVID, many of us maintained our rhythm thanks to this routine.</p>

    <h4>Spiritual aspect: purpose and responsibility</h4>
    <p>Caring for an animal gives a strong <strong>sense of purpose</strong>. It takes us out of autopilot, fostering responsibility and consistency. For children, it builds self-esteem and confidence; for adults, it reminds us of unconditional acceptance.</p>

    <h4>In conclusion</h4>
    <p>Wherever we seek well-being — in daily life, friendships, or nature — our <strong>bond with animals</strong> remains a unique gift. Companionship, movement, calm, and meaning — all in one. Truly, a gift without conditions.</p>
  `,
        externalUrl: null,
      },
    },
  },

  {
    slug: "ora-gia-treximo-me-to-katoikidio-mas",
    image: "/images/media/articles/7.png",
    category: "articles",
    M: {
      el: {
        title: "Ώρα για τρέξιμο με την καλύτερη παρέα: το κατοικίδιό μας",
        contentHtml: `
    <p>Πολλοί διαλέγουμε τζόκινγκ ή γρήγορο περπάτημα για να «καθαρίσει» το μυαλό. Αν όμως το κίνητρο λείπει, η καλύτερη παρέα είναι συχνά ο σκύλος μας. Η δική του ρουτίνα (2–3 βόλτες/ημέρα) τον ηρεμεί και ρυθμίζει το «ρολόι» του — και, σχεδόν μαγικά, βοηθά κι εμάς να αποκτήσουμε σταθερό ρυθμό.</p>

    <h4>Γιατί να τρέξεις μαζί του</h4>
    <ul>
      <li><strong>Παρέα &amp; κίνητρο:</strong> βγαίνεις έξω ακόμα και στο κρύο.</li>
      <li><strong>Εκτόνωση σκύλου:</strong> φυσική κίνηση, χαρά και λιγότερη ανησυχία.</li>
      <li><strong>Οφέλη για εσένα:</strong> καλύτερη φυσική κατάσταση, διαχείριση βάρους, μειωμένο στρες.</li>
      <li><strong>Δεσμός:</strong> οι κοινές βόλτες δυναμώνουν τη σχέση σας.</li>
    </ul>

    <h4>Πριν ξεκινήσεις</h4>
    <ul>
      <li><strong>Έλεγχος υγείας:</strong> μια επίσκεψη στον κτηνίατρο. Δεν είναι όλα τα σκυλιά κατάλληλα (πολύ μικρές/μεγάλες ράτσες, υπέρβαρα, ειδικά προβλήματα).</li>
      <li><strong>Σταδιακά βήματα:</strong> ξεκίνα με μικρές αποστάσεις και αύξησε προοδευτικά.</li>
      <li><strong>Καιρός &amp; θερμοκρασία:</strong> προτίμησε ώρες δροσιάς και πρόσεχε την υπερθέρμανση.</li>
    </ul>

    <h4>Εξοπλισμός που βοηθά</h4>
    <ul>
      <li><strong>Άνετο σαμαράκι</strong> και <strong>σταθερό λουρί</strong> για ασφάλεια.</li>
      <li><strong>Νερό</strong> για στάσεις, σακουλάκια, και φακός για βραδινές βόλτες.</li>
    </ul>

    <h4>Βασική εκπαίδευση</h4>
    <p>Χρήσιμες εντολές: «κάτσε», «έλα», «μείνε» και ειδικά «δίπλα», ώστε να μειωθούν οι περισπασμοί (άλλα ζώα, περαστικοί) και να κυλάει το τρέξιμο χωρίς διακοπές.</p>

    <h4>Μικρά tips ασφάλειας</h4>
    <ul>
      <li>Διάλεξε <strong>μαλακές επιφάνειες</strong> όπου γίνεται (χώμα/πάρκο).</li>
      <li>Παρατήρησε <strong>σημάδια κόπωσης</strong> (έντονο λαχάνιασμα, καθυστέρηση ρυθμού) και κάνε παύσεις.</li>
      <li>Απόφευγε υψηλές θερμοκρασίες και καυτές επιφάνειες.</li>
    </ul>

    <p>Όταν η ρουτίνα του σκύλου γίνει και δική σου, το τρέξιμο γίνεται χαρά, όχι «υποχρέωση» — για εσένα και για εκείνον.</p>

    <p><em>*Από το ένθετο My Pet που κυκλοφορεί με τον Ελεύθερο Τύπο της Κυριακής*</em></p>
  `,
        externalUrl: "https://eleftherostypos.gr/my-pet/ora-gia-treximo-me-tin-kalyteri-parea-to-katoikidio-mas",
      },
      en: {
        title: "Time to Run with the Best Companion: Our Pet",
        contentHtml: `
    <p>Many of us choose jogging or brisk walking to clear our minds. But when motivation fades, the best partner is often our dog. Their daily routine (2–3 walks per day) keeps them calm and regulates their “clock” — and, almost magically, helps us maintain our own rhythm.</p>

    <h4>Why run together</h4>
    <ul>
      <li><strong>Company &amp; motivation:</strong> you go out even on cold days.</li>
      <li><strong>Dog’s benefit:</strong> physical activity, joy, and less anxiety.</li>
      <li><strong>Your benefit:</strong> better fitness, weight management, reduced stress.</li>
      <li><strong>Bonding:</strong> shared walks strengthen your relationship.</li>
    </ul>

    <h4>Before you start</h4>
    <ul>
      <li><strong>Health check:</strong> a quick vet visit — not all dogs are suitable (very small/large breeds, overweight, or with special conditions).</li>
      <li><strong>Gradual progress:</strong> start with short distances and increase gradually.</li>
      <li><strong>Weather &amp; temperature:</strong> prefer cooler hours and avoid overheating.</li>
    </ul>

    <h4>Helpful gear</h4>
    <ul>
      <li><strong>Comfortable harness</strong> and <strong>secure leash</strong> for safety.</li>
      <li><strong>Water</strong> for breaks, waste bags, and a flashlight for evening runs.</li>
    </ul>

    <h4>Basic training</h4>
    <p>Useful commands: “sit,” “come,” “stay,” and especially “heel,” to reduce distractions (other animals, passersby) and ensure smooth running sessions.</p>

    <h4>Safety tips</h4>
    <ul>
      <li>Choose <strong>soft surfaces</strong> (dirt paths, parks) whenever possible.</li>
      <li>Watch for <strong>fatigue signs</strong> (heavy panting, slowing pace) and take breaks.</li>
      <li>Avoid high heat and hot pavements.</li>
    </ul>

    <p>When your dog’s routine becomes your own, running turns into joy, not an obligation — for both of you.</p>

    <p><em>*From the My Pet supplement published with Eleftheros Typos Sunday edition*</em></p>
  `,
        externalUrl: "https://eleftherostypos.gr/my-pet/ora-gia-treximo-me-tin-kalyteri-parea-to-katoikidio-mas",
      },
    },
  },

  {
    slug: "pos-ta-katoikidia-voithoun-sto-agchos-kai-pos-to-pername",
    image: "/images/media/articles/8.jpg",
    category: "articles",
    M: {
      el: {
        title: "Πώς τα κατοικίδια μάς βοηθούν στο άγχος — και πώς τους το «περνάμε»",
        contentHtml: `
    <p>Στο κομμωτήριο άκουσα έναν κτηνίατρο να διηγείται για έναν σκύλο με εμετούς. Ρώτησε την ιδιοκτήτρια αν έχει «στομάχι» τελευταία· είχε. Ο σκύλος είχε συγχρονιστεί τόσο μαζί της που εμφάνιζε παρόμοια συμπτώματα. Αυτή η ιστορία άνοιξε μια ωραία συζήτηση: <strong>πώς αλληλεπιδρούν το δικό μας άγχος και η δική τους ηρεμία;</strong></p>

    <h4>Τι μάς προσφέρει η επαφή με τα ζώα</h4>
    <ul>
      <li><strong>Μείωση στρες:</strong> ηρεμία, αίσθημα ασφάλειας και αποδοχής.</li>
      <li><strong>Ορμονικές αλλαγές:</strong> ↑ ωκυτοκίνη (αγάπη/αγκαλιά), ↑ ενδορφίνες (ευφορία), πιο ισορροπημένη σεροτονίνη· καλύτερη ρύθμιση της κορτιζόλης.</li>
      <li><strong>Περισσότερη κίνηση &amp; κοινωνικότητα:</strong> βόλτες, επαφή με φύση, ευκολότερη σύνδεση με άλλους ανθρώπους.</li>
      <li><strong>Σκοπός &amp; ρουτίνα:</strong> η φροντίδα ενισχύει ευθύνη και αυτοπεποίθηση.</li>
    </ul>

    <h4>Όταν το στρες «περνάει» στο κατοικίδιό μας</h4>
    <p>Το δικό μας άγχος μπορεί να αυξήσει τη <strong>κορτιζόλη</strong> και στο ζώο. Αν αυτό γίνει χρόνιο, επηρεάζεται αρνητικά η υγεία του (π.χ. βάρος, μεταβολισμός, άμυνα οργανισμού) — όπως συμβαίνει και σε εμάς.</p>

    <h4>Πώς μας «διαβάζουν»</h4>
    <ul>
      <li><strong>Γλώσσα σώματος &amp; φωνή:</strong> εκφράσεις, τόνος, νευρικές/ήρεμες κινήσεις στέλνουν ξεκάθαρα σήματα.</li>
      <li><strong>Όσφρηση:</strong> «βλέπουν» τον κόσμο με τη μύτη· αντιλαμβάνονται χημικές αλλαγές που σχετίζονται με το στρες.</li>
      <li><strong>Εγγύτητα:</strong> έρχονται και ξαπλώνουν δίπλα μας, ακουμπούν κεφάλι/πατούσα — ένας φυσικός, παρηγορητικός τρόπος σύνδεσης.</li>
    </ul>

    <h4>Μικρά βήματα για περισσότερη ηρεμία και για τους δύο</h4>
    <ul>
      <li><strong>Σταθερή ρουτίνα:</strong> ώρες βόλτας, φαγητού και ξεκούρασης.</li>
      <li><strong>Ήρεμη επικοινωνία:</strong> σταθερός τόνος, σαφή σήματα· αποφεύγουμε ένταση/φωνές.</li>
      <li><strong>Εμπλουτισμός περιβάλλοντος:</strong> παιχνίδια μύτης/σκέψης, ήπιες ασκήσεις.</li>
      <li><strong>Κίνηση στη φύση:</strong> τακτικές βόλτες σε πιο ήσυχα σημεία.</li>
      <li><strong>Φροντίδα εαυτού:</strong> μικρές αναπνοές, παύσεις, συνειδητότητα — το δικό μας «calm» γίνεται και δικό τους.</li>
      <li><strong>Έλεγχος ειδικού:</strong> κτηνίατρος/εκπαιδευτής όταν το στρες επιμένει ή αλλάζει η συμπεριφορά.</li>
    </ul>

    <p>Η σχέση ανθρώπου–ζώου δεν είναι μονόπλευρη· είναι αμοιβαία και ζωντανή. Όταν εμείς γινόμαστε πιο ήρεμοι και παρόντες, <strong>το νιώθουν</strong> — και μας το επιστρέφουν άνευ όρων.</p>
  `,
        externalUrl: null,
      },
      en: {
        title: "How Pets Help with Our Stress — and How They “Catch” It from Us",
        contentHtml: `
    <p>At the hairdresser’s I overheard a vet talking about a dog with vomiting. He asked the owner if she had stomach issues lately; she did. The dog had synced so closely with her that it showed similar symptoms. This sparked a question: <strong>how do our stress and their calm interact?</strong></p>

    <h4>What contact with animals offers us</h4>
    <ul>
      <li><strong>Stress reduction:</strong> calm, a sense of safety and acceptance.</li>
      <li><strong>Hormonal shifts:</strong> ↑ oxytocin (bonding), ↑ endorphins (euphoria), more balanced serotonin; better cortisol regulation.</li>
      <li><strong>More movement &amp; socializing:</strong> walks, nature time, easier connection with people.</li>
      <li><strong>Purpose &amp; routine:</strong> caregiving builds responsibility and confidence.</li>
    </ul>

    <h4>When our stress “spreads” to our pet</h4>
    <p>Our own stress can raise <strong>cortisol</strong> in animals too. Chronically, this can harm their health (weight, metabolism, immunity) — just like in us.</p>

    <h4>How they “read” us</h4>
    <ul>
      <li><strong>Body language &amp; voice:</strong> expressions, tone, nervous/calm movements send clear signals.</li>
      <li><strong>Smell:</strong> they “see” with their nose and sense stress-related chemical changes.</li>
      <li><strong>Closeness:</strong> lying beside us, resting head/paw — a natural, soothing bond.</li>
    </ul>

    <h4>Small steps for more calm — for both</h4>
    <ul>
      <li><strong>Consistent routine:</strong> set times for walks, meals, rest.</li>
      <li><strong>Calm communication:</strong> steady tone, clear signals; avoid tension/shouting.</li>
      <li><strong>Enrichment:</strong> scent/brain games, gentle exercises.</li>
      <li><strong>Nature time:</strong> regular walks in quieter spots.</li>
      <li><strong>Self-care:</strong> breaths, pauses, mindfulness — our calm becomes theirs.</li>
      <li><strong>Professional check:</strong> vet/trainer if stress persists or behavior changes.</li>
    </ul>

    <p>The human–animal bond is mutual and alive. As we become calmer and more present, <strong>they feel it</strong> — and return it unconditionally.</p>
  `,
        externalUrl: null,
      },
    },
  },

  {
    slug: "pharma-plus-77",
    image: "/images/media/articles/8.png",
    category: "articles",
    M: {
      el: {
        title: "Ορμονικές αλλαγές που επηρεάζουν το σώμα",
        contentHtml: `
    <p>Στο φθινοπωρινό τεύχος του περιοδικού <em>Pharma Plus</em> (σελίδα 24), η στήλη μας φιλοξένησε το άρθρο «Ορμονικές αλλαγές που επηρεάζουν το σώμα».</p>
    <p>Αναλύσαμε πώς η μετάβαση από το καλοκαίρι στο φθινόπωρο επηρεάζει τον κιρκάδιο ρυθμό και βασικές ορμόνες.</p>
    <p>Συγκεκριμένα, αναφερθήκαμε στη μελατονίνη, που ρυθμίζει τον ύπνο και δρα ως αντιοξειδωτικό· στην κορτιζόλη, την ορμόνη του στρες· στη σεροτονίνη, που συνδέεται με την ηλιοφάνεια και τη διάθεση· καθώς και στις μεταβολές οιστρογόνων και τεστοστερόνης, που επηρεάζουν γονιμότητα και ευεξία.</p>
    <p>Το μήνυμά μας ήταν ότι το σώμα μας έχει τον δικό του τρόπο να προσαρμόζεται στις εποχικές αλλαγές, αρκεί να το φροντίζουμε.</p>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2025/09/PharmaPlusLink_077_low.pdf",
      },
      en: {
        title: "Hormonal Changes that Affect the Body",
        contentHtml: `
    <p>In the autumn issue of <em>Pharma Plus</em> (page 24), our column featured “Hormonal changes that affect the body.”</p>
    <p>We explored how the shift from summer to autumn influences the circadian rhythm and key hormones.</p>
    <p>We discussed melatonin (sleep regulation, antioxidant role), cortisol (stress), serotonin (linked to sunlight and mood), and seasonal changes in estrogen and testosterone affecting fertility and well-being.</p>
    <p>Our message: the body adapts to seasonal change — as long as we take care of it.</p>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2025/09/PharmaPlusLink_077_low.pdf",
      },
    },
  },

  {
    slug: "pharma-plus-77-gym-september",
    image: "/images/media/articles/9.png",
    category: "articles",
    M: {
      el: {
        title: "Σεπτέμβριος σημαίνει ... επιστροφή στο γυμναστήριο!",
        contentHtml: `
    <p>Στο φθινοπωρινό τεύχος του περιοδικού <em>Pharma Plus</em> (σελίδα 28), η στήλη μας παρουσίασε το άρθρο «Σεπτέμβριος σημαίνει ... επιστροφή στο γυμναστήριο!».</p>
    <p>Μιλήσαμε για το πώς ο Σεπτέμβρης, παραδοσιακά συνδεδεμένος με νέες αρχές, είναι η κατάλληλη στιγμή για να οργανώσουμε το πρόγραμμά μας και να εντάξουμε ξανά την άσκηση στην καθημερινότητα.</p>
    <p>Τονίσαμε ότι οι στόχοι πρέπει να είναι ρεαλιστικοί, επιλέγοντας μορφές άσκησης που μας ευχαριστούν και ξεκινώντας σταδιακά, ιδανικά με καθοδήγηση, ώστε να αποφύγουμε τραυματισμούς.</p>
    <p>Αναφερθήκαμε επίσης στη σημασία της διατροφής, προτείνοντας τη μεσογειακή διατροφή, τα όσπρια, την πρωτεΐνη και τους σωστούς συνδυασμούς πριν και μετά την προπόνηση για καλύτερη απόδοση και αποκατάσταση.</p>
    <p>Τέλος, υπογραμμίσαμε ότι η κοινοποίηση του προγράμματός μας στην οικογένεια και η υποστήριξη από φίλους ή σύντροφο μπορεί να μας βοηθήσει να παραμείνουμε συνεπείς. Έτσι, ο Σεπτέμβρης γίνεται η ιδανική αφετηρία για νέα επίπεδα ευεξίας.</p>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2025/09/PharmaPlusLink_077_low.pdf",
      },
      en: {
        title: "September Means… Back to the Gym!",
        contentHtml: `
    <p>In the autumn issue of <em>Pharma Plus</em> (page 28), we presented “September means… back to the gym!”</p>
    <p>September is traditionally linked to fresh starts — the perfect time to plan and reintroduce exercise into daily life.</p>
    <p>We emphasized realistic goals, choosing enjoyable activities, and a gradual restart (ideally with guidance) to avoid injuries.</p>
    <p>Nutrition matters too: Mediterranean-style eating, legumes, adequate protein, and smart pre/post-workout combinations for performance and recovery.</p>
    <p>Finally, sharing your plan with family and leaning on support from friends/partner helps with consistency. September becomes the ideal launchpad for well-being.</p>
  `,
        externalUrl: "https://pharmaplus.gr/wp-content/uploads/2025/09/PharmaPlusLink_077_low.pdf",
      },
    },
  },

  {
    slug: "eleftheros-typos-superfoods",
    image: "/images/media/articles/10.png",
    category: "articles",
    M: {
      el: {
        title: "Superfoods: Είναι πραγματικά «σούπερ» ή ένας ακριβός μύθος;",
        contentHtml: `
    <p>Στον <em>Ελεύθερο Τύπο</em>, η Τόνια Καπαρελιώτη υπογράφει το άρθρο <strong>«Superfoods: Είναι πραγματικά “σούπερ” ή ένας ακριβός μύθος;»</strong>.</p>
    <p>Το άρθρο εξετάζει τον μύθο γύρω από τις λεγόμενες υπερτροφές — όπως τα goji berries, η σπιρουλίνα και οι σπόροι chia — και εξηγεί γιατί, παρά τη διατροφική τους αξία, δεν μπορούν να αντικαταστήσουν μια ισορροπημένη διατροφή.</p>
    <p>Τονίζει, παράλληλα, ότι πολλά ελληνικά τρόφιμα, όπως το σπανάκι, τα καρύδια, τα αμύγδαλα και το ελαιόλαδο, προσφέρουν εξίσου σημαντικά οφέλη για την υγεία, χωρίς να επιβαρύνουν οικονομικά.</p>
    <p>Το συμπέρασμα; Δεν υπάρχει “μαγική τροφή” — η πραγματική δύναμη βρίσκεται στη συνέπεια μιας μεσογειακής διατροφής, πλούσιας σε φρούτα, λαχανικά και καλά λιπαρά.</p>
  `,
        externalUrl: "https://eleftherostypos.gr/diaita-metavolismos/superfoods-einai-pragmatika-souper-i-enas-akrivos-mythos",
      },
      en: {
        title: "Superfoods: Truly “super” or just an expensive myth?",
        contentHtml: `
    <p>In <em>Eleftheros Typos</em>, Tonia Kaparelioti explores whether so-called superfoods—goji berries, spirulina, chia—live up to the hype.</p>
    <p>The piece argues that while nutrient-dense, they cannot replace a balanced diet.</p>
    <p>It highlights affordable Greek staples—spinach, walnuts, almonds, olive oil—as equally powerful choices.</p>
    <p>Bottom line: there’s no “magic food”; lasting health comes from a consistent Mediterranean pattern rich in plants and good fats.</p>
  `,
        externalUrl: "https://eleftherostypos.gr/diaita-metavolismos/superfoods-einai-pragmatika-souper-i-enas-akrivos-mythos",
      },
    },
  },

  {
    slug: "eleftheros-typos-sleep-mistakes",
    image: "/images/media/articles/11.png",
    category: "articles",
    M: {
      el: {
        title: "4 λάθη που σαμποτάρουν τον ύπνο σας",
        contentHtml: `
    <p>Στον <em>Ελεύθερο Τύπο</em>, παρουσιάζεται το άρθρο <strong>«4 λάθη που σαμποτάρουν τον ύπνο σας»</strong>.</p>
    <p>Το άρθρο αναλύει τις πιο συχνές διατροφικές συνήθειες που επηρεάζουν αρνητικά την ποιότητα του ύπνου — από τον απογευματινό καφέ μέχρι το βραδινό ποτό και τη ζάχαρη πριν τον ύπνο.</p>
    <p>Εξηγεί ότι η καφεΐνη παραμένει ενεργή στον οργανισμό για ώρες, το αλκοόλ διαταράσσει τον ύπνο REM, ενώ η ζάχαρη προκαλεί απότομες αυξομειώσεις του σακχάρου που επηρεάζουν τον φυσικό κύκλο ξεκούρασης.</p>
    <p>Επιπλέον, τονίζεται η σημασία του περιορισμού των υγρών πριν τον ύπνο, ώστε να αποφευχθεί η διακοπή του ύπνου λόγω συχνών επισκέψεων στην τουαλέτα.</p>
    <p>Συνολικά, το άρθρο μας υπενθυμίζει ότι η προετοιμασία για έναν καλό ύπνο ξεκινά πολύ πριν πέσουμε στο κρεβάτι — με σωστές διατροφικές επιλογές και συνέπεια στις καθημερινές μας συνήθειες.</p>
  `,
        externalUrl: "https://eleftherostypos.gr/diaita-metavolismos/4-lathi-pou-sabotaroun-ton-ypno-sas",
      },
      en: {
        title: "4 common mistakes that sabotage your sleep",
        contentHtml: `
    <p>Published in <em>Eleftheros Typos</em>, this article outlines diet habits that harm sleep quality—late caffeine, evening alcohol, and sugary snacks.</p>
    <p>Caffeine lingers for hours, alcohol disrupts REM, and sugar swings disturb the sleep cycle.</p>
    <p>It also advises limiting fluids before bed to avoid awakenings.</p>
    <p>Takeaway: good sleep hygiene starts long before bedtime with steady, smart nutrition habits.</p>
  `,
        externalUrl: "https://eleftherostypos.gr/diaita-metavolismos/4-lathi-pou-sabotaroun-ton-ypno-sas",
      },
    },
  },

  {
    slug: "nero",
    image: "/images/media/articles/12.jpg",
    category: "articles",
    M: {
      el: {
        title: "Νερό",
        contentHtml: `
    <p>Αναρωτιόμουν αν θα έπρεπε να μας ονομάζουν <strong>«ψάρια της στεριάς»</strong> μιας και ζούμε στην πραγματικότητα σε ένα «υδάτινο περιβάλλον». Ίσως έχετε ακούσει ότι το σώμα μας αποτελείται από <strong>60%-70% νερό</strong>! Ναι, όσο και αν ακούγεται πολύ, δεν παύει το νερό να είναι ζωτικής σημασίας για τον οργανισμό, αν και αρκετός κόσμος δεν το έχει σε προτεραιότητα στην καθημερινότητά του.</p>

    <p>Αλλά τελικά, γιατί όλοι μας λένε να πίνουμε νερό; Και πόσο τελικά νερό πρέπει να πίνουμε;</p>

    <ul>
      <li>Αρχικά το νερό κάνει <strong>Θερμορύθμιση</strong>, δηλαδή βοηθά στη διατήρηση της σταθερής θερμοκρασίας του σώματος μέσω της εφίδρωσης.</li>
      <li>Είναι υπεύθυνο να μεταφέρει τις βιταμίνες, τα μέταλλα και το οξυγόνο στα κύτταρα.</li>
      <li>Συμβάλλει στην <strong>απομάκρυνση των άχρηστων ουσιών</strong> από τους νεφρούς και το ήπαρ.</li>
      <li>Έχει σημαντική συμβολή στη <strong>λίπανση των αρθρώσεων</strong>, προστατεύοντας τις αρθρώσεις και τους χόνδρους.</li>
      <li>Και τέλος, συμβάλει στην <strong>πεπτική υγεία</strong>, διευκολύνοντας την πέψη και προλαμβάνοντας τη δυσκοιλιότητα.</li>
    </ul>

    <p>Και αν νομίζετε ότι το νερό είναι απλά H₂O, πλανιέστε πλάνην οικτρά! Το νερό περιέχει μια ποικιλία από <strong>ιχνοστοιχεία και μέταλλα</strong> που είναι απαραίτητα για την υγεία μας, με τα πιο σημαντικά:</p>

    <ul>
      <li><strong>Ασβέστιο (Ca):</strong> Συμβάλλει στην υγεία των οστών και των δοντιών.</li>
      <li><strong>Μαγνήσιο (Mg):</strong> Κρίσιμο για τη λειτουργία των μυών και του νευρικού συστήματος.</li>
      <li><strong>Νάτριο (Na)</strong> και <strong>Κάλιο (K):</strong> Σημαντικά για τη ρύθμιση της ισορροπίας των υγρών του σώματος και τη λειτουργία των νεύρων.</li>
    </ul>

    <p>Αν τώρα πάλι, κάποιοι από εσάς αναγνωρίζετε κάποια νερά ότι δεν είναι τόσο εύπεπτα, ίσως δεν είναι η ιδέα σας. Ένα πόσιμο νερό, για να είναι εύπεπτο, θα πρέπει να έχει:</p>

    <ul>
      <li>Μέτρια σκληρότητα</li>
      <li>pH μεταξύ <strong>6,5 και 8,5</strong></li>
      <li>Χαμηλά επίπεδα χλωρίου</li>
    </ul>

    <h4>Πόσο νερό πρέπει να πίνουμε;</h4>
    <ul>
      <li><strong>Παιδιά 2–5 ετών:</strong> Περίπου 4–5 ποτήρια υγρών την ημέρα.</li>
      <li><strong>Παιδιά 6–12 ετών:</strong> Περίπου 7–8 ποτήρια υγρών την ημέρα.</li>
      <li><strong>Έφηβοι 13–17 ετών:</strong> 
        <ul>
          <li>Αγόρια: Περίπου 10 ποτήρια υγρών την ημέρα.</li>
          <li>Κορίτσια: Περίπου 8 ποτήρια υγρών την ημέρα.</li>
        </ul>
      </li>
      <li><strong>Ενήλικες:</strong> 30 ml ανά κιλό βάρους το χειμώνα, 40 ml ανά κιλό βάρους το καλοκαίρι.</li>
    </ul>

    <h4>Απλό νερό vs Ανθρακούχο νερό</h4>
    <p>Πολλοί αναρωτιούνται αν το ανθρακούχο νερό είναι το ίδιο ωφέλιμο με το απλό. Η σύντομη απάντηση είναι <strong>ΝΑΙ!</strong></p>
    <p>Το ανθρακούχο νερό έχει προστεθεί διοξείδιο του άνθρακα (CO₂), το οποίο δημιουργεί τις γνωστές φυσαλίδες. Από διατροφικής άποψης, είναι εξίσου ενυδατικό με το απλό νερό, αρκεί να μην περιέχει πρόσθετη ζάχαρη ή τεχνητές γλυκαντικές ουσίες.</p>

    <p><strong>Πλεονεκτήματα:</strong> Η αίσθηση κορεσμού που προσφέρει μπορεί να βοηθήσει όσους προσπαθούν να χάσουν βάρος.</p>
    <p><strong>Μειονεκτήματα:</strong> Πιθανή προσωρινή δυσφορία, φούσκωμα ή ελαφριά δυσπεψία λόγω των φυσαλίδων. Η αυξημένη οξύτητα (pH) μπορεί, σε υπερβολική κατανάλωση, να επηρεάσει το σμάλτο των δοντιών.</p>

    <h4>Συμπέρασμα</h4>
    <p>Αν αναζητάμε διαρκώς την τέλεια δίαιτα ή το θαυματουργό συμπλήρωμα, η απάντηση βρίσκεται πάντα πρώτα στη φύση — ξεκινώντας με ένα <strong>ποτήρι νερό!</strong></p>
    <p>Ακούστε το σώμα σας και δώστε σε αυτό και την επιδερμίδα σας την υγεία και την ευεξία που τους πρέπει. Γιατί η ομορφιά και η υγεία ξεκινούν <strong>από μέσα μας!</strong></p>
  `,
        externalUrl: null,
      },
      en: {
        title: "Water",
        contentHtml: `
    <p>We live in a “watery world”: the human body is ~60–70% water, and hydration is vital yet often overlooked.</p>
    <p>Why drink water, and how much?</p>
    <ul>
      <li><strong>Thermoregulation</strong> via sweating.</li>
      <li>Transport of vitamins, minerals, and oxygen to cells.</li>
      <li><strong>Waste removal</strong> through kidneys and liver.</li>
      <li><strong>Joint lubrication</strong> and cartilage protection.</li>
      <li><strong>Digestive health</strong> and constipation prevention.</li>
    </ul>
    <p>Good drinking water is easier on the stomach when moderately hard, with pH 6.5–8.5 and low chlorine.</p>
    <h4>How much?</h4>
    <ul>
      <li><strong>Children 2–5:</strong> ~4–5 glasses/day.</li>
      <li><strong>Children 6–12:</strong> ~7–8 glasses/day.</li>
      <li><strong>Teens 13–17:</strong> boys ~10, girls ~8 glasses/day.</li>
      <li><strong>Adults:</strong> ~30 ml/kg (winter), ~40 ml/kg (summer).</li>
    </ul>
    <h4>Still vs sparkling</h4>
    <p>Sparkling water hydrates like still water (if unsweetened). Bubbles may cause temporary bloating; excessive acidity can affect tooth enamel.</p>
    <p><strong>Bottom line:</strong> before chasing perfect diets or supplements, start with a glass of water—health and beauty begin from within.</p>
  `,
        externalUrl: null,
      },
    },
  },



  // TV Appearances
  {
    slug: "tv-child-nutrition",
    image: "/images/media/tv/1.png",
    category: "media",
    M: {
      el: {
        title: "Τηλεοπτική εμφάνιση: Η διατροφή των παιδιών",
        contentHtml: `
    <p>Στο επεισόδιο 238 της εκπομπής <em>«Όλα για τη Ζωή μας Vita»</em> με τον Μιχάλη Κεφαλογιάννη συζητήσαμε θέματα που αφορούν τη διατροφή των παιδιών και τον ρόλο της στην καθημερινή τους ζωή.</p>
    <p>Αναδείξαμε τη σημασία της ισορροπημένης διατροφής από μικρή ηλικία και το πώς αυτή επηρεάζει την ανάπτυξη, τη σωματική υγεία αλλά και την ψυχολογική ευεξία.</p>
    <p>Αναφερθήκαμε στις προκλήσεις που αντιμετωπίζουν οι γονείς στη διατροφή των παιδιών, από την επιλογή τροφών μέχρι την κατανάλωση γευμάτων εκτός σπιτιού.</p>
    <p>Με τη συμβολή ειδικών, δόθηκαν πρακτικές συμβουλές και απλές κατευθύνσεις ώστε οι γονείς να καλλιεργήσουν σωστές συνήθειες διατροφής στα παιδιά τους.</p>
    <p>Η συζήτηση ανέδειξε πώς η οικογένεια και το σχολικό περιβάλλον μπορούν να γίνουν αρωγοί για μια πιο υγιεινή καθημερινότητα.</p>
  `,
        externalUrl: "https://www.megatv.com/gtvshows/1807547/epeisodio-238-2/",
      },
      en: {
        title: "TV appearance: Children’s nutrition",
        contentHtml: `
    <p>On <em>“Ola gia ti Zoi mas – Vita”</em> (Ep. 238), we discussed children’s nutrition, its impact on growth, health, and wellbeing, the challenges parents face, and practical tips to build healthy eating habits at home and school.</p>
  `,
        externalUrl: "https://www.megatv.com/gtvshows/1807547/epeisodio-238-2/",
      },
    },
  },

  {
    slug: "tv-healthy-eating-delivery",
    image: "/images/media/tv/2.png",
    category: "media",
    M: {
      el: {
        title: "Τηλεοπτική εμφάνιση: Υπάρχει υγιεινή διατροφή με φαγητό απ’ έξω;",
        contentHtml: `
    <p>Στην εκπομπή <em>«Όλα για τη Ζωή μας Vita»</em> συζητήσαμε το κατά πόσο μπορεί να υπάρχει υγιεινή διατροφή όταν επιλέγουμε φαγητό απ’ έξω.</p>
    <p>Το φαγητό εκτός σπιτιού δεν περιορίζεται μόνο στο delivery, αλλά περιλαμβάνει και το εστιατόριο, το μαγειρείο, το κυλικείο και τον φούρνο – συνήθεια που συναντάται όλο και περισσότερο σε οικογένειες αλλά και στον εργασιακό χώρο.</p>
    <p>Αναφερθήκαμε στο πώς το delivery συχνά συνδέεται με συμπεριφορικούς λόγους, όπως η ανάγκη αποσυμπίεσης μετά από μια δύσκολη ημέρα, και πώς αυτό επηρεάζει τις επιλογές μας.</p>
    <p>Συζητήσαμε πώς μπορούμε να κάνουμε πιο υγιεινές επιλογές όταν τρώμε απ’ έξω, επισημαίνοντας ότι τρόφιμα όπως το fast food είναι πλούσια σε κορεσμένα λιπαρά που σχετίζονται με την παχυσαρκία και τα καρδιαγγειακά νοσήματα.</p>
    <p>Δώσαμε πρακτικές προτάσεις για πιο ισορροπημένες λύσεις, όπως το κοτόπουλο ή το σουβλάκι με πίτα αλάδωτη, που μπορούν να ενταχθούν σε μια υγιεινή διατροφή.</p>
  `,
        externalUrl: "https://www.megatv.com/2025/05/10/ola-gia-ti-zoi-mas-vita-yparxei-ygieini-diatrofi-me-fagito-ap-ekso/",
      },
      en: {
        title: "TV appearance: Can takeout be healthy?",
        contentHtml: `
    <p>We explored healthier eating when dining out or ordering in—behavioral triggers behind delivery, risks of fast food (saturated fats), and practical swaps like grilled chicken or lean souvlaki in an oiled-free pita.</p>
  `,
        externalUrl: "https://www.megatv.com/2025/05/10/ola-gia-ti-zoi-mas-vita-yparxei-ygieini-diatrofi-me-fagito-ap-ekso/",
      },
    },
  },

  // YouTube Podcasts
  {
    slug: "podcast-healthy-habits-kids",
    image: "/images/media/podcast/1.png",
    category: "media",
    M: {
      el: {
        title: "Podcast: Βάζοντας τα θεμέλια για καλές διατροφικές συνήθειες από την παιδική ηλικία",
        content: [
          "Στο επεισόδιο με τίτλο «Βάζοντας τα θεμέλια για καλές διατροφικές συνήθειες από την παιδική ηλικία», είχαμε την ευκαιρία να συζητήσουμε σημαντικά θέματα γύρω από τη διατροφή των παιδιών και τις προκλήσεις που αντιμετωπίζουν οι γονείς σήμερα.",
          "Συζητήσαμε για το πώς οι γονείς μπορούν να δημιουργήσουν από νωρίς σωστές διατροφικές συνήθειες στα παιδιά τους, με αυτοπεποίθηση και χωρίς ενοχές.",
          "Αναφερθήκαμε στις συμβουλές που περνούν από γενιά σε γενιά, αλλά και στο πώς η τεχνολογία τροφίμων και οι σύγχρονες επιλογές έχουν αλλάξει το περιβάλλον γύρω από το φαγητό.",
          "Μιλήσαμε για το πώς τα παιδιά, ήδη από τη βρεφική ηλικία, μαθαίνουν να τρώνε «σωστά» και πώς αυτό μπορεί να αποτελέσει θεμέλιο για μια ολόκληρη ζωή.",
          "Έγινε αναφορά στις καθημερινές προκλήσεις, όπως το κολατσιό στο σχολείο ή τον παιδικό σταθμό, όπου τα παιδιά συγκρίνουν και ζητούν τροφές που βλέπουν στους συμμαθητές τους.",
          "Αγγίξαμε το ζήτημα της παιδικής παχυσαρκίας στην Ελλάδα και πώς οι γονείς μπορούν να το αντιμετωπίσουν με ψυχραιμία και ισορροπία, χωρίς πανικό ή υπερβολές.",
          "Τονίσαμε τη σημασία του παραδείγματος των γονιών και πώς αυτό επηρεάζει την ανάπτυξη υγιεινών συνηθειών, από την παιδική ηλικία έως την εφηβεία."
        ],
        externalUrl: "http://youtu.be/toijrxZpn0I?si=kTrOj0zUFrlz488l",
      },
      en: {
        title: "Podcast: Building healthy eating habits from early childhood",
        content: [
          "How parents can foster confident, guilt-free healthy habits early on.",
          "What changes in modern food environments mean for families.",
          "Role-modeling from parents across childhood to adolescence.",
          "Tackling school snack pressures and comparisons.",
          "Approaching childhood obesity with balance and calm."
        ],
        externalUrl: "http://youtu.be/toijrxZpn0I?si=kTrOj0zUFrlz488l",
      },
    },
  },

  {
    slug: "podcast-social-media-pressure",
    image: "/images/media/podcast/2.png",
    category: "media",
    M: {
      el: {
        title: "Podcast: Πρότυπα και ψυχολογική πίεση των social media στις διατροφικές μας συνήθειες",
        content: [
          "Στο επεισόδιο με τίτλο «Πρότυπα και ψυχολογική πίεση των social media στις διατροφικές μας συνήθειες», συζητήσαμε για τον ρόλο που παίζουν τα κοινωνικά δίκτυα στη διαμόρφωση προτύπων γύρω από τη διατροφή και την εικόνα του σώματος.",
          "Αναφερθήκαμε στο πώς οι influencers, οι celebrities και τα μέσα κοινωνικής δικτύωσης δημιουργούν συγκεκριμένα πρότυπα εμφάνισης και διατροφής, τα οποία συχνά συνοδεύονται από πίεση και μη ρεαλιστικές προσδοκίες.",
          "Συζητήσαμε τρόπους με τους οποίους τα social media μπορούν να λειτουργήσουν θετικά, ως σύμμαχοι μιας υγιεινής και ισορροπημένης διατροφής, όταν χρησιμοποιούνται με κριτική σκέψη και υπευθυνότητα.",
          "Τονίσαμε τη σημασία του να ξεχωρίζουμε την έγκυρη επιστημονική πληροφόρηση από τις τάσεις που βασίζονται σε εικόνα και lifestyle.",
          "Μαζί με την influencer Μαριάννα Γαρυφαλλίδη (Grfld) και τη Νίκη Λυμπεράκη, ανταλλάξαμε απόψεις για το πώς μπορούμε να υποστηρίξουμε υγιείς συνήθειες, χωρίς ψυχολογική πίεση και ενοχές."
        ],
        externalUrl: "http://youtu.be/1AbzxHsonv4?si=Mf1_SrfDO1vFs1JP",
      },
      en: {
        title: "Podcast: Social media ideals and pressure on our eating habits",
        content: [
          "How social platforms shape body image and diet trends.",
          "Turning social media into an ally with critical thinking.",
          "Separating evidence-based guidance from lifestyle fads.",
          "Supporting healthy habits without guilt or pressure."
        ],
        externalUrl: "http://youtu.be/1AbzxHsonv4?si=Mf1_SrfDO1vFs1JP",
      },
    },
  }

];

export default posts;

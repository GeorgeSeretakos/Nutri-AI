class ActionMapper:
    """
    Converts structured actions from FeedbackAgent into natural-language
    modification instructions for the DietAgent update prompt.
    """

    @staticmethod
    def map_actions(actions: dict) -> str:
        instructions = []

        # --------------------------------------------
        # Calorie adjustments
        # --------------------------------------------
        if actions.get("calories") == "decrease":
            instructions.append(
                "Μείωσε τις θερμίδες μειώνοντας τους υδατάνθρακες και τις μερίδες."
            )
        elif actions.get("calories") == "increase":
            instructions.append(
                "Αύξησε τις θερμίδες προσθέτοντας περισσότερους υδατάνθρακες ή μεγαλύτερες μερίδες."
            )

        # --------------------------------------------
        # Macro adjustments
        # --------------------------------------------
        if actions.get("protein") == "increase":
            instructions.append("Αύξησε την πρωτεΐνη (π.χ. περισσότερο κοτόπουλο, τόνο, αυγά).")

        if actions.get("carbs") == "increase":
            instructions.append("Αύξησε τους υδατάνθρακες (ρύζι, πατάτες, ζυμαρικά).")

        if actions.get("carbs") == "decrease":
            instructions.append("Μείωσε τους υδατάνθρακες (ρύζι, πατάτες, ψωμί).")

        if actions.get("fat") == "increase":
            instructions.append("Αύξησε τα λιπαρά (ελαιόλαδο, αβοκάντο, ξηροί καρποί).")

        if actions.get("fat") == "decrease":
            instructions.append("Μείωσε τα λιπαρά (λιγότερο λάδι και λιπαρά τυριά).")

        # --------------------------------------------
        # Sports diet
        # --------------------------------------------
        if actions.get("sports_diet") == "yes":
            instructions.append(
                "Πρόσθεσε γεύματα πριν και μετά την προπόνηση για αθλητή."
            )

        # --------------------------------------------
        # Gym snacks
        # --------------------------------------------
        if actions.get("gym_snacks") == "add_pre_post":
            instructions.append(
                "Πρόσθεσε ένα σνακ πριν τη γυμναστική και ένα μετά."
            )

        # --------------------------------------------
        # Medical conditions
        # --------------------------------------------
        if actions.get("medical_adaptation") == "diabetes":
            instructions.append(
                "Προσάρμοσε τη διατροφή για διαβήτη: χαμηλό γλυκαιμικό φορτίο, λιγότερους υδατάνθρακες."
            )
        elif actions.get("medical_adaptation") == "cholesterol":
            instructions.append(
                "Προσάρμοσε τη διατροφή για υψηλή χοληστερίνη: αποφύγετε τα τηγανητά και τα πολύ λιπαρά."
            )
        elif actions.get("medical_adaptation") == "ibs":
            instructions.append(
                "Προσάρμοσε τη διατροφή για ευερέθιστο έντερο: προτίμησε απλά, εύπεπτα γεύματα."
            )

        # --------------------------------------------
        # Special diets
        # --------------------------------------------
        if actions.get("special_diet") == "keto":
            instructions.append("Μετατροπή σε κετογονική δίαιτα: πολύ χαμηλοί υδατάνθρακες.")
        elif actions.get("special_diet") == "intermittent_fasting":
            instructions.append("Εφάρμοσε διαλειμματική νηστεία, π.χ. παράθυρο φαγητού 12:00–20:00.")

        # --------------------------------------------
        # Travel mode
        # --------------------------------------------
        if actions.get("travel_mode") == "yes":
            instructions.append(
                "Πρόσθεσε επιλογές για ταξίδι και ξενοδοχείο (πρωινό, σνακ)."
            )

        # --------------------------------------------
        # Free text
        # --------------------------------------------
        if actions.get("specific_requests"):
            instructions.append(actions["specific_requests"])

        # Join all instructions together
        return " ".join(instructions)

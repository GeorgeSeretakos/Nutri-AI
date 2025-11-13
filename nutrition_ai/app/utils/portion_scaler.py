class PortionScaler:
    """
    Adjusts portion sizes according to calorie demands.
    """

    @staticmethod
    def scale_portion(description: str, factor: float) -> str:
        """
        Applies a scaling factor to numeric portions inside a text like:
        "3-4 πατάτες φούρνου" → scaled
        """
        import re

        def repl(match):
            num = match.group(0)
            if "-" in num:
                a, b = num.split("-")
                a = round(float(a) * factor, 1)
                b = round(float(b) * factor, 1)
                return f"{a}-{b}"
            else:
                return str(round(float(num) * factor, 1))

        return re.sub(r"\d+(\.\d+)?(-\d+(\.\d+)?)?", repl, description)

    @staticmethod
    def compute_factor(daily_calories, target_calories):
        if daily_calories == 0:
            return 1
        return target_calories / daily_calories

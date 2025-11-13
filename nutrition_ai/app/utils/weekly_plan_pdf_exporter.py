from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import cm
from nutrition_ai.agents.weekly_rotation_agent import WeeklyPlan


class WeeklyPlanPDFExporter:

    @staticmethod
    def export_weekly_plan(weekly: WeeklyPlan, output_path: str):

        doc = SimpleDocTemplate(output_path, pagesize=A4)
        styles = getSampleStyleSheet()
        story = []

        # Title
        story.append(Paragraph("<b>Εβδομαδιαίο Πλάνο Γευμάτων</b>", styles["Title"]))
        story.append(Spacer(1, 0.5 * cm))

        data = [["Ημέρα", "Πρωινό", "Κύριο Γεύμα", "Ελαφρύ Γεύμα", "Σνακ 1", "Σνακ 2"]]

        for day in weekly.weekly_schedule:
            row = [
                day.day,
                day.breakfast["description"],
                day.main_meal["description"],
                day.light_meal["description"],
                day.snacks[0]["description"],
                day.snacks[1]["description"]
            ]
            data.append(row)

        table = Table(data, colWidths=[3*cm, 4*cm, 4*cm, 4*cm, 3*cm, 3*cm])
        table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,0), colors.lightblue),
            ('TEXTCOLOR', (0,0), (-1,0), colors.black),
            ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
            ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ]))

        story.append(table)
        doc.build(story)

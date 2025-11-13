import PDFDocument from "pdfkit";
import path from "path";
import fs from "fs";

function drawTemplateFrame(doc) {
  const { width, height } = doc.page;

  // left colored bars (like your sample)
  doc.save();
  doc.rect(0, 0, 60, height).fill("#006a71");
  doc.rect(0, 0, 20, height).fill("#00424a");
  doc.restore();

  // logo top-right
  const logoPath = path.join(process.cwd(), "public", "icons", "logo.jpg");
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, width - 160, 40, { width: 120 });
  }
}

function addNewPage(doc) {
  doc.addPage();
  drawTemplateFrame(doc);
  return 120; // starting y after header
}

export function generateDietPdf(plan) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margin: 50,
    });

    // ---------- FONT REGISTRATION (Robotto with Greek support) ----------
    const regularFontPath = path.join(
      process.cwd(),
      "public",
      "fonts",
      "Roboto-Regular.ttf"
    );
    const boldFontPath = path.join(
      process.cwd(),
      "public",
      "fonts",
      "Roboto-Bold.ttf"
    );

    // default fallback fonts
    let bodyFont = "Helvetica";
    let bodyBoldFont = "Helvetica-Bold";

    if (fs.existsSync(regularFontPath)) {
      doc.registerFont("Body", regularFontPath);
      bodyFont = "Body";
    }
    if (fs.existsSync(boldFontPath)) {
      doc.registerFont("Body-Bold", boldFontPath);
      bodyBoldFont = "Body-Bold";
    }

    const chunks = [];
    doc.on("data", (c) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    drawTemplateFrame(doc);

    let y = 120;
    const leftX = 80;

    // use our body font by default
    doc.font(bodyFont);

    const addText = (text, options = {}) => {
      const { fontSize = 12, bold = false, color = "#000000" } = options;
      doc.font(bold ? bodyBoldFont : bodyFont);
      doc.fillColor(color);
      doc.fontSize(fontSize);
      doc.text(text || "", leftX, y, { width: 450 });
      y = doc.y + 4;
      if (y > doc.page.height - 80) y = addNewPage(doc);
    };

    // HEADER INFO
    addText(`ΟΝΟΜΑ: ${plan.user_name}`, {
      fontSize: 14,
      bold: true,
      color: "#f1b500",
    });
    addText(`ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ: ${plan.birth_date}`, {
      fontSize: 12,
      bold: true,
    });
    addText(`ΥΨΟΣ: ${plan.height}`, { fontSize: 12, bold: true });
    addText(`ΑΣΚΗΣΗ: ${plan.exercise || "-"}`, {
      fontSize: 12,
      bold: true,
    });
    addText(`ΣΤΟΧΟΣ: ${plan.goal || "KG"}`, { fontSize: 12, bold: true });

    y += 10;

    // SECTION RENDERING (tables)
    const renderSection = (title, items) => {
      addText(title.toUpperCase(), {
        fontSize: 14,
        bold: true,
        color: "#f1b500",
      });

      // table header
      const col1X = leftX;
      const col2X = leftX + 260;
      const col3X = leftX + 380;
      const rowHeight = 18;

      const ensureSpace = (extra = 0) => {
        if (y + extra > doc.page.height - 60) {
          y = addNewPage(doc);
        }
      };

      ensureSpace(40);

      // header row background
      doc.rect(col1X - 2, y - 2, 450, rowHeight).fill("#f5f5f5");
      doc
        .fillColor("#000")
        .fontSize(10)
        .font(bodyBoldFont);
      doc.text("Επιλογές", col1X, y, { width: col2X - col1X - 5 });
      doc.text("Συχνότητα", col2X, y, { width: col3X - col2X - 5 });
      doc.text("Σχόλια", col3X, y, { width: 120 });
      y += rowHeight;

      // rows
      doc.font(bodyFont).fontSize(10);
      items.forEach((item) => {
        ensureSpace(40);
        const rowTop = y;

        // Option (may wrap)
        doc.text(item.option, col1X, y, {
          width: col2X - col1X - 5,
        });
        const optionBottom = doc.y;

        // Frequency
        doc.text(item.frequency || "", col2X, rowTop, {
          width: col3X - col2X - 5,
        });
        const freqBottom = doc.y;

        // Comments
        doc.text(item.comments || "", col3X, rowTop, {
          width: 120,
        });
        const commentsBottom = doc.y;

        const maxBottom = Math.max(optionBottom, freqBottom, commentsBottom);
        y = maxBottom + 6;

        // horizontal line
        doc
          .moveTo(col1X - 2, y - 3)
          .lineTo(col1X - 2 + 450, y - 3)
          .strokeColor("#e0e0e0")
          .stroke();
      });

      y += 12;
    };

    // Loop sections
    const sections = plan.sections || {};
    Object.keys(sections).forEach((key) => {
      renderSection(key, sections[key]);
    });

    // FRUIT LIST
    if (plan.fruit_list?.length) {
      addText("ΕΝΔΕΙΚΤΙΚΕΣ ΠΟΣΟΤΗΤΕΣ ΦΡΟΥΤΩΝ", {
        fontSize: 14,
        bold: true,
        color: "#f1b500",
      });

      plan.fruit_list.forEach((f) => {
        addText(`• ${f.name}: ${f.quantity}`, { fontSize: 11 });
      });
    }

    // ADDITIONAL NOTES
    if (plan.additional_notes) {
      y += 10;
      addText("Σχόλια:", { fontSize: 12, bold: true, color: "#f1b500" });
      addText(plan.additional_notes, { fontSize: 11 });
    }

    doc.end();
  });
}

import { generateDietPdf } from "../../../../../lib/generateDietPdf";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const plan = await req.json();

    const pdfBuffer = await generateDietPdf(plan);

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${
          plan.user_name || "diet"
        }.pdf"`,
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to generate PDF" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

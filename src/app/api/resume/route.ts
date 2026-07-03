const GOOGLE_DOC_PDF_URL =
  "https://docs.google.com/document/d/120enFLxzllOLew3KZHPoGALw-WUMo_So_TeEe6LdZ5U/edit?usp=sharing";

export const dynamic = "force-dynamic";

export async function GET() {
  const response = await fetch(GOOGLE_DOC_PDF_URL, { cache: "no-store" });

  if (!response.ok || !response.body) {
    return new Response("The resume is temporarily unavailable.", {
      status: 502,
    });
  }

  return new Response(response.body, {
    headers: {
      "Cache-Control": "no-store",
      "Content-Disposition": 'inline; filename="Ali-Monette-Resume.pdf"',
      "Content-Type": "application/pdf",
    },
  });
}

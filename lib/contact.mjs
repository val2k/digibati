export const CONTACT_EMAIL = "bonjour@digibati.fr";

const recipient =
  process.env.NEXT_PUBLIC_FORMSUBMIT_RECIPIENT || CONTACT_EMAIL;

export const CONTACT_ENDPOINT = `https://formsubmit.co/${recipient}`;
export const CONTACT_AJAX_ENDPOINT = `https://formsubmit.co/ajax/${recipient}`;

export async function sendContactRequest(formData, fetchRequest = fetch) {
  const value = (name) => String(formData.get(name) || "").trim();
  const payload = {
    name: value("name"),
    email: value("email"),
    Entreprise: value("company"),
    Téléphone: value("phone"),
    Offre: value("offer"),
    Projet: value("project"),
    Provenance: value("source") === "demo" ? "Démo plombier" : "Site Digibati",
    _subject: "Digibati — Nouvelle demande de projet",
    _template: "table",
    _captcha: "false",
    _honey: value("_honey"),
  };

  const response = await fetchRequest(CONTACT_AJAX_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(20000),
  });
  const result = await response.json();

  // Only an explicit provider acknowledgement counts as a successful send.
  if (!response.ok || (result?.success !== true && result?.success !== "true")) {
    throw new Error("Contact submission failed");
  }
}

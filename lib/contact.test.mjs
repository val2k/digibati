import assert from "node:assert/strict";
import test from "node:test";
import { CONTACT_AJAX_ENDPOINT, sendContactRequest } from "./contact.mjs";

function inquiry(source = "demo") {
  const form = new FormData();
  for (const [name, value] of Object.entries({
    name: " Test artisan ", email: "test@example.com", company: "Entreprise test",
    phone: "", offer: "Site multipage", project: "Projet de test", source, _honey: "",
  })) form.set(name, value);
  return form;
}

test("sends contact details, reply email, offer and demo attribution", async () => {
  let captured;
  await sendContactRequest(inquiry(), async (url, options) => {
    captured = { url, ...options, payload: JSON.parse(options.body) };
    return Response.json({ success: "true" });
  });
  assert.equal(captured.url, CONTACT_AJAX_ENDPOINT);
  assert.equal(captured.method, "POST");
  assert.equal(captured.payload.name, "Test artisan");
  assert.equal(captured.payload.email, "test@example.com");
  assert.equal(captured.payload.Entreprise, "Entreprise test");
  assert.equal(captured.payload.Offre, "Site multipage");
  assert.equal(captured.payload.Projet, "Projet de test");
  assert.equal(captured.payload.Provenance, "Démo plombier");
  assert.equal(captured.payload._honey, "");
  assert.ok(captured.signal instanceof AbortSignal);
});

test("accepts boolean success and identifies direct visits", async () => {
  await sendContactRequest(inquiry(""), async (_url, options) => {
    assert.equal(JSON.parse(options.body).Provenance, "Site Digibati");
    return Response.json({ success: true });
  });
});

test("rejects provider refusals and missing acknowledgements", async () => {
  for (const result of [{ success: false }, { success: "false" }, {}, null]) {
    await assert.rejects(sendContactRequest(inquiry(), async () => Response.json(result)));
  }
});

test("rejects HTTP errors even if the body claims success", async () => {
  await assert.rejects(sendContactRequest(inquiry(), async () =>
    Response.json({ success: true }, { status: 500 })));
});

test("rejects malformed responses and network failures", async () => {
  await assert.rejects(sendContactRequest(inquiry(), async () => new Response("Unavailable")));
  await assert.rejects(sendContactRequest(inquiry(), async () => { throw new TypeError("Offline"); }));
});

test("failed submissions preserve the original form data for retry", async () => {
  const form = inquiry();
  const original = [...form.entries()];
  await assert.rejects(sendContactRequest(form, async () => Response.json({ success: false })));
  assert.deepEqual([...form.entries()], original);
});

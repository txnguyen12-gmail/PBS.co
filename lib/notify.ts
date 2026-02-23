import { Resend } from "resend";

const NOTIFICATION_EMAIL = "LettonLLC@gmail.com";

interface LeadNotification {
  type: "lead" | "quote";
  name: string;
  email: string;
  phone: string;
  details?: string;
}

export async function notifyNewLead(data: LeadNotification) {
  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY not set — skipping email notification");
    return;
  }

  const subject =
    data.type === "quote"
      ? `New Quote Request from ${data.name}`
      : `New Lead from ${data.name}`;

  const html = `
    <h2>${subject}</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    ${data.details ? `<h3>Details</h3><pre>${data.details}</pre>` : ""}
    <hr>
    <p style="color:#888;font-size:12px;">Sent from Perfect Building Supply website</p>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Perfect Building Supply <notifications@perfectbuildingsupply.com>",
      to: NOTIFICATION_EMAIL,
      subject,
      html,
    });
  } catch (err) {
    console.error("Failed to send notification email:", err);
  }
}

import type { ContactValues } from "@/lib/contact";

// Email HTML: tables + inline styles only. Gmail and Outlook drop <style> blocks and modern layout.
const c = {
  page: "#0e0e10",
  card: "#161618",
  panel: "#1d1d20",
  line: "#2a2a2e",
  text: "#efe6da",
  muted: "#a39b92",
  lava: "#ff4d00",
  crimson: "#b11226",
};
const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const display = "Impact, 'Arial Narrow Bold', 'Helvetica Neue', Arial, sans-serif";

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function sentAt() {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());
}

export function contactEmail({ name, email, topic, message }: ContactValues) {
  const when = sentAt();
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeTopic = escapeHtml(topic);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");
  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${topic}`)}`;

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>New message from ${safeName}</title>
</head>
<body style="margin:0;padding:0;background:${c.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${safeTopic}: ${escapeHtml(message.slice(0, 120))}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${c.page};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:${c.card};border:1px solid ${c.line};border-radius:20px;overflow:hidden;">
        <tr><td style="height:4px;background:${c.lava};background-image:linear-gradient(90deg,${c.crimson},${c.lava});font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr>
          <td style="padding:28px 32px 8px 32px;font-family:${sans};">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-family:${sans};font-size:12px;letter-spacing:4px;color:${c.text};font-weight:700;">
                  <span style="color:${c.lava};">&#9679;</span>&nbsp;SHYAMENK
                </td>
                <td align="right" style="font-family:${sans};font-size:12px;color:${c.muted};">Contact form</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px 0 32px;">
            <h1 style="margin:0;font-family:${display};font-size:34px;line-height:1.05;font-weight:400;letter-spacing:1px;text-transform:uppercase;color:${c.text};">
              New message from <span style="color:${c.lava};">${safeName}</span>
            </h1>
            <p style="margin:14px 0 0 0;">
              <span style="display:inline-block;padding:5px 12px;border:1px solid ${c.lava};border-radius:999px;font-family:${sans};font-size:12px;color:${c.lava};">${safeTopic}</span>
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 0 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${c.panel};border:1px solid ${c.line};border-radius:14px;">
              <tr>
                <td style="padding:20px 22px;font-family:${sans};font-size:15px;line-height:1.65;color:${c.text};">${safeMessage}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:22px 32px 0 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:${sans};font-size:14px;">
              <tr>
                <td style="padding:6px 0;width:72px;color:${c.muted};">Name</td>
                <td style="padding:6px 0;color:${c.text};">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;width:72px;color:${c.muted};">Email</td>
                <td style="padding:6px 0;"><a href="mailto:${safeEmail}" style="color:${c.lava};text-decoration:none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding:6px 0;width:72px;color:${c.muted};">Sent</td>
                <td style="padding:6px 0;color:${c.text};">${escapeHtml(when)} IST</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:26px 32px 32px 32px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="border-radius:999px;background:${c.lava};">
                  <a href="${replyHref}" style="display:inline-block;padding:13px 26px;font-family:${sans};font-size:14px;font-weight:700;color:${c.page};text-decoration:none;border-radius:999px;">Reply to ${safeName} &rarr;</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 32px;border-top:1px solid ${c.line};font-family:${sans};font-size:12px;line-height:1.6;color:${c.muted};">
            Sent from the contact form on <a href="https://www.shyamenk.space/contact" style="color:${c.muted};">shyamenk.space</a>. Hitting Reply in your mail app also goes straight to ${safeName}.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

  const text = [
    `New message from ${name}`,
    `Topic: ${topic}`,
    "",
    message,
    "",
    `Name:  ${name}`,
    `Email: ${email}`,
    `Sent:  ${when} IST`,
    "",
    "Sent from the contact form on shyamenk.space. Reply to this email to answer.",
  ].join("\n");

  return { html, text };
}

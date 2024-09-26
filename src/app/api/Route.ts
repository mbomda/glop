import type { NextApiRequest, NextApiResponse } from "next";
import Mailgun from "mailgun.js";
import FormData from "form-data";

const CONTACT_FORM_FROM_EMAIL = process.env.CONTACT_FORM_FROM_EMAIL as string;
const CONTACT_FORM_TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL as string;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN as string;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY as string;

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "Boris",
  key: MAILGUN_API_KEY,

  url: "https://mail.google.com/mail/u/0/#inbox",
});

async function Route(req: NextApiRequest, res: NextApiResponse<string | void>) {
  if (req.method !== "POST") {
    return res.status(404).end();
  }

  const { name, email, message } = req.body;

  const text = ["From: " + name + "<" + email + ">\n", message].join("\n");

  await mg.messages.create(MAILGUN_DOMAIN, {
    subject: "New contact form submission",
    from: CONTACT_FORM_FROM_EMAIL,
    to: CONTACT_FORM_TO_EMAIL,
    text,
    "h:Reply-To": email,
  });

  res.status(200).json({ status: "ok" } as any);
}

export default Route;

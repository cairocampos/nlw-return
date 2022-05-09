import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4a9a0e9d8ab332",
    pass: "b9bd94a1b6d1e2"
  }
});
export class NodeMailerMailAdapter implements MailAdapter
{
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Cairo Campos <cairo@gmail.com>",
      subject,
      html: body
    })
  }
}
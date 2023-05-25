import { NotificationMessage, Notifier } from "../Notifier";

export class EmailNotifier implements Notifier {
  async send(message: NotificationMessage): Promise<void> {
    // Simulate sending an email
    console.log(`Sending email to ${message.to}`);
    console.log(`Subject: ${message.subject}`);
    console.log(`Body: ${message.body}`);
    // Here you would integrate with an actual email service provider
  }
}

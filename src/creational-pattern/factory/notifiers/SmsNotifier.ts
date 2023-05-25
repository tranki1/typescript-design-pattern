import { NotificationMessage, Notifier } from "../Notifier";

export class SmsNotifier implements Notifier {
  async send(message: NotificationMessage): Promise<void> {
    // Simulate sending an SMS
    console.log(`Sending SMS to ${message.to}`);
    console.log(`Body: ${message.body}`);
    // Here you would integrate with an actual SMS service provider
  }
}

import { Notifier } from "../Notifier";
import { EmailNotifier } from "../notifiers/EmailNotifier";
import { NotificationFactory } from "./NotificationFactory";

export class EmailNotificationFactory extends NotificationFactory {
  createNotifier(): Notifier {
    return new EmailNotifier();
  }
}

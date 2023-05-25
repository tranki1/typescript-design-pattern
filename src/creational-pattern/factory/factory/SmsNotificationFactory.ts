import { Notifier } from "../Notifier";
import { SmsNotifier } from "../notifiers/SmsNotifier";
import { NotificationFactory } from "./NotificationFactory";

export class SmsNotificationFactory extends NotificationFactory {
  createNotifier(): Notifier {
    return new SmsNotifier();
  }
}

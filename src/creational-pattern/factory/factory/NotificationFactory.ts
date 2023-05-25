import { Notifier } from "../Notifier";

export abstract class NotificationFactory {
  abstract createNotifier(): Notifier;
  async notify(message: Parameters<Notifier["send"]>[0]): Promise<void> {
    const notifier = this.createNotifier();
    await notifier.send(message);
  }
}

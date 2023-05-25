export interface NotificationMessage {
  to: string;
  subject?: string;
  body: string;
}

export interface Notifier {
  send(message: NotificationMessage): Promise<void>;
}

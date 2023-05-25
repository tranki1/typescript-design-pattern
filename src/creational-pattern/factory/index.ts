import { EmailNotificationFactory } from "./factory/EmailNotificationFactory";
import { SmsNotificationFactory } from "./factory/SmsNotificationFactory";

async function notificationClient() {
  const emailFactory = new EmailNotificationFactory();

  await emailFactory.notify({
    to: "kim@example.com",

    subject: "Welcome",

    body: "Thanks for joining!",
  });
  await emailFactory.notify({
    to: "trung@example.com",

    subject: "Password Reset",

    body: "Click here to reset your password.",
  });

  const smsFactory = new SmsNotificationFactory();

  await smsFactory.notify({
    to: "+358401234567",

    body: "Your login code is 123456",
  });
}
notificationClient().catch((error) => {
  console.error("Error in notification client:", error);
});

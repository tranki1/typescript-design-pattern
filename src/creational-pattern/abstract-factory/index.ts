// Product Interfaces
abstract class PaymentProcessor {
  abstract processPayment(amount: number): Promise<void>;
}

abstract class RefundProcessor {
  abstract processRefund(amount: number): Promise<void>;
}

abstract class WebhookHandler {
  abstract handleWebhook(data: any): Promise<void>;
}
// Concrete Products
class StripePaymentProcessor extends PaymentProcessor {
  async processPayment(amount: number): Promise<void> {
    console.log(`Processing payment of $${amount} through Stripe.`);
  }
}
class StripeRefundProcessor extends RefundProcessor {
  async processRefund(amount: number): Promise<void> {
    console.log(`Processing refund of $${amount} through Stripe.`);
  }
}
class StripeWebhookHandler extends WebhookHandler {
  async handleWebhook(data: any): Promise<void> {
    console.log("Handling Stripe webhook with data:", data);
  }
}
class PaypalPaymentProcessor extends PaymentProcessor {
  async processPayment(amount: number): Promise<void> {
    console.log(`Processing payment of $${amount} through PayPal.`);
  }
}

class PaypalRefundProcessor extends RefundProcessor {
  async processRefund(amount: number): Promise<void> {
    console.log(`Processing refund of $${amount} through PayPal.`);
  }
}
class PaypalWebhookHandler extends WebhookHandler {
  async handleWebhook(data: any): Promise<void> {
    console.log("Handling PayPal webhook with data:", data);
  }
}

// Abstract Factory
abstract class PaymentFactory {
  abstract createPaymentProcessor(): PaymentProcessor;
  abstract createRefundProcessor(): RefundProcessor;
  abstract createWebhookHandler(): WebhookHandler;
}

// Concrete Factories
class StripePaymentFactory extends PaymentFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new StripePaymentProcessor();
  }
  createRefundProcessor(): RefundProcessor {
    return new StripeRefundProcessor();
  }
  createWebhookHandler(): WebhookHandler {
    return new StripeWebhookHandler();
  }
}

class PaypalPaymentFactory extends PaymentFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new PaypalPaymentProcessor();
  }
  createRefundProcessor(): RefundProcessor {
    return new PaypalRefundProcessor();
  }
  createWebhookHandler(): WebhookHandler {
    return new PaypalWebhookHandler();
  }
}

// Implement the Abstract Factory
function processPayment(factory: PaymentFactory, amount: number) {
  const paymentProcessor = factory.createPaymentProcessor();
  const webhookHandler = factory.createWebhookHandler();
  paymentProcessor.processPayment(amount);
  webhookHandler.handleWebhook({ event: "payment_processed", amount });
}

// Create Stripe Process Payment
const stripeFactory = new StripePaymentFactory();
processPayment(stripeFactory, 100);

// Create PayPal Process Payment
const paypalFactory = new PaypalPaymentFactory();
processPayment(paypalFactory, 200);

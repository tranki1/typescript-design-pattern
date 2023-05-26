class Payment {
  constructor() {}
  pay(platform: PaymentPlatform, amount: number): void {
    platform.pay(amount);
    console.log(`Processing payment of $${amount}`);
  }
  refund(platform: PaymentPlatform, amount: number): void {
    platform.refund(amount);
    console.log(`Processing refund of $${amount}`);
  }
}

abstract class PaymentPlatform {
  abstract pay(amount: number): void;
  abstract refund(amount: number): void;
}

class Paypal {
  makePayment(amount: number): void {
    console.log(`Processing Paypal payment of $${amount}`);
  }
  refundPayment(amount: number): void {
    console.log(`Processing Paypal refund of $${amount}`);
  }
}

class Stripe {
  processPayment(amount: number): void {
    console.log(`Processing Stripe payment of $${amount}`);
  }
  processRefund(amount: number): void {
    console.log(`Processing Stripe refund of $${amount}`);
  }
}

class PaypalAdapter implements PaymentPlatform {
  constructor(private paypal: Paypal) {}

  pay(amount: number): void {
    this.paypal.makePayment(amount);
  }
  refund(amount: number): void {
    this.paypal.refundPayment(-amount);
  }
}

class StripeAdapter implements PaymentPlatform {
  constructor(private stripe: Stripe) {}

  pay(amount: number): void {
    this.stripe.processPayment(amount);
  }
  refund(amount: number): void {
    this.stripe.processRefund(-amount);
  }
}

function adapterClient() {
  const payment = new Payment();

  const paypalAdapter = new PaypalAdapter(new Paypal());
  payment.pay(paypalAdapter, 100);
  payment.refund(paypalAdapter, -50);

  const stripeAdapter = new StripeAdapter(new Stripe());
  payment.pay(stripeAdapter, 200);
  payment.pay(stripeAdapter, -75);
}

adapterClient();

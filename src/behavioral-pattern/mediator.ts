class EventBus {
  private listeners: Record<string, Function[]> = {};
  subscribe(event: string, listener: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  publish(event: string, ...args: any[]): void {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach((listener) => listener(...args));
  }
}

//Services
class OrderService {
  constructor(private eventBus: EventBus) {}
  createOrder(orderId: string) {
    console.log(`Order ${orderId} created.`);
    this.eventBus.publish("orderCreated", orderId);
  }
  shipOrder(orderId: string) {
    console.log(`Order ${orderId} shipped.`);
    this.eventBus.publish("orderShipped", orderId);
  }
}

class EmailService {
  constructor(private eventBus: EventBus) {
    this.eventBus.subscribe(
      "orderCreated",
      this.sendOrderConfirmationEmail.bind(this),
    );
    this.eventBus.subscribe(
      "orderShipped",
      this.sendShippingNotificationEmail.bind(this),
    );
    this.eventBus.subscribe(
      "inventoryUpdated",
      this.notifyInventoryUpdate.bind(this),
    );
  }
  sendOrderConfirmationEmail(data: any) {
    console.log(`Sending confirmation email for order ${data}`);
  }
  sendShippingNotificationEmail(data: any) {
    console.log(`Sending shipping notification email for order ${data}`);
  }
  notifyInventoryUpdate(data: any) {
    console.log(`Notifying inventory update for order ${data.orderId}`);
  }
}

class InventoryService {
  constructor(private eventBus: EventBus) {
    this.eventBus.subscribe("orderCreated", this.updateInventory.bind(this));
  }
  updateInventory(data: any) {
    console.log(`Updating inventory for order ${data}`);
    this.eventBus.publish("inventoryUpdated", { orderId: data });
  }
}

function mediatorClient() {
  const eventBus = new EventBus();
  const orderService = new OrderService(eventBus);
  const emailService = new EmailService(eventBus);
  const inventoryService = new InventoryService(eventBus);

  orderService.createOrder("123");
  orderService.shipOrder("123");
}

mediatorClient();

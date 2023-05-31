interface OrderState {
  pay(order: Order): string;
  cancel(order: Order): string;
  ship(order: Order): string;
  deliver(order: Order): string;
}
class PendingState implements OrderState {
  pay(order: Order): string {
    order.setState(new ProcessingState());
    return "Payment received. Order is now processing.";
  }
  cancel(order: Order): string {
    order.setState(new CancelledState());
    return "Order cancelled.";
  }
  ship(order: Order): string {
    return "Cannot ship. Payment not received yet.";
  }
  deliver(order: Order): string {
    return "Cannot deliver. Payment not received yet.";
  }
}

class ProcessingState implements OrderState {
  pay(order: Order): string {
    return "Payment already received.";
  }
  cancel(order: Order): string {
    order.setState(new CancelledState());
    return "Order cancelled.";
  }
  ship(order: Order): string {
    order.setState(new ShippedState());
    return "Order shipped.";
  }
  deliver(order: Order): string {
    return "Cannot deliver. Order not shipped yet.";
  }
}

class CancelledState implements OrderState {
  pay(order: Order): string {
    return "Cannot pay. Order cancelled.";
  }
  cancel(order: Order): string {
    return "Order already cancelled.";
  }
  ship(order: Order): string {
    return "Cannot ship. Order cancelled.";
  }
  deliver(order: Order): string {
    return "Cannot deliver. Order cancelled.";
  }
}

class ShippedState implements OrderState {
  pay(order: Order): string {
    return "Payment already received.";
  }
  cancel(order: Order): string {
    return "Cannot cancel. Order already shipped.";
  }
  ship(order: Order): string {
    return "Order already shipped.";
  }
  deliver(order: Order): string {
    order.setState(new DeliveredState());
    return "Order delivered.";
  }
}

class DeliveredState implements OrderState {
  pay(order: Order): string {
    return "Payment already received.";
  }
  cancel(order: Order): string {
    return "Cannot cancel. Order already delivered.";
  }
  ship(order: Order): string {
    return "Order already delivered.";
  }
  deliver(order: Order): string {
    return "Order already delivered.";
  }
}

class Order {
  constructor(public state: OrderState = new PendingState()) {}

  setState(state: OrderState) {
    this.state = state;
  }

  getState(): OrderState {
    return this.state;
  }
  pay() {
    return this.state.pay(this);
  }
  cancel() {
    return this.state.cancel(this);
  }

  ship() {
    return this.state.ship(this);
  }

  deliver() {
    return this.state.deliver(this);
  }
}

function stateClient() {
  const order = new Order();
  console.log(order.getState().constructor.name);
  console.log(order.ship());
  console.log(order.pay());
  console.log(order.ship());
  console.log(order.deliver());
  console.log(order.cancel());
}

stateClient();

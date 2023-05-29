interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  getCost(): number {
    return 5;
  }
  getDescription(): string {
    return "Simple Coffee";
  }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}
  getCost(): number {
    return this.coffee.getCost() + 2;
  }
  getDescription(): string {
    return this.coffee.getDescription() + ", Milk";
  }
}

class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}
  getCost(): number {
    return this.coffee.getCost();
  }
  getDescription(): string {
    return this.coffee.getDescription() + ", Sugar";
  }
}

function decoratorClient() {
  let myCoffee: Coffee = new SimpleCoffee();
  console.log(`${myCoffee.getDescription()} costs $${myCoffee.getCost()}`);

  let myCoffeeWithMilk: Coffee = new MilkDecorator(myCoffee);
  console.log(
    `${myCoffeeWithMilk.getDescription()} costs $${myCoffeeWithMilk.getCost()}`,
  );

  let myCoffeeWithMilkAndSugar: Coffee = new SugarDecorator(myCoffeeWithMilk);
  console.log(
    `${myCoffeeWithMilkAndSugar.getDescription()} costs $${myCoffeeWithMilkAndSugar.getCost()}`,
  );
}

decoratorClient();

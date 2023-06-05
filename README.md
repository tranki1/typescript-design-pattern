# TypeScript Design Patterns Playground

This repository is a small playground for learning design patterns in TypeScript by building simple, practical examples.

The goal is to keep each pattern easy to read, easy to run, and easy to extend later.

## Run the project

Install dependencies and run the example:

```bash
npm install
npm run dev:factory
```

Build the TypeScript output:

```bash
npm run build
```

## Browser UI

A simple static UI is available at `ui/index.html`.

Hosted quiz link: [Quiz UI](https://tranki1.github.io/typescript-design-pattern/ui/)

Open it in a browser to use an interactive design-pattern quiz with 20 scenarios.

Each scenario includes an empty input for your answer, a `Check` button for quick feedback, and a `Reveal Example` button to show the expected pattern and explanation.

## Pattern roadmap

### Creational patterns

- [x] Builder - [Builder Pattern Guide](./docs/builder-pattern.md).
- [x] Factory Method
- [x] Abstract Factory
- [x] Prototype
- [x] Singleton

### Structural patterns

- [x] Adapter
- [ ] Bridge
- [x] Composite
- [x] Decorator
- [x] Facade
- [ ] Flyweight
- [ ] Proxy

### Behavioral patterns

- [ ] Chain of Responsibility
- [x] Command
- [x] Iterator
- [x] Mediator
- [ ] Memento
- [x] Observer
- [x] State
- [x] Strategy
- [x] Template Method
- [ ] Visitor

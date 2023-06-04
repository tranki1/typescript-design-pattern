# TypeScript Design Patterns Playground

This repository is a small playground for learning design patterns in TypeScript by building simple, practical examples.

The goal is to keep each pattern easy to read, easy to run, and easy to extend later.

## Run the project

Install dependencies and run the example:

```bash
npm install
npm run dev
```

Build the TypeScript output:

```bash
npm run build
```

## Browser UI

A simple static UI is available at `ui/index.html`.

Open it in a browser to get a visual overview of the Builder pattern and a page structure that can later host more patterns.

The page is wired to the shared Builder demo catalog used by the CLI. Running `npm run build` refreshes `ui/builder-demo-data.js` from the TypeScript demo source.

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

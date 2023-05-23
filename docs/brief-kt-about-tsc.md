# Brief Knowledge About TypeScript Design Patterns

## What is a design pattern?

A design pattern is a reusable solution to a common software design problem.

Design patterns are not finished code. They are proven ways to organize classes, objects, and behavior so code stays easier to read, extend, and maintain.

In TypeScript, design patterns are especially useful because the language supports:

- classes
- interfaces
- inheritance
- composition
- access modifiers
- generics
- strong typing

## Three main pattern groups

### 1. Creational patterns

Creational patterns focus on how objects are created.

Use them when object creation is complex or when you want flexibility in how instances are built.

Examples:

- Builder
- Factory Method
- Abstract Factory
- Prototype
- Singleton

### 2. Structural patterns

Structural patterns focus on how classes and objects are combined.

Use them when you want different parts of a system to work together in a clean and flexible way.

Examples:

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Proxy

### 3. Behavioral patterns

Behavioral patterns focus on how objects communicate and share responsibilities.

Use them when the main challenge is behavior, workflow, or interaction between objects.

Examples:

- Observer
- Strategy
- Command
- State
- Iterator
- Template Method

## OOP ideas behind patterns in TypeScript

Most design patterns are built on core object-oriented ideas:

- Encapsulation: keep data and behavior together in one object.
- Abstraction: expose only what users of the class need to know.
- Inheritance: reuse behavior from a base class when it makes sense.
- Polymorphism: allow different objects to respond through the same interface.
- Composition: build behavior by combining objects instead of inheriting everything.

In TypeScript, composition and interfaces are often more useful than deep inheritance chains.

## Why TypeScript is good for learning patterns

TypeScript makes patterns easier to understand because types make relationships clear.

For example:

- interfaces show contracts between objects
- union types model limited states or roles
- generics make patterns reusable
- access modifiers help enforce design boundaries

## Quick pattern cheat sheet

### Builder

Use when an object has many fields and should be created step by step.

### Factory Method

Use when a class should decide which concrete object to create.

### Adapter

Use when two classes have incompatible interfaces but need to work together.

### Decorator

Use when you want to add behavior to an object without changing the original class.

### Observer

Use when one object should notify many others about changes.

### Strategy

Use when you want to swap algorithms or behaviors at runtime.

## Creational patterns in one sentence

Creational patterns help control object creation so the system is more flexible and less tightly coupled.

Two useful ways to think about them are:

- object creational patterns: one object helps create other objects
- class creational patterns: subclasses or related types control what gets created

## Good learning approach

When studying a pattern in TypeScript, ask these questions:

1. What problem does this pattern solve?
2. Which classes or interfaces participate?
3. Why is this better than a direct or simple approach?
4. What becomes easier to change later?

## In this repository

Your current implemented example is the Builder pattern.

Main project guide: [project/README.md](project/README.md)

Builder example guide: [project/docs/builder-pattern.md](project/docs/builder-pattern.md)

Builder UML class diagram: [project/docs/builder-pattern.md#uml-class-diagram](project/docs/builder-pattern.md#uml-class-diagram)

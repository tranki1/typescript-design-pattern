# Builder Pattern Guide

Back to the main project guide: [README](../README.md)

## Overview

This document explains the Builder pattern example used in this repository.

The implementation builds a `Content` object step by step through a fluent `ContentBuilder` API.

## Why Builder fits this example

`Content` is a good Builder candidate because:

- some fields are required
- some fields are optional
- the object is easier to understand when built step by step
- validation should happen in one place before returning the final object

## Files involved

- `src/index.ts` runs the example.
- `src/content/Content.ts` defines the content model.
- `src/content/ContentBuilder.ts` contains the builder implementation.

## Content model

The builder creates a `Content` object with these core fields:

- `title`
- `body`
- `type`
- `tags`
- `status`
- `authorId`
- `createdAt`
- `updatedAt`

Optional fields include:

- `slug`
- `excerpt`
- `publishedAt`

## Builder methods

The fluent API currently supports:

- `title()`
- `body()`
- `type()`
- `tags()`
- `status()`
- `slug()`
- `excerpt()`
- `authorId()`
- `published()`
- `build()`

## Default values

When the builder starts, it provides:

- `tags: []`
- `status: "draft"`
- `createdAt: new Date()`
- `updatedAt: new Date()`

## Required fields before build

These fields must exist before `build()` returns a valid object:

- `title`
- `body`
- `type`
- `authorId`

If one is missing, the builder throws:

```ts
new Error("Missing required fields")
```

## Example usage

```ts
const content = new ContentBuilder()
  .title("My First Article")
  .body("This is the body of my first article.")
  .type("article")
  .tags(["typescript", "design patterns"])
  .authorId("author123")
  .published()
  .build();
```

## What to improve later

You can expand this example later by adding:

- better validation messages for each missing field
- separate builders for different content types
- a director class that creates predefined content drafts
- tests for successful and failing build scenarios

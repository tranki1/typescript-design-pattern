import { ContentStatus, ContentType } from "../content/BaseContent";
import { ContentDirector } from "../content/ContentDirector";
import { BuiltContent } from "../content/ContentBuilderInterface";

export type CliDemoOption = {
  key: string;
  label: string;
  run: () => BuiltContent;
};

type BuilderScenarioDefinition = {
  key: string;
  label: string;
  summary: string;
  run: (director: ContentDirector) => BuiltContent;
};

type BuilderRole = {
  name: string;
  description: string;
};

type BuilderScenarioRecord = {
  key: string;
  label: string;
  summary: string;
  kind: ContentType;
  status: ContentStatus;
  output: Record<string, unknown>;
};

type BuilderDiagramNode = {
  id: string;
  label: string;
  role: "client" | "director" | "base" | "builder" | "product";
  x: number;
  y: number;
};

type BuilderDiagramEdge = {
  from: string;
  to: string;
  label: string;
};

type BuilderDiagram = {
  title: string;
  description: string;
  viewBox: {
    width: number;
    height: number;
  };
  nodes: BuilderDiagramNode[];
  edges: BuilderDiagramEdge[];
};

export type BuilderPatternData = {
  id: "builder";
  name: "Builder";
  category: "Creational";
  summary: string;
  sharedBaseBuilder: string;
  concreteBuilders: string[];
  directorFlows: string[];
  roles: BuilderRole[];
  flowSteps: string[];
  diagram: BuilderDiagram;
  scenarios: BuilderScenarioRecord[];
};

const builderScenarioDefinitions: BuilderScenarioDefinition[] = [
  {
    key: "1",
    label: "Director: published article",
    summary:
      "Creates a published article with slug, excerpt, tags, and a publish-only timestamp.",
    run: (director) =>
      director.createPublishedArticle({
        title: "My First Article",
        body: "This article was created through the director.",
        authorId: "author123",
        tags: ["typescript", "builder"],
        slug: "my-first-article",
        excerpt: "A published article created through the director.",
      }),
  },
  {
    key: "2",
    label: "Director: second published article example",
    summary:
      "Reuses the same director flow with different content to show repeatable construction.",
    run: (director) =>
      director.createPublishedArticle({
        title: "Directed Article",
        body: "The client now talks only to the director.",
        authorId: "author123",
        tags: ["builder", "director"],
        slug: "directed-article",
        excerpt: "Another article scenario for the builder demo.",
      }),
  },
  {
    key: "3",
    label: "Director: chapter draft",
    summary:
      "Builds a draft chapter that requires a novel reference and chapter number.",
    run: (director) =>
      director.createChapterDraft({
        title: "Chapter 1",
        body: "A predefined draft built by the director.",
        authorId: "author123",
        novelId: "novel-001",
        chapterNumber: 1,
      }),
  },
  {
    key: "4",
    label: "Director: novel draft",
    summary:
      "Creates a draft novel while keeping the same builder workflow and validation style.",
    run: (director) =>
      director.createNovelDraft({
        title: "The Pattern Book",
        body: "A novel draft created through the director.",
        authorId: "author123",
        tags: ["novel", "patterns"],
        excerpt: "An early draft of a design-pattern novel.",
      }),
  },
  {
    key: "5",
    label: "Director: article draft",
    summary:
      "Shows that the same article builder can produce a draft variant with no published timestamp.",
    run: (director) =>
      director.createArticleDraft({
        title: "Draft Article",
        body: "A draft article created through the director.",
        authorId: "author123",
        slug: "draft-article",
        excerpt: "Short preview",
      }),
  },
];

const builderRoles: BuilderRole[] = [
  {
    name: "Client",
    description:
      "Uses predefined director flows instead of assembling content objects directly.",
  },
  {
    name: "ContentDirector",
    description:
      "Picks the right concrete builder and applies a repeatable sequence of steps.",
  },
  {
    name: "Concrete Builders",
    description:
      "Article, chapter, and novel builders enforce type-specific rules and validation.",
  },
  {
    name: "Products",
    description:
      "ArticleContent, ChapterContent, and NovelContent are the finished objects returned to the client.",
  },
];

const flowSteps = [
  "Client selects a predefined director flow.",
  "Director creates the matching concrete builder.",
  "Builder collects required and optional fields step by step.",
  "Validation runs before the final content object is returned.",
];

const builderDiagram: BuilderDiagram = {
  title: "Builder structure",
  description:
    "The client calls the director, the director creates specialized builders, and each builder produces a concrete content type.",
  viewBox: {
    width: 920,
    height: 430,
  },
  nodes: [
    { id: "client", label: "Client", role: "client", x: 56, y: 54 },
    {
      id: "director",
      label: "ContentDirector",
      role: "director",
      x: 300,
      y: 54,
    },
    {
      id: "base-builder",
      label: "ContentBuilder",
      role: "base",
      x: 544,
      y: 54,
    },
    {
      id: "article-builder",
      label: "ArticleBuilder",
      role: "builder",
      x: 116,
      y: 212,
    },
    {
      id: "chapter-builder",
      label: "ChapterBuilder",
      role: "builder",
      x: 362,
      y: 212,
    },
    {
      id: "novel-builder",
      label: "NovelBuilder",
      role: "builder",
      x: 608,
      y: 212,
    },
    {
      id: "article-content",
      label: "ArticleContent",
      role: "product",
      x: 116,
      y: 334,
    },
    {
      id: "chapter-content",
      label: "ChapterContent",
      role: "product",
      x: 362,
      y: 334,
    },
    {
      id: "novel-content",
      label: "NovelContent",
      role: "product",
      x: 608,
      y: 334,
    },
  ],
  edges: [
    { from: "client", to: "director", label: "uses" },
    { from: "director", to: "article-builder", label: "creates" },
    { from: "director", to: "chapter-builder", label: "creates" },
    { from: "director", to: "novel-builder", label: "creates" },
    { from: "base-builder", to: "article-builder", label: "extends" },
    { from: "base-builder", to: "chapter-builder", label: "extends" },
    { from: "base-builder", to: "novel-builder", label: "extends" },
    { from: "article-builder", to: "article-content", label: "builds" },
    { from: "chapter-builder", to: "chapter-content", label: "builds" },
    { from: "novel-builder", to: "novel-content", label: "builds" },
  ],
};

function serializeValue(value: unknown): unknown {
  if (value instanceof Date) {
    return value.toISOString();
  }

  if (Array.isArray(value)) {
    return value.map((item) => serializeValue(item));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, serializeValue(entry)]),
    );
  }

  return value;
}

function normalizeVolatileFields(
  content: BuiltContent,
  scenarioKey: string,
): Record<string, unknown> {
  const serialized = serializeValue(content) as Record<string, unknown>;

  serialized.id = `${content.kind}-demo-${scenarioKey}`;

  return serialized;
}

export function createCliDemoOptions(
  director: ContentDirector = new ContentDirector(),
): CliDemoOption[] {
  return builderScenarioDefinitions.map((scenario) => ({
    key: scenario.key,
    label: scenario.label,
    run: () => scenario.run(director),
  }));
}

export function createBuilderPatternData(
  director: ContentDirector = new ContentDirector(),
): BuilderPatternData {
  return {
    id: "builder",
    name: "Builder",
    category: "Creational",
    summary:
      "Showcase how a director coordinates dedicated builders to create article, chapter, and novel content step by step.",
    sharedBaseBuilder: "ContentBuilder",
    concreteBuilders: ["ArticleBuilder", "ChapterBuilder", "NovelBuilder"],
    directorFlows: [
      "createArticleDraft",
      "createPublishedArticle",
      "createChapterDraft",
      "createNovelDraft",
    ],
    roles: builderRoles,
    flowSteps,
    diagram: builderDiagram,
    scenarios: builderScenarioDefinitions.map((scenario) => {
      const result = scenario.run(director);

      return {
        key: scenario.key,
        label: scenario.label,
        summary: scenario.summary,
        kind: result.kind,
        status: result.status,
        output: normalizeVolatileFields(result, scenario.key),
      };
    }),
  };
}

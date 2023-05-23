// Auto-generated from src/demo/builderDemoCatalog.ts
window.builderPatternData = {
  "id": "builder",
  "name": "Builder",
  "category": "Creational",
  "summary": "Showcase how a director coordinates dedicated builders to create article, chapter, and novel content step by step.",
  "sharedBaseBuilder": "ContentBuilder",
  "concreteBuilders": [
    "ArticleBuilder",
    "ChapterBuilder",
    "NovelBuilder"
  ],
  "directorFlows": [
    "createArticleDraft",
    "createPublishedArticle",
    "createChapterDraft",
    "createNovelDraft"
  ],
  "roles": [
    {
      "name": "Client",
      "description": "Uses predefined director flows instead of assembling content objects directly."
    },
    {
      "name": "ContentDirector",
      "description": "Picks the right concrete builder and applies a repeatable sequence of steps."
    },
    {
      "name": "Concrete Builders",
      "description": "Article, chapter, and novel builders enforce type-specific rules and validation."
    },
    {
      "name": "Products",
      "description": "ArticleContent, ChapterContent, and NovelContent are the finished objects returned to the client."
    }
  ],
  "flowSteps": [
    "Client selects a predefined director flow.",
    "Director creates the matching concrete builder.",
    "Builder collects required and optional fields step by step.",
    "Validation runs before the final content object is returned."
  ],
  "diagram": {
    "title": "Builder structure",
    "description": "The client calls the director, the director creates specialized builders, and each builder produces a concrete content type.",
    "viewBox": {
      "width": 920,
      "height": 430
    },
    "nodes": [
      {
        "id": "client",
        "label": "Client",
        "role": "client",
        "x": 56,
        "y": 54
      },
      {
        "id": "director",
        "label": "ContentDirector",
        "role": "director",
        "x": 300,
        "y": 54
      },
      {
        "id": "base-builder",
        "label": "ContentBuilder",
        "role": "base",
        "x": 544,
        "y": 54
      },
      {
        "id": "article-builder",
        "label": "ArticleBuilder",
        "role": "builder",
        "x": 116,
        "y": 212
      },
      {
        "id": "chapter-builder",
        "label": "ChapterBuilder",
        "role": "builder",
        "x": 362,
        "y": 212
      },
      {
        "id": "novel-builder",
        "label": "NovelBuilder",
        "role": "builder",
        "x": 608,
        "y": 212
      },
      {
        "id": "article-content",
        "label": "ArticleContent",
        "role": "product",
        "x": 116,
        "y": 334
      },
      {
        "id": "chapter-content",
        "label": "ChapterContent",
        "role": "product",
        "x": 362,
        "y": 334
      },
      {
        "id": "novel-content",
        "label": "NovelContent",
        "role": "product",
        "x": 608,
        "y": 334
      }
    ],
    "edges": [
      {
        "from": "client",
        "to": "director",
        "label": "uses"
      },
      {
        "from": "director",
        "to": "article-builder",
        "label": "creates"
      },
      {
        "from": "director",
        "to": "chapter-builder",
        "label": "creates"
      },
      {
        "from": "director",
        "to": "novel-builder",
        "label": "creates"
      },
      {
        "from": "base-builder",
        "to": "article-builder",
        "label": "extends"
      },
      {
        "from": "base-builder",
        "to": "chapter-builder",
        "label": "extends"
      },
      {
        "from": "base-builder",
        "to": "novel-builder",
        "label": "extends"
      },
      {
        "from": "article-builder",
        "to": "article-content",
        "label": "builds"
      },
      {
        "from": "chapter-builder",
        "to": "chapter-content",
        "label": "builds"
      },
      {
        "from": "novel-builder",
        "to": "novel-content",
        "label": "builds"
      }
    ]
  },
  "scenarios": [
    {
      "key": "1",
      "label": "Director: published article",
      "summary": "Creates a published article with slug, excerpt, tags, and a publish-only timestamp.",
      "kind": "article",
      "status": "published",
      "output": {
        "id": "article-demo-1",
        "tags": [
          "typescript",
          "builder"
        ],
        "status": "published",
        "createdAt": "2026-05-22T12:47:51.815Z",
        "updatedAt": "2026-05-22T12:47:51.815Z",
        "kind": "article",
        "title": "My First Article",
        "body": "This article was created through the director.",
        "authorId": "author123",
        "slug": "my-first-article",
        "excerpt": "A published article created through the director.",
        "publishedAt": "2026-05-22T12:47:51.815Z"
      }
    },
    {
      "key": "2",
      "label": "Director: second published article example",
      "summary": "Reuses the same director flow with different content to show repeatable construction.",
      "kind": "article",
      "status": "published",
      "output": {
        "id": "article-demo-2",
        "tags": [
          "builder",
          "director"
        ],
        "status": "published",
        "createdAt": "2026-05-22T12:47:51.816Z",
        "updatedAt": "2026-05-22T12:47:51.816Z",
        "kind": "article",
        "title": "Directed Article",
        "body": "The client now talks only to the director.",
        "authorId": "author123",
        "slug": "directed-article",
        "excerpt": "Another article scenario for the builder demo.",
        "publishedAt": "2026-05-22T12:47:51.816Z"
      }
    },
    {
      "key": "3",
      "label": "Director: chapter draft",
      "summary": "Builds a draft chapter that requires a novel reference and chapter number.",
      "kind": "chapter",
      "status": "draft",
      "output": {
        "id": "chapter-demo-3",
        "tags": [],
        "status": "draft",
        "createdAt": "2026-05-22T12:47:51.816Z",
        "updatedAt": "2026-05-22T12:47:51.816Z",
        "kind": "chapter",
        "title": "Chapter 1",
        "body": "A predefined draft built by the director.",
        "authorId": "author123",
        "novelId": "novel-001",
        "chapterNumber": 1
      }
    },
    {
      "key": "4",
      "label": "Director: novel draft",
      "summary": "Creates a draft novel while keeping the same builder workflow and validation style.",
      "kind": "novel",
      "status": "draft",
      "output": {
        "id": "novel-demo-4",
        "tags": [
          "novel",
          "patterns"
        ],
        "status": "draft",
        "createdAt": "2026-05-22T12:47:51.816Z",
        "updatedAt": "2026-05-22T12:47:51.816Z",
        "kind": "novel",
        "title": "The Pattern Book",
        "body": "A novel draft created through the director.",
        "authorId": "author123",
        "excerpt": "An early draft of a design-pattern novel."
      }
    },
    {
      "key": "5",
      "label": "Director: article draft",
      "summary": "Shows that the same article builder can produce a draft variant with no published timestamp.",
      "kind": "article",
      "status": "draft",
      "output": {
        "id": "article-demo-5",
        "tags": [],
        "status": "draft",
        "createdAt": "2026-05-22T12:47:51.816Z",
        "updatedAt": "2026-05-22T12:47:51.816Z",
        "kind": "article",
        "title": "Draft Article",
        "body": "A draft article created through the director.",
        "authorId": "author123",
        "slug": "draft-article",
        "excerpt": "Short preview"
      }
    }
  ]
};

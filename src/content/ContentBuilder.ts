import {
  BaseContent,
  ContentID,
  ContentStatus,
  ContentType,
} from "./BaseContent";
import {
  BuiltContent,
  ContentBuilderInterface,
} from "./ContentBuilderInterface";
import { ArticleContent } from "./article/ArticleContent";
import { ChapterContent } from "./chapter/ChapterContent";
import { NovelContent } from "./novel/NovelContent";

type BuilderState = Partial<BaseContent> & {
  title?: string;
  body?: string;
  tags?: string[];
  slug?: string;
  excerpt?: string;
  publishedAt?: Date;
  novelId?: ContentID;
  chapterNumber?: number;
};

const COMMON_REQUIRED_FIELDS = ["title", "body", "authorId"] as const;

export class ContentBuilder<
  TContent extends BuiltContent,
> implements ContentBuilderInterface<TContent> {
  protected content: BuilderState = {
    id: crypto.randomUUID(),
    tags: [],
    status: "draft",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  title(title: string): this {
    this.content.title = title;
    return this;
  }

  body(body: string): this {
    this.content.body = body;
    return this;
  }

  protected assignKind(kind: ContentType): this {
    this.content.kind = kind;
    return this;
  }

  type(kind: ContentType): this {
    return this.assignKind(kind);
  }

  tags(tags: string[]): this {
    this.content.tags = tags;
    return this;
  }

  tag(tag: string): this {
    this.content.tags = [...(this.content.tags ?? []), tag];
    return this;
  }

  status(status: ContentStatus): this {
    this.content.status = status;
    this.content.updatedAt = new Date();

    if (status === "published") {
      this.content.publishedAt = this.content.publishedAt ?? new Date();
    } else {
      delete this.content.publishedAt;
    }

    return this;
  }

  slug(slug: string): this {
    this.content.slug = slug;
    return this;
  }

  excerpt(excerpt: string): this {
    this.content.excerpt = excerpt;
    return this;
  }

  authorId(authorId: string): this {
    this.content.authorId = authorId;
    return this;
  }

  draft(): this {
    return this.status("draft");
  }

  published(): this {
    return this.status("published");
  }

  protected setChapterDetails(novelId: ContentID, chapterNumber: number): this {
    this.content.novelId = novelId;
    this.content.chapterNumber = chapterNumber;
    return this;
  }

  protected validateCommon(): void {
    const missingFields = COMMON_REQUIRED_FIELDS.filter(
      (field) => !this.content[field],
    );

    if (missingFields.length > 0) {
      const label = missingFields.length === 1 ? "field" : "fields";
      throw new Error(`Missing required ${label}: ${missingFields.join(", ")}`);
    }
  }

  protected ensurePublishedInvariant(): void {
    if (this.content.status === "published") {
      this.content.publishedAt = this.content.publishedAt ?? new Date();
    } else {
      delete this.content.publishedAt;
    }
  }

  build(): TContent {
    this.validateCommon();
    this.ensurePublishedInvariant();
    return this.content as TContent;
  }
}

export class ArticleContentBuilder extends ContentBuilder<ArticleContent> {
  constructor() {
    super();
    this.assignKind("article");
  }

  override type(_: ContentType): never {
    throw new Error("ArticleContentBuilder always builds article content.");
  }

  override build(): ArticleContent {
    this.validateCommon();
    this.ensurePublishedInvariant();

    const missingFields = ["slug", "excerpt"].filter(
      (field) => !this.content[field as keyof BuilderState],
    );

    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
    }

    return super.build();
  }
}

export class NovelContentBuilder extends ContentBuilder<NovelContent> {
  constructor() {
    super();
    this.assignKind("novel");
  }

  override type(_: ContentType): never {
    throw new Error("NovelContentBuilder always builds novel content.");
  }

  override build(): NovelContent {
    this.validateCommon();
    this.ensurePublishedInvariant();

    if (!this.content.excerpt) {
      throw new Error("Missing required field: excerpt");
    }

    return super.build();
  }
}

export class ChapterContentBuilder extends ContentBuilder<ChapterContent> {
  constructor() {
    super();
    this.assignKind("chapter");
  }

  override type(_: ContentType): never {
    throw new Error("ChapterContentBuilder always builds chapter content.");
  }

  novel(novelId: ContentID): this {
    this.content.novelId = novelId;
    return this;
  }

  chapterNumber(chapterNumber: number): this {
    this.content.chapterNumber = chapterNumber;
    return this;
  }

  override build(): ChapterContent {
    this.validateCommon();
    this.ensurePublishedInvariant();

    const missingFields = ["novelId", "chapterNumber"].filter(
      (field) => !this.content[field as keyof BuilderState],
    );

    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
    }

    return super.build();
  }
}

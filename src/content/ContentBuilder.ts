import { Content, ContentStatus, ContentType } from "./Content";
export class ContentBuilder {
  private content: Partial<Content> = {
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
  type(type: ContentType): this {
    this.content.type = type;
    return this;
  }

  tags(tags: string[]): this {
    this.content.tags = tags;
    return this;
  }

  status(status: ContentStatus): this {
    this.content.status = status;
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

  published(): this {
    this.content.status = "published";
    this.content.publishedAt = new Date();
    return this;
  }

  build(): Content {
    if (
      !this.content.title ||
      !this.content.body ||
      !this.content.type ||
      !this.content.authorId
    ) {
      throw new Error("Missing required fields");
    }
    return this.content as Content;
  }
}

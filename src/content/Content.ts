export type ContentType = "article" | "chapter" | "novel";

export type ContentStatus = "draft" | "published";

export interface Content {
  title: string;
  body: string;
  type: ContentType;
  tags: string[];
  status: ContentStatus;
  slug?: string;
  excerpt?: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  authorId: string;
}

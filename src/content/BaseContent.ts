export type ContentID = string;
export type AuthorId = string;
export type ContentStatus = "draft" | "published";
export type ContentType = "article" | "chapter" | "novel";

export interface BaseContent {
  id: ContentID;
  kind: ContentType;
  status: ContentStatus;
  createdAt: Date;
  updatedAt: Date;
  authorId: AuthorId;
}

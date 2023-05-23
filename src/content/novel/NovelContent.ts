import { BaseContent } from "../BaseContent";

export interface NovelContent extends BaseContent {
  title: string;
  body: string;
  tags: string[];
  excerpt: string;
  publishedAt: Date;
}

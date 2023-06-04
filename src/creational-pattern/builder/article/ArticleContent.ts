import { BaseContent } from "../BaseContent";

export interface ArticleContent extends BaseContent {
  title: string;
  body: string;
  tags: string[];
  slug: string;
  excerpt: string;
  publishedAt: Date;
}

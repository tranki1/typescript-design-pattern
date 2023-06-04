import { ContentStatus } from "./BaseContent";
import { ArticleContent } from "./article/ArticleContent";
import { ChapterContent } from "./chapter/ChapterContent";
import { NovelContent } from "./novel/NovelContent";

export type BuiltContent = ArticleContent | ChapterContent | NovelContent;

export interface ContentBuilderInterface<TContent extends BuiltContent> {
  title(title: string): this;
  body(body: string): this;
  tag(tag: string): this;
  tags(tags: string[]): this;
  status(status: ContentStatus): this;
  slug(slug: string): this;
  excerpt(excerpt: string): this;
  authorId(authorId: string): this;
  draft(): this;
  published(): this;
  build(): TContent;
}

import { AuthorId, ContentID } from "./BaseContent";
import {
  ArticleBuilder,
  ChapterBuilder,
  NovelBuilder,
} from "./TypedContentBuilders";
import { ArticleContent } from "./article/ArticleContent";
import { ChapterContent } from "./chapter/ChapterContent";
import { NovelContent } from "./novel/NovelContent";

type CommonInput = {
  title: string;
  body: string;
  authorId: AuthorId;
};

type ArticleInput = CommonInput & {
  tags?: string[];
  slug: string;
  excerpt: string;
};

type NovelInput = CommonInput & {
  tags?: string[];
  excerpt: string;
};

type ChapterInput = CommonInput & {
  novelId: ContentID;
  chapterNumber: number;
};

export class ContentDirector {
  createArticleDraft(input: ArticleInput): ArticleContent {
    return new ArticleBuilder()
      .title(input.title)
      .body(input.body)
      .authorId(input.authorId)
      .tags(input.tags ?? [])
      .slug(input.slug)
      .excerpt(input.excerpt)
      .draft()
      .build();
  }

  createPublishedArticle(input: ArticleInput): ArticleContent {
    return new ArticleBuilder()
      .title(input.title)
      .body(input.body)
      .authorId(input.authorId)
      .tags(input.tags ?? [])
      .slug(input.slug)
      .excerpt(input.excerpt)
      .published()
      .build();
  }

  createChapterDraft(input: ChapterInput): ChapterContent {
    return new ChapterBuilder()
      .title(input.title)
      .body(input.body)
      .authorId(input.authorId)
      .novel(input.novelId)
      .chapterNumber(input.chapterNumber)
      .draft()
      .build();
  }

  createNovelDraft(input: NovelInput): NovelContent {
    return new NovelBuilder()
      .title(input.title)
      .body(input.body)
      .authorId(input.authorId)
      .tags(input.tags ?? [])
      .excerpt(input.excerpt)
      .draft()
      .build();
  }
}

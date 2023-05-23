import { BaseContent, ContentID } from "../BaseContent";

export interface ChapterContent extends BaseContent {
  title: string;
  body: string;
  novelId: ContentID;
  chapterNumber: number;
  publishedAt: Date;
}

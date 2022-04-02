import { ParagraphModel } from './paragraph.model';

export class SubsectionModel {
  name: string;
  paragraphs: Array<ParagraphModel>;
  images: Array<string>;
  videos: Array<string>;
  references: Array<string>;
  isLastSubsection: boolean = false;
  isLastSection: boolean = false;
  isFirstSection: boolean = false;
  isFirstSubsection: boolean = false;
  previousSubsection: number = 1;

  constructor(
    name: string,
    paragraphs: Array<ParagraphModel>,
    images: Array<string>,
    videos: Array<string>,
    references: Array<string>,
    isLastSubsection?: boolean,
    isLastSection?: boolean,
    isFirstSection?: boolean,
    isFirstSubsection?: boolean,
    previousSubsection?: number
  ) {
    this.name = name;
    this.paragraphs = paragraphs;
    this.images = images;
    this.videos = videos;
    this.references = references;
    this.isLastSubsection = !!isLastSubsection;
    this.isLastSection = !!isLastSection;
    this.isFirstSection = !!isFirstSection;
    this.isFirstSubsection = !!isFirstSubsection;
    if (previousSubsection) {
      this.previousSubsection = previousSubsection;
    }
  }
}

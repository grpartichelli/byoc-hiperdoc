export class SubsectionModel {
  paragraphs: Array<string>;
  images: Array<string>;
  videos: Array<string>;
  references: Array<string>;
  isLastSubsection: boolean = false;
  isLastSection: boolean = false;

  constructor(
    paragraphs: Array<string>,
    images: Array<string>,
    videos: Array<string>,
    references: Array<string>,
    isLastSubsection?: boolean,
    isLastSection?: boolean
  ) {
    this.paragraphs = paragraphs;
    this.images = images;
    this.videos = videos;
    this.references = references;
    this.isLastSubsection = !!isLastSubsection;
    this.isLastSection = !!isLastSection;
  }
}

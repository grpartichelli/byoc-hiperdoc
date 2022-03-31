export class SubsectionModel {
  name: string;
  paragraphs: Array<string>;
  images: Array<string>;
  videos: Array<string>;
  references: Array<string>;
  isLastSubsection: boolean = false;
  isLastSection: boolean = false;

  constructor(
    name: string,
    paragraphs: Array<string>,
    images: Array<string>,
    videos: Array<string>,
    references: Array<string>,
    isLastSubsection?: boolean,
    isLastSection?: boolean
  ) {
    this.name = name;
    this.paragraphs = paragraphs;
    this.images = images;
    this.videos = videos;
    this.references = references;
    this.isLastSubsection = !!isLastSubsection;
    this.isLastSection = !!isLastSection;
  }
}

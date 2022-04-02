export class ParagraphModel {
  title: string;
  text: string;
  image: string = '';

  constructor(title: string, text: string, image?: string) {
    this.text = text;
    this.title = title;
    if (image) {
      this.image = image;
    }
  }
}

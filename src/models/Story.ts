export interface Story {
  id: number;
  description: string;
  image: string;
  url: string;
  name: string;
  author: string;
  [x: string]: any;
}

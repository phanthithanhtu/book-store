export interface Story {
  id: number;
  name: string;
  title: string;
  author: string;
  year: number;
  views: number;
  rating: number;
  image: string;
  genreName: string[];
  description: string;
  status: boolean;
  approvalStatus: boolean;
  genreIds: any[] | null;
}

export type Moviecardprops = {
  popup: popup;
  handleDelete: (
    id: number,
    modaltype: string,
    event: React.MouseEvent<HTMLElement>
  ) => void;
  movie: Movie;
  Openmoviedetail: (movie: Movie, event: React.MouseEvent<HTMLElement>) => void;
};
export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: [string];
  runtime: number;
}
export type TypeMovie = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: [string];
  runtime: number;
};
export type popup = {
  show: boolean;
  id: null | number;
  modaltype: string;
};
export interface Deletemodalprops {
  handleDeleteTrue: () => void;
  handleDeleteFalse: () => void;
}

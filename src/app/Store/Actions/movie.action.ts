import { createAction, props } from '@ngrx/store';
import { Movie } from '../../Models/moviemodel';
export const getMoviesDetailaction = createAction('[Movie] Get Movie');
export const getMoviesSuccessfullaction = createAction(
  '[Movie] Get Movie Successfull ',
  // (movies: ReadonlyArray<Movie>) => movies
  props<{ movies: ReadonlyArray<Movie> }>()
);
export const addMoviesDetailaction = createAction(
  '[Movie] Add Movie',
  (movie: Movie) => movie
);
export const addMoviesSuccessfullaction = createAction(
  '[Movie] Add Movie Successfull',
  props<{ movie: Movie }>()
);

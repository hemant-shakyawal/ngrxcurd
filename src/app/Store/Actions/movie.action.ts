import { createAction, props } from '@ngrx/store';
import { Movie } from '../../Models/moviemodel';
export const getMoviesDetailaction = createAction('[Movie] Get Movie');
export const addMoviesDetailaction = createAction(
  '[Movie] Add Movie',
  (movie: Movie) => movie
);
export const addMoviesSuccessfullaction = createAction(
  '[Movie] Add Movie Successfull'
);

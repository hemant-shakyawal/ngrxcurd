import { createReducer, on } from '@ngrx/store';
import { Movie } from '../../Models/moviemodel';
import {
  addMoviesDetailaction,
  getMoviesDetailaction,
  getMoviesSuccessfullaction,
  addMoviesSuccessfullaction,
} from '../Actions/movie.action';
export interface Moviestate {
  movies: ReadonlyArray<Movie>;
}

const initialState: ReadonlyArray<Movie> = [];
export const movieReducer = createReducer(
  initialState,
  on(getMoviesSuccessfullaction, (state, { movies }) => [...movies]),
  on(addMoviesSuccessfullaction, (state, { movie }) => [...state, movie])
);

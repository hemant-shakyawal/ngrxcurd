import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, EmptyError, exhaustMap, map } from 'rxjs';
//import { EmptyError } from 'rxjs';
//import { catchError, concatMap, exhaustMap, map, tap, EmptyError } from 'rxjs';
import { MoviedataService } from '../../shared/moviedata.service';
import {
  addMoviesDetailaction,
  addMoviesSuccessfullaction,
  getMoviesDetailaction,
  getMoviesSuccessfullaction,
} from '../Actions/movie.action';
@Injectable()
export class MovieEffect {
  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMoviesDetailaction),
      exhaustMap(() =>
        this.MoviedataService.getMoviedetails().pipe(
          map((movies) => getMoviesSuccessfullaction({ movies }))
          //catchError(() => EmptyError)
        )
      )
    )
  );
  addMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(addMoviesDetailaction),
      concatMap((newMovie) =>
        this.MoviedataService.addmovie(newMovie).pipe(
          map((movie) => addMoviesSuccessfullaction({ movie }))
          // catchError(() => EmptyError)
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private MoviedataService: MoviedataService
  ) {}
}

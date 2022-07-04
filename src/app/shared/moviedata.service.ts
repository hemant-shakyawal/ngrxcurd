import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movie } from '../Models/moviemodel';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviedataService {
  private url = 'api/movies/';
  constructor(private http: HttpClient) {}
  getMoviedetails(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }
  addmovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.url, movie).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }
}

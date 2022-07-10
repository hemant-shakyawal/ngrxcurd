import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../Models/moviemodel';
@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      movies: this.mockMovies(),
    };
  }

  private mockMovies(): Movie[] {
    const movie = new Movie(
      1,
      'Doctor strange in the multiverse of madness',
      2798,
      new Date('26 Apr, 2022 05:30:00')
    );
    // movie.id = 1;

    const movie1 = new Movie(
      2,
      'Spider-Man: No Way Home',
      2048,
      new Date('17 Dec, 2021 05:30:00')
    );
    // movie1.id = 2;

    const movie2 = new Movie(
      3,
      'Eternals',
      1403,
      new Date('05 Nov, 2021 05:30:00')
    );
    // movie2.id = 3;

    const movies = [movie, movie1, movie2];
    return movies;
  }
}

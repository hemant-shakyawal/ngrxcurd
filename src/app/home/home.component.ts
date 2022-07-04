import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MoviedataService } from '../shared/moviedata.service';
import { Movie } from '../Models/moviemodel';
import {
  addMoviesDetailaction,
  getMoviesDetailaction,
} from '../Store/Actions/movie.action';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  constructor(private moviedata: MoviedataService, private Store: Store) {}

  ngOnInit(): void {
    this.getAllMoviesdetails();
  }
  getAllMoviesdetails(): void {
    this.Store.dispatch(getMoviesDetailaction());
    this.moviedata.getMoviedetails().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  addMovies(): void {
    this.Store.dispatch(addMoviesDetailaction(this.newMovie));
    this.moviedata.addmovie(this.newMovie).subscribe((res) => {
      this.getAllMoviesdetails();
      this.newMovie = new Movie();
    });
  }
}

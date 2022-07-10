import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../Models/moviemodel';
import { Moviestate } from '../Store/Reducer/movie.reducer';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
})
export class MovielistComponent implements OnInit {
  @Input()
  movies: Movie[] = [];
  movies$ = this.store.select('movies'); //movies$ is the observable and it select the movies from StoreModule that provide in app.module.ts
  constructor(private store: Store<Moviestate>) {}

  ngOnInit(): void {}
}

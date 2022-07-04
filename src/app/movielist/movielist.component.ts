import { Component, OnInit,Input } from '@angular/core';
import {Movie}from '../Models/moviemodel'
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  @Input()
  movies: Movie[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

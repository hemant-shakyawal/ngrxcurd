import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './shared/in-memory.service';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MovielistComponent } from './movielist/movielist.component';
import { movieReducer } from './Store/Reducer/movie.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffect } from './Store/Effects/movie.effect';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovielistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ movies: movieReducer }), // provide reducer in StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([MovieEffect]),
  ],
  exports: [MaterialModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}

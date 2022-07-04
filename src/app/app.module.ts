import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
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
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    HttpClientModule,
    FormsModule,
  ],
  exports: [MaterialModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}

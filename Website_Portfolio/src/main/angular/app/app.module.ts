import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPartMe } from './app-part-me/app-part-me.component';
import { AppPartProjects } from './app-part-projects/app-part-projects.component';
import { AppPartProjectPrev } from './app-part-project-prev/app-part-project-prev.component';
import { AppPartProjectsFavorites } from './app-part-proects-favorites/app-part-projects-favorites.component';
import { AppPartProectsAll } from './app-part-proects-all/app-part-projects-all.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AppPartMe,
    AppPartProjects,
    AppPartProjectPrev,
    AppPartProjectsFavorites,
    AppPartProectsAll
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
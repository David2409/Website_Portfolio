import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPartMe } from './app-part-me/app-part-me.component';
import { AppPartProjects } from './app-part-projects/app-part-projects.component';
import { AppPartProjectPrev } from './app-part-project-prev/app-part-project-prev.component';
import { AppPartProjectsFavorites } from './app-part-projects-favorites/app-part-projects-favorites.component';
import { AppPartProjectsAll } from './app-part-projects-all/app-part-projects-all.component';
import { AppPartProjectsAllTags } from './app-part-projects-all-tags/app-part-projects-all-tags.component';
import { AppPartProjectView } from './app-part-project-view/app-part-project-view.component';
import { AppPartGeneral } from './app-part-general/app-part-general.component';

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
    AppPartProjectsAll,
    AppPartProjectsAllTags,
    AppPartProjectView,
    AppPartGeneral
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule 
{ 
  
}
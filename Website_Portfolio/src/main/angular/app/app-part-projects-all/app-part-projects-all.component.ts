import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { tagsURL, projectsSearch, changeLayout, imageURL } from '../../settings';

@Component({
  selector: 'app-part-projects-all',
  templateUrl: './app-part-projects-all.component.html',
  styleUrls: ['./app-part-projects-all.component.css']
})
export class AppPartProjectsAll implements OnInit {

  @Output() clicked = new EventEmitter();

  tags;
  selectedTags:[];
  selectedName;
  projects;
  showSmall:boolean;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.Get(tagsURL.URL).subscribe((data:any ) => {
      this.tags = data;
    });
  }

  Search() {
    this.dataService.Get(projectsSearch.URL + this.selectedName + "/" + this.GetTags()).subscribe((data:any ) => {
      if(window.innerWidth <= changeLayout){
        this.showSmall = false;
      }
      else{
        this.showSmall = true;
      }
      this.projects = data;
      for(var i = 0; i < this.projects.length; i++){
        this.projects[i].coverpicture = imageURL.URL + this.projects[i].coverpicture;
      }
      console.log(this.projects);
    });
  }

  GetTags(){
    var erg = "";
    for(var i = 0; i < this.selectedTags.length; i++){
      erg += this.selectedTags[i] + ",";
    }
    return erg;
  }
}
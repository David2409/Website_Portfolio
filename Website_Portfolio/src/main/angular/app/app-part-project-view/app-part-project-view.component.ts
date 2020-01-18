import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { projectsURL, imageURL } from '../../settings';

@Component({
  selector: 'app-part-project-view',
  templateUrl: './app-part-project-view.component.html',
  styleUrls: ['./app-part-project-view.component.css']
})
export class AppPartProjectView implements OnInit {

  //@Input() pid;
  
  @Output() clicked = new EventEmitter();
  @Input() project;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    /*
    this.dataService.Get(projectsURL.URL + "/" +  this.pid).subscribe((data:any ) => {
      this.project = data;
      this.project.coverpicture = imageURL.URL + this.project.coverpicture;
    });
    */
  }
}

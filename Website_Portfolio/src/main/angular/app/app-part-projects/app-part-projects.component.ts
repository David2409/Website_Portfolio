import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { projectsURL} from '../../settings';

@Component({
  selector: 'app-part-projects',
  templateUrl: './app-part-projects.component.html',
  styleUrls: ['./app-part-projects.component.css']
})
export class AppPartProjects implements OnInit {

  @Output() clicked = new EventEmitter();
  projects;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.Get(projectsURL.URL).subscribe((data:any ) => {
      this.projects = data;
    });
  }
}


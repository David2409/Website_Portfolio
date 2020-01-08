import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { projectsPrevURL } from '../../settings';

@Component({
  selector: 'app-part-project-prev',
  templateUrl: './app-part-project-prev.component.html',
  styleUrls: ['./app-part-project-prev.component.css']
})
export class AppPartProjectPrev implements OnInit {
  
  @Input() id: string;
  
  project;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.Get(projectsPrevURL.URL + this.id + projectsPrevURL.end).subscribe((data:any []) => {
      this.project = data;
    })
  }
}
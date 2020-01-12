import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { projectsFavorURL} from '../../settings';

@Component({
  selector: 'app-part-projects-favorites',
  templateUrl: './app-part-projects-favorites.component.html',
  styleUrls: ['./app-part-projects-favorites.component.css']
})

export class AppPartProjectsFavorites implements OnInit {

  packages;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.Get(projectsFavorURL.URL).subscribe((data:any ) => {
      this.packages = data;
    });
  }
}
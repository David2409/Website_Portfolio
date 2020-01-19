import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { generalURL } from '../../settings';

@Component({
  selector: 'app-part-general',
  templateUrl: './app-part-general.component.html',
  styleUrls: ['./app-part-general.component.css']
})
export class AppPartGeneral implements OnInit {

  constructor(private dataService: DataService) { }

  data

  ngOnInit() {
    this.dataService.Get(generalURL.URL).subscribe((data:any []) => {
      this.data = data;
    });
  }
}

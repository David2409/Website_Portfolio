import { Component, OnInit } from '@angular/core';
import { aboutMeURL } from '../../settings';
import { DataService } from '../data.service';

@Component({
  selector: 'app-part-me',
  templateUrl: './app-part-me.component.html',
  styleUrls: ['./app-part-me.component.css']
})

export class AppPartMe implements OnInit {

  aboutMe;

  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.Get(aboutMeURL.URL).subscribe((data:any []) => {
      this.aboutMe = data;
    })
  }
}
import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { projectsFavorURL, changeLayout, imageURL, projectDownloadURL } from '../../settings';

@Component({
  selector: 'app-part-projects-favorites',
  templateUrl: './app-part-projects-favorites.component.html',
  styleUrls: ['./app-part-projects-favorites.component.css']
})

export class AppPartProjectsFavorites implements OnInit {

  @Output() clicked = new EventEmitter();
  receivedData;
  packages = [];
  mode:boolean = null;
  fav3:HTMLElement;
  fav1:HTMLElement;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.Get(projectsFavorURL.URL).subscribe((data:any ) => {
      this.receivedData = data;
      for(var i = 0; i < this.receivedData.length; i++){
        this.receivedData[i].coverpicture = imageURL.URL + this.receivedData[i].coverpicture;
        this.receivedData[i].file = projectDownloadURL.URL + this.receivedData[i].file;
      }
      this.GeneratePackages(3);
      this.Resize();
    });
  }

  GeneratePackages(packagesSize: number) {
    this.packages = [];
    for(var i = 0; i < this.receivedData.length; i+=packagesSize){
      var p = [];
      for(var i2 = 0; i+ i2 < this.receivedData.length && i2 < packagesSize; i2++){
        p.push(this.receivedData[i+i2]);
      }
      this.packages.push(p);
    }
  };


  @HostListener('window:resize', ['$event'])
  Resize() {
    if(window.innerWidth <= changeLayout && this.mode != true){
      this.GeneratePackages(1);
      this.mode = true;
      /*
      this.fav3.style.display = "none";
      this.fav1.style.display = "";
      */
    } else if(window.innerWidth > changeLayout && this.mode != false){
      this.GeneratePackages(3);
      this.mode = false;
      /*
      this.fav1.style.display = "none";
      this.fav3.style.display = "";
      */
    }
  }
}

import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { projectsURL, imageURL, changeLayout } from '../../settings';
import { element } from 'protractor';

@Component({
  selector: 'app-part-project-prev',
  templateUrl: './app-part-project-prev.component.html',
  styleUrls: ['./app-part-project-prev.component.css']
})
export class AppPartProjectPrev implements OnInit {
  
  //@Input() mId: string;
  
  @Output() clicked = new EventEmitter();
  @Input() project;
  thisObject;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    /*
    this.dataService.Get(projectsURL.URL + this.mId).subscribe((data:any []) => {
      this.project = data;
      this.project.coverpicture = imageURL.URL + this.project.coverpicture;
    })*/
  } 
  View(){
    this.clicked.emit(this.project);
  }
}

var mode = null;

window.addEventListener('resize', ResizeAllProjectPrev);

function ResizeAllProjectPrev(){
  if(window.innerWidth <= changeLayout && mode != true){
    var elements = document.getElementsByTagName("app-part-project-prev");
    for(var i = 0; i < elements.length; i++){
      elements[i].classList.remove("col-4");
    }
    mode = true;
  } else if(window.innerWidth > changeLayout && mode != false){
    var elements = document.getElementsByTagName("app-part-project-prev");
    for(var i = 0; i < elements.length; i++){
      elements[i].classList.add("col-4");
    }
    mode = false;
  }
}
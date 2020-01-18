import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { tagsURL, projectsSearch } from '../../settings';
import { element } from 'protractor';

@Component({
  selector: 'app-part-projects-all-tags',
  templateUrl: './app-part-projects-all-tags.component.html',
  styleUrls: ['./app-part-projects-all-tags.component.css']
})
export class AppPartProjectsAllTags implements OnInit {

  @Output() outTags = new EventEmitter();
  @Output() outClick = new EventEmitter();
  @Output() outName = new EventEmitter();

  inputName;
  tags;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.inputName = document.getElementById("inputName");
    this.dataService.Get(tagsURL.URL).subscribe((data:any ) => {
      this.tags = data.tags;
    });
  }

  Search(){
    var elmTags = document.getElementsByClassName("inputTag");
    var ergT:String[] = [];
    for(var i = 0; i < elmTags.length;i++){
      if(elmTags[i]["checked"]){
        ergT.push(elmTags[i].id);
      }
    }
    this.outTags.emit(ergT);
    if(this.inputName.value == ""){
      this.outName.emit("%20")
    }
    else{
      this.outName.emit(this.inputName.value);
    }
    this.outClick.emit();
  }
}
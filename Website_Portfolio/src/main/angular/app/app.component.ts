import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.main = document.getElementById("main");
    this.view = document.getElementById("view");
  }
  title = 'Davids Website';

  projectViewed;
  main;
  view;

  projectClick(){
    this.main.style.display = "none";
    this.view.style.display = "";
  }
  viewClick(){
    this.main.style.display = "";
    this.view.style.display = "none";
  }
}

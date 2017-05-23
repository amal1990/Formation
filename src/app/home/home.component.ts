import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    /* EC5
    var x='hello';
    var y=x + 'wold'; */
    // EC6
   let x = 'hello';
   let y = x + 'world';
  }

  ngOnInit() {
  }

}

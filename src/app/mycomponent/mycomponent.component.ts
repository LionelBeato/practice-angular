import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  x: string = 'hello'

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.x)
  }

}

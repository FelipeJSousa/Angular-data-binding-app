import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  
  componentname = "string-interpolation";
  person ={
    firstname: "Felipe",
    lastname: "Sousa",
    age: 21
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}

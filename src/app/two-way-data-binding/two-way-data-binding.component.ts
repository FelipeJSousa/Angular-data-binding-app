import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string = "name1";
  name2: string = "name2";

  client = {
    firstName: "John",
    lastName: "Michael",
    address: "Avenue St. Jonny",
    age: 49
  }

  constructor() { }

  ngOnInit(): void {
  }

}

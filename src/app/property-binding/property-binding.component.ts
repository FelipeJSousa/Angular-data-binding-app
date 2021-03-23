import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  colors: Array<string> = ["primary","accent", "warn", ""];
  colorprimary: string = "primary";
  colorwarn: string = "warn";
  idx = 0;

  btnDisabled = false;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.idx === this.colors.length-1 ? this.idx = 0 : this.idx += 1 % this.colors.length;
    }, 2000);
  }

}

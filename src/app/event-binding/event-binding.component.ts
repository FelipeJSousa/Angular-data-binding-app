import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  btnName: string = "Incrementar Intervalo";
  i = 0;
  spinnerMode: string = "determinate";
  value = "0";
  btnDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log("Clicado!");
  }

  inc(){
    this.i += 1;
  }

  dec(){
    this.i -= 1;
  }
  disableBtn(){
    console.log("Botões Desabilitados")
    this.spinnerMode = "indeterminate"
    this.btnDisabled = true;
    let timerId;
    if(this.i !== 0){
       timerId = setInterval(()=>{
        this.i-=1;
      },this.i*1000/this.i)
    }
    setTimeout(() => {
      clearInterval(timerId);
      this.spinnerMode = "determinate";
      this.btnDisabled = false;
    }, this.i*1000);
  }
}

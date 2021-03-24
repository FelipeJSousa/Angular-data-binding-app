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

  cbdisable = true;
  cbcontent: string = "Desabilitado" ;

  selectDisabled= true;
  selectedOption = 0;

  inputName = "";

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

  cbtrigger(marcacao: boolean){
    this.cbdisable = !marcacao;
    marcacao == false ? this.cbcontent = "Desabilitado": this.cbcontent = "Habilitar select";
  }
  
  selectTrigger(marcacao: boolean){
    this.selectDisabled = !marcacao;
  }

  selectionChange(value){
    console.log(value)
    this.selectedOption = value;
  }

  // inputEvent(event){
  //   console.log(event);
  //   this.inputName = event;
  // }
}

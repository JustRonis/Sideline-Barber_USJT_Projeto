import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.css']
})
export class CortesComponent implements OnInit {

  tipoCorte: string = "";
  valorCorte: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  tipoCorteCabelo() {
    this.tipoCorte = "Cabelo";
  }

  valorCorteCabelo(){
    this.valorCorte = "R$65,00";
  }

  tipoCorteBarba() {
    this.tipoCorte = "Barba";
  }
  valorCorteBarba(){
    this.valorCorte = "R$50,00";
  }

  tipoCorteCabeloBarba() {
    this.tipoCorte = "Cabelo + Barba";
  }
  valorCorteCabeloBarba(){
    this.valorCorte = "R$100";
  }

  

}

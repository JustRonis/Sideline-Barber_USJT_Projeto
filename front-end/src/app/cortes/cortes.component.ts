import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.css']
})
export class CortesComponent implements OnInit {

  tipoCorte: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  tipoCorteCabelo() {
    this.tipoCorte = "cabelo";
  }

  tipoCorteBarba() {
    this.tipoCorte = "barba";
  }

  tipoCorteCabeloBarba() {
    this.tipoCorte = "cabelo + barba";
  }

}

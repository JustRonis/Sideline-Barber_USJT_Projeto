import { Component, Input, OnInit } from '@angular/core';

type NewType = String;

@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.css']
})
export class ModalCompraComponent implements OnInit {

  @Input() id: any;
  @Input() tipoCorte: any = "";
  @Input() valorCorte: any = "";

  constructor() { }

  ngOnInit(): void {
  }

}

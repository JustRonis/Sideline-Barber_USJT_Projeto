import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-seguranca',
  templateUrl: './modal-seguranca.component.html',
  styleUrls: ['./modal-seguranca.component.css']
})
export class ModalSegurancaComponent implements OnInit {

  @Input() id: any;

  constructor() { }

  ngOnInit(): void {
  }

}

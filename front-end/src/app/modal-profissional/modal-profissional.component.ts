import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-profissional',
  templateUrl: './modal-profissional.component.html',
  styleUrls: ['./modal-profissional.component.css']
})
export class ModalProfissionalComponent implements OnInit {

  @Input() id: any;

  constructor() { }

  ngOnInit(): void {
  }

}

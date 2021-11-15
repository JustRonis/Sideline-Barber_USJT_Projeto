import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-necessario',
  templateUrl: './modal-necessario.component.html',
  styleUrls: ['./modal-necessario.component.css']
})
export class ModalNecessarioComponent implements OnInit {

  @Input() id: any;

  constructor() { }

  ngOnInit(): void {
  }

}

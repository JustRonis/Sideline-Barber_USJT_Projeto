import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-exclusivo',
  templateUrl: './modal-exclusivo.component.html',
  styleUrls: ['./modal-exclusivo.component.css']
})
export class ModalExclusivoComponent implements OnInit {

  @Input() id: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  @Input() id: any;

  constructor() { }

  ngOnInit(): void {
  }

}

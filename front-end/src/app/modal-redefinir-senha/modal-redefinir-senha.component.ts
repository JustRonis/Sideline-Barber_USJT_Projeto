import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-redefinir-senha',
  templateUrl: './modal-redefinir-senha.component.html',
  styleUrls: ['./modal-redefinir-senha.component.css']
})
export class ModalRedefinirSenhaComponent implements OnInit {
  @Input() id: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}

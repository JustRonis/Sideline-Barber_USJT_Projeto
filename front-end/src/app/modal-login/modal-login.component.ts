import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  loginForm!: FormGroup;
  @Input() id: any;

  submitted = false;
  get f() { return this.loginForm.controls; }

  constructor(private formBuilder: FormBuilder,
              private spinner: NgxSpinnerService,
              private loginSerive: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      senha: this.formBuilder.control('', [Validators.required]),
    });
  }

  save(loginForm: any) {
    this.spinner.show();
    this.loginSerive.login(loginForm)
        .subscribe((mensagem: any) => {
          console.log(mensagem);
          this.spinner.hide();
     },error=>{
       console.log(error);
      this.spinner.hide();
     });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.save(this.loginForm.value);
  }

}

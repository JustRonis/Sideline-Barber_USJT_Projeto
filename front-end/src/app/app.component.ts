import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  validarUrl(): boolean {
    let currentUrl = this.router.url;
    if(currentUrl === "/login"){
       return false;
    }
    return true
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  token: string = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  setToken() {
    if(this.token.length != 0) {
      localStorage.setItem("token", this.token);
      this.token = '';
    }

  }

  hasToken(): boolean {
    return this.token.length == 0;
  }

}

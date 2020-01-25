import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {LoginService} from "./login.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  checkoutForm;
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ){
    this.checkoutForm = this.formBuilder.group({
      userName:'',
      password:''
    });


  }
  onSubmit(customerData){
    console.warn()
  }
  title = 'login';
}

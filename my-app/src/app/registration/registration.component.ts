import { Component } from "@angular/core";
import {RegistrationService} from "./registration.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent{
  checkoutForm;
  constructor(private registrationService: RegistrationService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      confirmPass:''
    })
  }

  onSubmit(registrationData) {
    // Process checkout data here
    console.warn('Your order has been submitted', registrationData);
    //this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}

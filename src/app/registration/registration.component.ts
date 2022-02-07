import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "./registration.service";
import {Registration} from "./registration.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  message: string;
  registration: Registration;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control('', Validators.required)
    })
  }

  onSubmit() {
    // console.log(this.form.value);
    this.registration = this.form.value as Registration;

    this.registrationService.postRegistration(this.registration)
      .then(result => {
        this.form.reset();
        console.info(result);
        this.message = result.message;
      })
      .catch(error => {
        alert('error has occurred');
        console.error(error);
      })

    /*this.registrationService.sendToServer(this.form).subscribe(res => {
      console.log(res);
      this.message = res.message;
    }, error => {
      console.log(error);
    });*/
  }
}

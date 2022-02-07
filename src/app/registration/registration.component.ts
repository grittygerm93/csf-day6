import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegistrationService} from "./registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control('')
    })
  }

  onSubmit() {
    // console.log(this.form.value);
    this.registrationService.sendToServer(this.form).subscribe(res => {
      console.log(res);
      this.message = res.message;
    }, error => {
      console.log(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  get email(){
    return this.form.get('email');
  }
  // logObj(email: any) {
  //   console.log(email);
  // }
  // submit(form: NgForm) {
  //   console.log(form);
  // }

  form = new FormGroup({
    email: new FormControl('', CustomValidators.email),
    password: new FormControl()
  });

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
    });
  }

  login() {
    if (this.form.valid) {
      this.router.navigateByUrl('/quotes');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/user-info';
import { LocalStorageService } from 'src/app/services/utilities/local-storage.service';
import { LocalStorage } from 'src/app/constants/local-storage';
import { AuthenticationService } from 'src/app/services/api/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
    });
  }

  async login() {
    if (this.form.invalid) { return; }

    const userInfo: UserInfo = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    // here it shows how to get the data from API. Since I don't have login API I have commented out.

    /* this.authenticationService.login(userInfo).subscribe(async (res: any) => {
      await this.localStorageService.set(LocalStorage.USER_INFO, userInfo);
      this.router.navigateByUrl('/quotes');
    }, error => { console.log(error); },
      () => { }); */

    await this.localStorageService.set(LocalStorage.USER_INFO, userInfo);
    this.router.navigateByUrl('/quotes');
  }

}

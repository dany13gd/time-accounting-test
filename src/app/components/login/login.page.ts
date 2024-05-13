import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
})
export class LoginPage {
  private username= 'admin';
  private password = 'admin';
  private environment = 'INTG';
  public loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    environment: new FormControl('', Validators.required)
    })
  
    constructor(private router: Router) {
  
    }
    login() {
      // this.store.dispatch(login({ username, password, environment }));
      if (this.loginForm.get('username')?.value === this.username && this.loginForm.get('password')?.value === this.password && this.loginForm.get('environment')?.value === this.environment){
        this.router.navigate(['home']);
      } else {
        alert('Invalid username or password');
      }
  
    }

}

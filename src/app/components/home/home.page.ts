import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private username= 'admin';
  private password = 'admin';
  private environment = 'dev';
  public loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    environment: new FormControl('', Validators.required)
    })
  
    constructor(private router: Router) {
  
    }
  
    // login(username: string, password: string, environment: string) {
    //   this.store.dispatch(login({ username, password, environment }));
    //   if (this.loginForm.get('username')?.value === this.username && this.loginForm.get('password')?.value === this.password && this.loginForm.get('environment')?.value === this.environment){
    //     this.router.navigate(['home']);
    //   } else {
    //     alert('Invalid username or password');
    //   }
    //
    // }
    login() {
      // this.store.dispatch(login({ username, password, environment }));
      if (this.loginForm.get('username')?.value === this.username && this.loginForm.get('password')?.value === this.password && this.loginForm.get('environment')?.value === this.environment){
        this.router.navigate(['home']);
      } else {
        alert('Invalid username or password');
      }
  
    }

}

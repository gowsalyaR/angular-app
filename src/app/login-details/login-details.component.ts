import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent {
  username!: string;
  password!: string;

  constructor(private router:Router){}

  onSubmit() {
    //connect backend to check user and pass else return to signIn page with
    //warning
  
    this.router.navigate(['/main-details']);
  }
}

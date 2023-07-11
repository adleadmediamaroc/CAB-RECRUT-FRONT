import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { TokenStorageService } from '../services/token-storage-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})export class LoginComponent implements OnInit{
  username!:string;
  password!:string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[]= [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/'])
        // this.reloadPage();
      },
      err => {
        this.errorMessage = err.message;
        console.log(err);
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}

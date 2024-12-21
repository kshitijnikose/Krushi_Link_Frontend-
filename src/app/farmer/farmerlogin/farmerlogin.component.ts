import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HomeNavbarComponent } from "../../home-navbar/home-navbar.component";

@Component({
  selector: 'app-farmerlogin',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HomeNavbarComponent],
  templateUrl: './farmerlogin.component.html',
  styleUrl: './farmerlogin.component.scss'
})
export class FarmerloginComponent {


   constructor(private httpclient: HttpClient,private router:Router) {}
  
  
    public loginrequestFarmer: FormGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  
  
    public handlesubmitFarmer() {
      {
        const url = 'http://localhost:8080/login/farmer';
  
        console.log(this.loginrequestFarmer.value);
        this.httpclient.post(url, this.loginrequestFarmer.value).subscribe(
          (response: any) => {
            console.log(response);

            if (response) {
             
              this.router.navigate(['/home'])
            }
          },//navigate(['/home']);
          (error) => {
            console.log('error for adding book' + error);
          }
        );
      }
    }

}

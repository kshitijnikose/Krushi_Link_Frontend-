import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { time } from 'console';
import { timer } from 'rxjs';
import { HomeNavbarComponent } from "../../home-navbar/home-navbar.component";

@Component({
  selector: 'app-buyer-registration',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, UpperCasePipe, HomeNavbarComponent],
  templateUrl: './buyer-registration.component.html',
  styleUrl: './buyer-registration.component.scss'
})
export class BuyerRegistrationComponent {
constructor(private httpclient:HttpClient){ }

  buyer= new FormGroup({  
    firstName: new FormControl(),
     lastName:new FormControl(),
     email_id:new FormControl(),
     phone_number : new FormControl(),
      address : new FormControl(),
      password:new FormControl()
  });

  handleSubmit(){
    const url = "http://localhost:8080/buyer"

    console.log(this.buyer.value);
     this.httpclient.post(url,this.buyer.value).subscribe((response:any)=>   {
      console.log(response);

      if(response){

        
      }

    }, error=> {
      console.log("error for adding buyer" + error);
    })

  }

  reloadPage(): void {
    window.location.reload(); // This will reload the entire page
  }

  currenttiime=timer;

  today=Date.now();
  tag="Buyer Registration";

  myNumber=1455554;
}

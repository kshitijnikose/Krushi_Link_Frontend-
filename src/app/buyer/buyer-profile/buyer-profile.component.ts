import { Component } from '@angular/core';
import { BuyerNavbarComponent } from "../buyer-navbar/buyer-navbar.component";
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-buyer-profile',
  imports: [BuyerNavbarComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './buyer-profile.component.html',
  styleUrl: './buyer-profile.component.scss'
})
export class BuyerProfileComponent {

 constructor(private httpclient:HttpClient){ }

  buyer=new FormGroup({

firstName: new FormControl(),
lastName: new FormControl(),
phone_number:new FormControl(),
email_id:new FormControl(),
address:new FormControl()

  });

  handleSubmit(){

        const url = "http://localhost:8080/buyer/1"

        console.log(this.buyer.value);

        this.httpclient.put(url,this.buyer.value).subscribe((response:any)=>
        {

          console.log(response);
        }
        ,error=>{
          console.log("error to edit profile "+error)      
        
        }
        )}

  }



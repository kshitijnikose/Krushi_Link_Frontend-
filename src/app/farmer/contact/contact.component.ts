import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomeNavbarComponent } from "../../home-navbar/home-navbar.component";
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule, ReactiveFormsModule], // Removed unnecessary imports
})
export class ContactComponent {
  constructor(private httpclient: HttpClient) {}

  contactUs = new FormGroup({
    name: new FormControl('', []), // You can add validation rules here
    email: new FormControl('', []),
    message: new FormControl('', []),
  });

  responseMessage = '';

  onSubmit() {
    if (this.contactUs.valid) {
      const { name } = this.contactUs.value;
      this.responseMessage = `Thank you, ${name}, for contacting us!`;

      // Reset the form after submission
     

      const url = 'http://localhost:8080/contact';
      console.log(this.contactUs.value);

      this.httpclient.post(url, this.contactUs.value).subscribe(
        (response: any) => {
          console.log(response.value);
        },
        (error) => {
          console.log('Error while submitting the form: ' + error);
          
        }
      );
      this.contactUs.reset();
    }
  }
}

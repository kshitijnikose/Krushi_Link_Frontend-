import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FarmerRegistrationComponent } from './farmer/farmer-registration/farmer-registration.component';
import { BuyerRegistrationComponent } from './buyer/buyer-registration/buyer-registration.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Farmer';




  }



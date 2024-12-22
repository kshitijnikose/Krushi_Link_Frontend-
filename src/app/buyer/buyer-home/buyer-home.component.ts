import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginNavbarComponent } from "../../farmer/login-navbar/login-navbar.component";
import { BuyerNavbarComponent } from "../buyer-navbar/buyer-navbar.component";

@Component({
  selector: 'app-buyer-home',
  imports: [ BuyerNavbarComponent],
  templateUrl: './buyer-home.component.html',
  styleUrl: './buyer-home.component.scss'
})
export class BuyerHomeComponent {

}

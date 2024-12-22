import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuyerNavbarComponent } from "../buyer-navbar/buyer-navbar.component";

@Component({
  selector: 'app-buyer-contact',
  imports: [ BuyerNavbarComponent],
  templateUrl: './buyer-contact.component.html',
  styleUrl: './buyer-contact.component.scss'
})
export class BuyerContactComponent {

}

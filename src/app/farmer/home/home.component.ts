import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";

@Component({
  selector: 'app-home',
  imports: [ LoginNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

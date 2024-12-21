import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginNavbarComponent } from "../../login-navbar/login-navbar.component";

@Component({
  selector: 'app-profile',
  imports: [RouterLink, LoginNavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}

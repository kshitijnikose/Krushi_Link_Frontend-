import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";

@Component({
  selector: 'app-post',
  imports: [RouterLink, LoginNavbarComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

}

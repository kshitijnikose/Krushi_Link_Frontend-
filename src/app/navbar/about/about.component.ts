import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  teamMembers = [
    { name: 'Tejas Pradip Wakchaure', role: 'Founder & Developer', photo: 'assets/images/tejas.jpg' },
    { name: 'John Doe', role: 'Backend Specialist', photo: 'assets/images/john.jpg' },
    { name: 'Jane Smith', role: 'UI/UX Designer', photo: 'assets/images/jane.jpg' },
  ];
}
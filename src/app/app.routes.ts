import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from './register/register.component';
import { FarmerRegistrationComponent } from './farmer/farmer-registration/farmer-registration.component';
import { BuyerRegistrationComponent } from './buyer/buyer-registration/buyer-registration.component';
import { HomeComponent } from './farmer/home/home.component';
import { PostComponent } from './farmer/post/post.component';
import { AboutComponent } from './navbar/about/about.component';
import { ProfileComponent } from './farmer/profile/profile.component';
import { ContactComponent } from './farmer/contact/contact.component';
import { FarmerloginComponent } from './farmer/farmerlogin/farmerlogin.component';
import { BuyerloginComponent } from './buyer/buyerlogin/buyerlogin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';

export const routes: Routes = [
    // {
    //     path:'',redirectTo:'register' , pathMatch:'full'
    // },
    {
        path:'',
        component:WelcomeComponent
    },
    {
        path:'login' , component:LoginComponent
    },
    {
       path:'register' , 
       component:RegisterComponent
    },
    {
        path:'farmer' ,
         component:FarmerRegistrationComponent
    },
    {
        path:'buyer',
        component:BuyerRegistrationComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'post',
        component:PostComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'farmerlogin',
        component:FarmerloginComponent
    },
    {
        path:'buyerlogin',
        component:BuyerloginComponent
    },
    {
        path:'welcome',
        component:WelcomeComponent
    },
    {
        path:'home-navbar',
        component:HomeNavbarComponent
    },{
        path:'login-navbar',
        component:LoginNavbarComponent
    }
   
];

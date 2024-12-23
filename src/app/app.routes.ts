import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signin', component: SigninPageComponent },
  { path: 'register', component: RegisterPageComponent },
];

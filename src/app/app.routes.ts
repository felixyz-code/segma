import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'login', component: LoginComponent }, 
    { path: 'dashboard', component: DashboardComponent }, 
    { path: 'cotizacion', component: CotizacionComponent },  
    { path: '**', component: NotFoundComponent }
];
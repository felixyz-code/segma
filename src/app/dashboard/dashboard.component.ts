import { Component } from '@angular/core';
import { LandingPageHeaderComponent } from '../landing-page-comunes/landing-page-header/landing-page-header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LandingPageHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cotizacion: String = 'Cotización';

}

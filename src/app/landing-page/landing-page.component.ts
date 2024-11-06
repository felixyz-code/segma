import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageHeaderComponent } from '../landing-page-comunes/landing-page-header/landing-page-header.component';
import { LandingPageFooterComponent } from '../landing-page-comunes/landing-page-footer/landing-page-footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ RouterOutlet, LandingPageHeaderComponent, LandingPageFooterComponent ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  title = 'SEGMA';
  address = 'Calle Paseo Perla Tahiti 95. Fraccionamiento Perla Marina II';
  schedule = 'Lunes a Sábado de 9:00 a 18:00 hrs';
  phone = '622 221 22 22';
}

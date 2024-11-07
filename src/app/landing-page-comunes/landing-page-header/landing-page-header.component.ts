import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page-header',
  standalone: true,
  imports: [],
  templateUrl: './landing-page-header.component.html',
  styleUrl: './landing-page-header.component.css'
})
export class LandingPageHeaderComponent {
  title: String = 'SEGMA';
  address: String = 'Calle Paseo Perla Tahiti 95. Fraccionamiento Perla Marina II';
  schedule: String = 'Lunes a Sábado de 9:00 a 18:00 hrs';
  phone: String = '622 221 22 22';
  home: String = 'Inicio';
  about: String = 'Acerca de';
  services: String = 'Servicios';
  pages: String = 'Más';
  booking: String = 'Solicitar Cita';
  team: String = 'Nuestro Equipo';
  login: String = 'Iniciar Sesión';
  contact: String = 'Contacto';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page-footer',
  standalone: true,
  imports: [],
  templateUrl: './landing-page-footer.component.html',
  styleUrl: './landing-page-footer.component.css'
})
export class LandingPageFooterComponent {
  [x: string]: any;
  tittle: String = 'SEGMA-Taller Mecánico';
  addressTittle: String = 'Dirección';
  address: String = 'Calle Paseo Perla Tahiti 95. Fraccionamiento Perla Marina II';
  phone: String = '622 164 34 93';
  email: String = 'taller@segma.com';
  scheduleTittle: String = 'Horario';
  weekDays: String = 'Lunes - Viernes';
  weekDaysSchedule: String = '9:00 a 18:00 hrs';
  weekend: String = 'Sabado'
  weekendSchedule: String = '9:00 a 14:00 hrs';
  servicesTittle: String = 'Servicios';
  diagnosticTest: String = 'Diagnóstico de fallas';
  engineServicing: String = 'Servicio de motor'
  tiresReplacement: String = 'Cambio de llantas';
  oilChanging: String = 'Cambio de aceite';
  vacuamCleanig: String = 'Limpieza con aspiradora';
  newsletter: String = 'Suscríbete a nuestro boletín';
  newsletterMessage: String = 'Recibe noticias y promociones exclusivas';
  yourEmail: String = 'Tu Email';
  signUp: String = 'Suscribirme';
  designerName: String = 'Enrique Felix';
  designedBy: String = 'Diseñado por';
  allRights: String = 'Todos los derechos reservados';
}

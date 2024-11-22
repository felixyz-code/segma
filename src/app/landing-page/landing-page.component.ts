import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageHeaderComponent } from '../landing-page-comunes/landing-page-header/landing-page-header.component';
import { LandingPageFooterComponent } from '../landing-page-comunes/landing-page-footer/landing-page-footer.component';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet, LandingPageHeaderComponent, LandingPageFooterComponent, GoogleMapsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
    console.error('Method not implemented.');
  }

  center: google.maps.LatLngLiteral = { lat: 27.96023340000004, lng: -110.91427439999998 }; // Coordenadas iniciales
  zoom = 15; // Nivel de zoom

  // Coordenadas del marcador
  markerPosition: google.maps.LatLngLiteral = { lat: 27.96023340000004, lng: -110.91427439999998 };
  // Ícono rojo para el marcador
  redMarkerIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

  [x: string]: any;
  title = 'SEGMA';
  address = 'Calle Paseo Perla Tahiti 95. Fraccionamiento Perla Marina II';
  schedule = 'Lunes a Sábado de 9:00 a 18:00 hrs';
  phone = '622 221 22 22';
  infoSedan: String = 'Servicio de mantenimiento para autos compactos';
  titleSedan: String = 'Especialistas en autos de tipo Sedan';
  infoPickup: String = 'Servicio confiable para vehículos de carga ligera';
  titlePickup: String = 'Mantenimiento y reparación para Pick-Ups';
  infoTruck: String = 'Soluciones para camiones y vehículos industriales';
  titleTruck: String = 'Reparación de vehículos de carga pesada';
  qualifiedCarWashServiceCenter: String = 'Centro de reparación de automóviles calificado';
  details: String = 'Detalles';
  ourServices: String = 'Nuestros servicios';
  squadSpecialized: String = 'Nos especializamos en flotillas de autos y camiones';
  squadCare: String = 'Expertos en el cuidado de flotillas automotrices';
  squadExperience: String = 'Con más de 10 años de experiencia, en SEGMA ofrecemos servicios especializados para toda clase de vehículos:';
  sedanTitle: String = 'Autos Sedan';
  sedanDescription: String = 'Mantenimiento de precisión para autos compactos y ejecutivos.';
  pickupTitle: String = 'Pick-ups';
  pickupDescription: String = 'Reparación y optimización para flotillas de trabajo ligero.';
  truckTitle: String = 'Carga pesada';
  truckDescription: String = 'Soluciones robustas para camiones y vehículos industriales.';
  yearsOfExperience: String = '10';
  years: String = 'Años';
  ofExperience: String = 'de experiencia';
  readMore: String = 'Leer más';
  bestPlaceDescription: String = 'Con más de 10 años de experiencia en la industria automotriz, nuestro equipo de mecánicos altamente calificados y con experiencia en la industria automotriz, garantiza un servicio de calidad y confiable.';
  profesionalAndExpert: String = 'Profesional y experto';
  profesionalAndExpertDescription = 'Nuestro equipo de mecánicos altamente calificados y con experiencia en la industria automotriz, garantiza un servicio de calidad y confiable.';
  qualityServiceCenter: String = 'Centro de servicio de calidad';
  qualityServiceCenterDescription = 'Nuestro centro de servicio de calidad se especializa en la reparación de automóviles y camiones de todas las marcas y modelos.';
  testimonial: String = 'Testimonios';
  testimonialDescription: String = 'Nuestros clientes satisfechos son nuestra mejor publicidad.';
  exploreOurServices: String = 'Explora nuestros servicios';
  diagnosticTest: String = 'Prueba de diagnóstico';
  engineServicing: String = 'Servicio de motor';
  tiresReplacement: String = 'Reemplazo de llantas';
  oilChanging: String = 'Cambio de aceite';
  inCarServices: String = 'en Servicios de reparación de automóviles';
  yearsOfExperienceDescription: String = 'Contamos con una gran variedad de servicios de reparación de automóviles y camiones de todas las marcas y modelos.';
  qualityServicing: String = 'Servicio de calidad';
  expertWorkers: String = 'Trabajadores expertos';
  modernEquipment: String = 'Equipo moderno';
  bookAnAppoinment: String = 'Reserva una cita';
  bookAnAppoinmentDescription: String = 'Reserve una cita con nuestros mecánicos expertos para el mantenimiento de su automóvil. ¡Estamos listos para ayudarte!';
  bookForAService: String = 'Reserva una cita';
  yourName: String = 'Tu nombre';
  yourEmail: String = 'Tu correo electrónico';
  selectAService: String = 'Selecciona un servicio';
  serviceDate: String = 'Fecha del servicio';
  specialRequest: String = 'Solicitud especial';
  bookNow: String = 'Agenda ahora';
  knowUs: String = 'Conócenos';
  ourExpertTechnicians: String = 'Nuestros técnicos expertos';
  visitUs: String = 'Visítanos';
  knowOurUbication: String = 'Conoce nuestra ubicación';
}

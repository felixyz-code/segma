import { Component } from '@angular/core';
import { LandingPageHeaderComponent } from "../../landing-page-comunes/landing-page-header/landing-page-header.component";
import { LandingPageFooterComponent } from '../../landing-page-comunes/landing-page-footer/landing-page-footer.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [LandingPageHeaderComponent, LandingPageFooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  notFoundNumber: String = '404';
  pageNotFound: String = 'Página no encontrada';
  sorryNotFoundMessage: String = 'Lo sentimos, la página que buscas no se encuentra. Puedes volver a la página de inicio.';
  backToHome: String = 'Volver a inicio';
}

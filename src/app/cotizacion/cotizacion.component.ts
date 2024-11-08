import { Component } from '@angular/core';
import { ServicesService } from '../services/data/services.service';

@Component({
  selector: 'app-cotizacion',
  standalone: true,
  imports: [],
  templateUrl: './cotizacion.component.html',
  styleUrl: './cotizacion.component.css'
})
export class CotizacionComponent {

  servicios: any;

  constructor(private services: ServicesService) { }

  ngOnInit() {
    this.services.getServicios().subscribe((data) => {
      this.servicios = data;
      console.log(this.servicios);
    });
  }

}

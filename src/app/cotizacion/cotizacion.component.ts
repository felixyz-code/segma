import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DashboardHeaderComponent } from "../dashboard-comunes/dashboard-header/dashboard-header.component";
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
const doc = new jsPDF();

@Component({
  selector: 'app-cotizacion',
  standalone: true,
  imports: [ReactiveFormsModule, DashboardHeaderComponent],
  templateUrl: './cotizacion.component.html',
  styleUrl: './cotizacion.component.css'
})
export class CotizacionComponent implements OnInit {

  cotizacionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cotizacionForm = this.fb.group({
      // Cabecera
      sucursal: [{ value: 'Sucursal X', disabled: true }],
      telefono: [{ value: '123456789', disabled: true }],
      direccion: [{ value: 'Calle Falsa 123', disabled: true }],
      fecha: [{ value: new Date().toISOString().split('T')[0], disabled: true }],
      correo: [{ value: 'contacto@ejemplo.com', disabled: true }],

      // Cliente
      nombreCliente: ['', Validators.required],
      vehiculo: ['', Validators.required],
      anio: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      crp: ['', Validators.required],
      odometro: ['', Validators.required],
      vin: ['', Validators.required],

      // Refacciones
      cantidadRefaccion: [1, Validators.required],
      descripcionRefaccion: ['', Validators.required],
      precioRefaccion: [{ value: 500, disabled: true }],
      importeRefaccion: [{ value: 0, disabled: true }],
      subtotalRefacciones: [{ value: 0, disabled: true }],

      // Mano de Obra
      cantidadManoObra: [1, Validators.required],
      descripcionManoObra: ['', Validators.required],
      precioManoObra: [{ value: 200, disabled: true }],
      importeManoObra: [{ value: 0, disabled: true }],
      subtotalManoObra: [{ value: 0, disabled: true }],

      // Totales
      subtotalTotal: [{ value: 0, disabled: true }],
      iva: [{ value: 0, disabled: true }],
      isr: [{ value: 0, disabled: true }],
      total: [{ value: 0, disabled: true }]
    });

    // Lógica de cálculo para refacciones y mano de obra
    this.cotizacionForm.get('cantidadRefaccion').valueChanges.subscribe(value => this.calculateRefaccion());
    this.cotizacionForm.get('cantidadManoObra').valueChanges.subscribe(value => this.calculateManoObra());
  }

  // Métodos de cálculo
  private calculateRefaccion(): void {
    const cantidad = this.cotizacionForm.get('cantidadRefaccion').value || 0;
    const precio = 100; // Ejemplo de precio fijo
    const importe = cantidad * precio;

    this.cotizacionForm.patchValue({
      precioRefaccion: precio,
      importeRefaccion: importe,
      subtotalRefacciones: importe // Asumiendo una sola línea de refacción
    });
    this.calculateTotals();
  }

  private calculateManoObra(): void {
    const cantidad = this.cotizacionForm.get('cantidadManoObra').value || 0;
    const precio = 200; // Ejemplo de precio fijo
    const importe = cantidad * precio;

    this.cotizacionForm.patchValue({
      precioManoObra: precio,
      importeManoObra: importe,
      subtotalManoObra: importe // Asumiendo una sola línea de mano de obra
    });
    this.calculateTotals();
  }

  private calculateTotals(): void {
    const subtotalRefacciones = this.cotizacionForm.get('subtotalRefacciones').value || 0;
    const subtotalManoObra = this.cotizacionForm.get('subtotalManoObra').value || 0;
    const subtotal = subtotalRefacciones + subtotalManoObra;
    const iva = subtotal * 0.16; // Ejemplo de IVA 16%
    const isr = subtotal * 0.0125; // Ejemplo de ISR 1.25%
    const total = subtotal + iva + isr;

    this.cotizacionForm.patchValue({
      subtotalTotal: subtotal,
      iva: iva,
      isr: isr,
      total: total
    });
  }

  // Procesa el formulario al enviarlo
  onSubmit(): void {
    if (this.cotizacionForm.valid) {
      const cotizacionData = this.cotizacionForm.getRawValue();
      console.log('Datos de Cotización:', cotizacionData);
      this.createPDF(cotizacionData);
    }
  }

  createPDF (data: any) {
    const doc = new jsPDF();
  
    // Configuración de la tabla con una fila de encabezado personalizada
    autoTable(doc, {
      head: [
        [{ content: 'Presupuesto', styles: { fillColor: [200, 200, 200], textColor: [0, 0, 0], fontSize: 14, halign: 'center', fontStyle: 'bold' } }]
      ],
      body: [
        // Aquí puedes agregar filas de ejemplo para los datos que desees
        [{ content: 'Esta es una fila de ejemplo 1' }],
        [{ content: 'Esta es una fila de ejemplo 2' }]
      ],
      // Configura el ancho de la tabla para que ocupe toda la página, dejando márgenes
      tableWidth: 'auto',
      margin: { top: 10, left: 10, right: 10 }, // Márgenes alrededor de la tabla
      styles: {
        cellPadding: 10,
        fontSize: 12,
        lineColor: [0, 0, 0], // Color del borde
        lineWidth: 0.5 // Grosor del borde de la tabla
      },
      theme: 'grid', // Define la tabla con contorno
    });
  
    // Guarda o muestra el PDF
    doc.save('presupuesto.pdf');
  }

}
